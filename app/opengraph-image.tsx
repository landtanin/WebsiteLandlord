import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const alt = 'Spray Foam Insulation Removal in Birmingham';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f8fafc',
          color: '#0b3a5a',
          padding: 64,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700 }}>{siteConfig.tradingName}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05, maxWidth: 920 }}>
            Spray Foam Insulation Removal in Birmingham
          </div>
          <div style={{ marginTop: 28, fontSize: 36, color: '#334155' }}>
            Birmingham & West Midlands
          </div>
        </div>
        <div
          style={{
            alignSelf: 'flex-start',
            display: 'flex',
            borderRadius: 10,
            background: '#e07a1f',
            color: 'white',
            padding: '20px 32px',
            fontSize: 40,
            fontWeight: 800,
          }}
        >
          Call {siteConfig.phone.display}
        </div>
      </div>
    ),
    size,
  );
}
