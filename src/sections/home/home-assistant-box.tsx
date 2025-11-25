import type { BoxProps } from '@mui/material/Box';
import type { Variants, MotionProps, TargetAndTransition } from 'framer-motion'; // 1. Nhớ import Variants

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { assistantData } from 'src/layouts/nav-config-main';

import { varFade, MotionViewport } from 'src/components/animate';

type AssistantBoxMotionProps = Pick<
  MotionProps,
  'initial' | 'whileInView' | 'viewport' | 'variants' | 'transition'
>;

interface HomeAssistantBoxProps extends BoxProps, AssistantBoxMotionProps {}

export function HomeAssistantBox({ sx }: HomeAssistantBoxProps) {
  const baseVariants = varFade('inUp', {
    distance: 200,
  });

  const customVariants: Variants = {
    initial: {
      ...(baseVariants.initial as TargetAndTransition),
      opacity: 0,
      pointerEvents: 'none',
      transition: { duration: 0 },
    },
    animate: {
      ...(baseVariants.animate as TargetAndTransition),
      opacity: 1,
      pointerEvents: 'auto',
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Box
      sx={{
        mx: 'auto',
        textAlign: 'center',
        p: { xs: 4, md: 6 },
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.z24,
        background: 'linear-gradient(145deg, #ffffff 0%, #f9fff9 100%)',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <MotionViewport
        viewport={{
          once: false,
          amount: 0.4,
          margin: '-100px',
        }}
        disableAnimate={false}
      >
        <m.div variants={customVariants}>
          <m.div>
            <Typography
              variant="h4"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 3,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
              }}
            >
              Trợ lý học tập thông minh VioEdu
            </Typography>
          </m.div>

          <Box sx={{ display: 'flex' }}>
            {assistantData.map((item, index) => (
              <m.div key={index}>
                <Box sx={{ my: 3 }}>
                  <img src={item.image} alt="" />
                  <Typography
                    variant="h5"
                    fontWeight={500}
                    lineHeight={1}
                    sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, mt: 3, mb: 2 }}
                  >
                    {item.quantity}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                    sx={{
                      fontSize: { xs: 14, md: 16 },
                      lineHeight: 1.5,
                      px: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </m.div>
            ))}
          </Box>
        </m.div>
      </MotionViewport>
    </Box>
  );
}
