import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { varSlide, MotionViewport } from 'src/components/animate';

export function HomeRewardVio() {
  return (
    <MotionViewport
      viewport={{
        once: false,
        amount: 0.01,
        margin: '-100px',
      }}
      disableAnimate={false}
    >
      {' '}
      <m.div
        variants={varSlide('inRight', { distance: 1200 })}
        style={
          {
            '--distance': '100vw',
            overflow: 'hidden',
          } as React.CSSProperties
        }
      >
        <Typography variant="h3" sx={{ textAlign: 'center', my: 5 }}>
          Giải thưởng VioEdu
        </Typography>

        <Box
          component="img"
          src="/assets/icons/vio/reward.png"
          alt="Reward"
          sx={{ width: 700, mx: 'auto', display: 'block' }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Button variant="contained" color="success" size="large">
            Khám phá ngay
          </Button>
        </Box>
      </m.div>
    </MotionViewport>
  );
}
