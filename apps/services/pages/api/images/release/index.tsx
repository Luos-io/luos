import { ImageResponse } from '@vercel/og';
import { valid } from 'semver';

import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const version = searchParams.get('version');

  return new ImageResponse(
    (
      <div
        style={{ position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column' }}
      >
        <img
          style={{
            width: 1203,
            height: 630,
          }}
          src={`${req.nextUrl.origin}/app/assets/images/nebula.svg`}
        />
        {version && valid(version) && (
          <p
            style={{
              position: 'absolute',
              top: 0,
              fontFamily: '"Roboto", sans-serif',
              fontSize: '96px',
              textAlign: 'center',
              color: 'white',
            }}
          >
            Luos_engine release : {version}
          </p>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
