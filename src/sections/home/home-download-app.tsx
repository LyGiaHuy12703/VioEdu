import Image from 'next/image';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { varSlide, MotionViewport } from 'src/components/animate';

export function HomeDownloadApp() {
  return (
    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <MotionViewport viewport={{ once: false, amount: 0.4 }} disableAnimate={false}>
        <m.div variants={varSlide('inLeft', { distance: 600 })}>
          <Grid
            size={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              flexFlow: 'column',
            }}
          >
            <Box sx={{ my: 3 }}>
              <Typography variant="h2">Học trên mọi thiết bị</Typography>
            </Box>
            <Box sx={{ width: 400 }}>
              <Typography variant="h6" sx={{ textAlign: 'center' }}>
                Để có thể học tập ở bất cứ nơi nào, bất cứ thời gian nào với Ứng dụng VioEdu dành
                cho học sinh
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Image
                src="/assets/icons/vio/Google_Play_New.png"
                alt="google play"
                width={146}
                height={43}
                style={{ marginRight: 10 }}
              />
              <Image
                src="/assets/icons/vio/App_Store_New.png"
                alt="app store"
                width={146}
                height={43}
              />
            </Box>
          </Grid>
        </m.div>
      </MotionViewport>
      <MotionViewport viewport={{ once: false, amount: 0.4 }}>
        <m.div variants={varSlide('inRight', { distance: 600 })}>
          <Grid
            size={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Image src="/assets/icons/vio/device.png" alt="device" width={363} height={270} />
          </Grid>
        </m.div>
      </MotionViewport>
    </Grid>
  );
}
