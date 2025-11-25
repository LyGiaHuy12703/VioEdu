import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { useRef, useState } from 'react';
import { m, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varSlide, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------
const motionProps: MotionProps = { variants: varSlide('inLeft', { distance: 800 }) };

// ----------------------------------------------------------------------
export function HomeHero({ sx, ...other }: BoxProps) {
  const scrollProgress = useScrollPercent();
  const opacity = useTransform(scrollProgress.scrollY, [0, 200], [1, 0]);

  const renderButtons = () => (
    <>
      <m.div>
        <Button variant="contained" color="success" size="large" sx={{ mb: 3, px: 4 }}>
          Học thử ngay
        </Button>
      </m.div>
      <m.div>
        <Button size="large" sx={{ color: 'text.primary' }}>
          <Iconify icon="solar:play-circle-bold" width={28} color="#22C55E" sx={{ mr: 1.5 }} />
          Giới thiệu về VioEdu
        </Button>
      </m.div>
    </>
  );

  const renderHeading = () => (
    <m.div>
      <Box sx={{ maxWidth: { xs: '100%', md: 600 }, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 36, md: 50 },
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'rgb(46, 58, 89)',
            mb: 2,
          }}
        >
          Nền tảng học trực tuyến với AI
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 18, md: 24 },
            color: 'rgb(46, 58, 89)',
            opacity: 0.8,
            mb: 5,
            lineHeight: 1.6,
          }}
        >
          Được đề xuất bởi Bộ Khoa học & Công nghệ
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          {renderButtons()}
        </Box>
      </Box>
    </m.div>
  );

  return (
    <MotionViewport
      viewport={{
        once: false,
        amount: 0.4,
        margin: '-100px',
      }}
      disableAnimate={false}
    >
      <Box
        ref={scrollProgress.elementRef}
        component="section"
        sx={[
          {
            overflow: 'hidden',
            position: 'relative',
            minHeight: { xs: '100vh', md: '140vh' },
            mt: { md: 'calc(var(--layout-header-desktop-height) * -1)' },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Grid>
          <Grid>
            <Box
              component={m.div}
              style={{ opacity }}
              sx={{
                position: { md: 'fixed' },
                top: 150,
                left: 0,
                width: 1,
                height: '100vh',
                zIndex: 10,
                pointerEvents: 'none',
                '& > *': { pointerEvents: 'auto' },
              }}
            >
              <Container
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  py: { xs: 8, md: 'var(--layout-header-desktop-height)' },
                  pointerEvents: 'none',
                }}
              >
                <m.div {...motionProps}>{renderHeading()}</m.div>
              </Container>
            </Box>
          </Grid>
          <Grid />
        </Grid>
      </Box>
    </MotionViewport>
  );
}

function useScrollPercent() {
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollY, 'change', () => {
    if (!elementRef.current) return;
    const rect = elementRef.current.getBoundingClientRect();
    const heroHeight = elementRef.current.offsetHeight;
    const scrolled = -rect.top;
    const scrollPercent = Math.min(Math.max((scrolled / heroHeight) * 100, 0), 100);
    setPercent(Math.round(scrollPercent));
  });

  return { elementRef, percent, scrollY };
}
