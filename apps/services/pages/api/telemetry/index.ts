import mongoClient from '@packages/services/mongo/mongodbAdapter';
import { valid } from 'semver';

import { TelemetrySystemObject } from 'types/telemetry';

import type { NextApiRequest, NextApiResponse } from 'next';

import { TelemetryType, TelemetryLuosEngine, TelemetryPyluos } from 'types/telemetry';
import { InsertOneResult } from 'mongodb';

export const saveTelemetry = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const {
        telemetry_type,
        system,
        mac,
        unix_time,
        pyluos_rev: pyluos,
        luos_hal: hal,
        framework,
        platform,
        mcu,
        f_cpu,
        routing_table,
      } = req.body;

      if (telemetry_type && system && mac && unix_time) {
        const db = (await mongoClient).db();
        const macBuffer = Buffer.from(mac.substring(2), 'hex');
        let insertOneResult: InsertOneResult | null = null;
        switch (telemetry_type) {
          case TelemetryType.luos_engine_build:
            if (
              pyluos &&
              hal &&
              framework &&
              platform &&
              mcu &&
              f_cpu &&
              valid(pyluos) &&
              TelemetrySystemObject.includes(system.toUpperCase()) &&
              macBuffer.length === 6
            ) {
              insertOneResult = await db.collection<TelemetryLuosEngine>('telemetry').insertOne({
                type: telemetry_type,
                system,
                mac: macBuffer,
                duration: new Date().getTime() - unix_time,
                pyluos,
                hal,
                framework,
                platform,
                mcu,
                f_cpu,
              });
            }
            break;
          case TelemetryType.pyluos:
            if (routing_table && macBuffer.length === 6) {
              insertOneResult = await db.collection<TelemetryPyluos>('telemetry').insertOne({
                type: telemetry_type,
                system,
                mac: macBuffer,
                duration: new Date().getTime() - unix_time,
                routing_table,
              });
            }
            break;
        }

        console.log('RESULT', insertOneResult);
        if (insertOneResult) {
          if (process.env.DEBUG && insertOneResult.acknowledged && insertOneResult.insertedId) {
            console.log(
              `[DEBUG][Telemetry] ${telemetry_type.toUpperCase()} (${
                insertOneResult.insertedId
              }) successfully saved`,
            );
          }
          res.status(200).send({
            result: 'success',
          });
        } else {
          res.status(400).send({
            result: 'invalid request',
          });
        }
      } else {
        res.status(400).send({
          result: 'invalid request',
        });
      }
    }
  } catch (err) {
    res.status(500).send({ error: 'failed to save telemetry data' });
  } finally {
    res.end();
  }
};
export default saveTelemetry;
