'use client';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import GiftBox from '../gift-box';

export function GiftExchangeView() {
  return (
    <Box sx={{ bgcolor: '#F0F0E6', minHeight: '100vh', position: 'relative', pb: 10 }}>
      <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
        <Image
          src="/assets/background/bg_left.png"
          alt="background-left"
          width={328}
          height={234}
          style={{
            zIndex: 0,
          }}
        />
        <Image
          src="/assets/background/bg_right.png"
          alt="background-right"
          width={328}
          height={234}
          style={{
            zIndex: 0,
          }}
        />
      </Stack>
      <GiftBox />
    </Box>
  );
}
