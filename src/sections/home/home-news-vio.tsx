import Image from 'next/image';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { News_Paper } from 'src/layouts/nav-config-main';

import { varSlide, MotionViewport } from 'src/components/animate';

const firstRow = News_Paper.slice(0, 4);
const secondRow = News_Paper.slice(4, 8);
export function HomeNewsVio() {
  return (
    <MotionViewport viewport={{ once: false, amount: 0.01 }}>
      <m.div
        variants={varSlide('inLeft', { distance: 1000 })}
        style={{ marginTop: 50, marginBottom: 50 }}
      >
        <Typography variant="h3" sx={{ textAlign: 'center', my: 10 }}>
          Báo chí nói về VioEdu
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 3, sm: 6, md: 8 }}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          {firstRow.map((item) => (
            <Box
              key={item.name}
              sx={{
                width: { xs: 80, sm: 120, md: 160, lg: 200 },
                height: 'auto',
                '& img': { objectFit: 'contain' },
              }}
            >
              <Image
                src={item.logo}
                alt={`Logo ${item.name}`}
                width={200}
                height={100}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 120,
                }}
                priority
              />
            </Box>
          ))}
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 3, sm: 6, md: 8 }}
        >
          {secondRow.map((item) => (
            <Box
              key={item.name}
              sx={{
                width: { xs: 80, sm: 120, md: 160, lg: 200 },
                height: 'auto',
                '& img': { objectFit: 'contain' },
              }}
            >
              <Image
                src={item.logo}
                alt={`Logo ${item.name}`}
                width={200}
                height={100}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 120,
                }}
                priority
              />
            </Box>
          ))}
        </Stack>
      </m.div>
    </MotionViewport>
  );
}
