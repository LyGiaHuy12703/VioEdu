import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varSlide, MotionViewport } from 'src/components/animate';

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
        <Stack sx={{ display: 'flex', justifyContent: 'space-between', flexFlow: 'row' }}>
          <Box component="img" src="/logo/logo-vnexpress.jpg" sx={{ width: { xs: 80, md: 200 } }} />
          <Box component="img" src="/logo/logo-dantri.png" sx={{ width: { xs: 80, md: 200 } }} />
          <Box
            component="img"
            src="/logo/nhipSongSo-logo.png"
            sx={{ width: { xs: 80, md: 200 } }}
          />
          <Box component="img" src="/logo/logo-tienphong.jpg" sx={{ width: { xs: 80, md: 200 } }} />
        </Stack>
        <Stack sx={{ display: 'flex', justifyContent: 'space-between', flexFlow: 'row', my: 5 }}>
          <Box component="img" src="/logo/nld.jpg" sx={{ width: { xs: 80, md: 200 } }} />
          <Box
            component="img"
            src="/logo/nhipSongSo-logo.png"
            sx={{ width: { xs: 80, md: 200 } }}
          />
          <Box component="img" src="/logo/logo-vnexpress.jpg" sx={{ width: { xs: 80, md: 200 } }} />

          <Box
            component="img"
            src="/logo/ICTnews-Logo.jpeg"
            sx={{ width: { xs: 80, md: 200 }, height: 120 }}
          />
        </Stack>
      </m.div>
    </MotionViewport>
  );
}
