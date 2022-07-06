import type { SemVer } from 'semver';

export enum TelemetryType {
  luos_engine_build = 'luos_engine_build',
  pyluos = 'pyluos',
}
export const TelemetryTypeObject = Object.keys(TelemetryType);

export enum TelemetrySystem {
  DARWIN,
  LINUX,
  WINDOWS,
}
export const TelemetrySystemObject = Object.keys(TelemetrySystem);

export type Telemetry = {
  type: TelemetryType;
  system: TelemetrySystem | string;
  mac: Buffer;
  duration: number;
};

export interface TelemetryLuosEngine extends Telemetry {
  pyluos: SemVer;
  hal: string;
  framework: string;
  platform: string;
  mcu: string;
  f_cpu: string;
}

export interface TelemetryPyluos extends Telemetry {
  routing_table: unknown;
}
