import Image from 'next/image';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

export function HomePartnerVio() {
  return (
    <MotionViewport viewport={{ once: false, amount: 0.01 }}>
      <m.div variants={varFade('inUp', { distance: 100 })}>
        <Box sx={{ display: 'flex', flexFlow: 'column', mt: 5 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', my: 5 }}>
            Đối tác chiến lược
          </Typography>
          <Image
            src="/assets/icons/vio/partner.png"
            alt="partner"
            width={2000}
            height={124}
            style={{ height: 124, width: 'auto' }}
          />
        </Box>
      </m.div>
    </MotionViewport>
  );
}
