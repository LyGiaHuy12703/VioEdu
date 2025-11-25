import type { Variants, TargetAndTransition } from 'framer-motion';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const programs = [
  {
    title: 'Toán VioEdu',
    color: '#4caf50',
    bgGradient: 'linear-gradient(135deg, #a7e6c0 0%, #81c995 100%)',
    image: '/assets/icons/vio/mathVio.png',
    classes: ['Lớp 1, 2, 3, 4, 5', 'Lớp 6, 7, 8, 9', 'Lớp 12'],
  },
  {
    title: 'Tiếng Việt',
    color: '#ff9800',
    bgGradient: 'linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%)',
    image: '/assets/icons/vio/tvPic.png',
    classes: ['Lớp 1, 2, 3, 4, 5'],
  },
  {
    title: 'Toán Tiếng Anh',
    color: '#1976d2',
    bgGradient: 'linear-gradient(135deg, #90caf9 0%, #42a5f5 100%)',
    image: '/assets/icons/vio/matheng.png',
    classes: ['Lớp 1, 2, 3, 4, 5'],
  },
];

// ----------------------------------------------------------------------

export function HomePrograms() {
  const baseVariants = varFade('inUp', {
    distance: 100,
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
  const renderButtonLearn = () => (
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
      <Button color="success" variant="contained" size="large">
        Học thử ngay
      </Button>
    </Box>
  );
  const renderInfo = () => (
    <Box sx={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', my: 3 }}>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Lộ trình học tập cá nhân hóa
      </Typography>

      <Typography sx={{ textAlign: 'center' }}>
        AI của VioEdu phát hiện chính xác đến 95% điểm mạnh,
      </Typography>
      <Typography sx={{ textAlign: 'center' }}>
        điểm yếu của học sinh trong từng bài luyện tập, trận đấu.
      </Typography>
    </Box>
  );
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <MotionViewport
        viewport={{
          once: false,
          amount: 0.01,
          margin: '-100px',
        }}
        disableAnimate={false}
      >
        <m.div variants={customVariants}>
          <Box>
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 8, fontWeight: 800 }}>
              Chương trình học được quan tâm nhất
            </Typography>
          </Box>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {programs.map((program) => (
              <m.div key={program.title} whileHover="hover">
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
                      transform: 'translateY(-8px)',
                    },
                    height: 450,
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 180, md: 220 },
                      background: program.bgGradient,
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={program.image}
                      alt={program.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        position: 'absolute',
                        bottom: 20,
                        left: 24,
                        color: program.title === 'Tiếng Việt' ? '#e65100' : 'white',
                        fontWeight: 900,
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                      }}
                    >
                      {program.title}
                    </Typography>
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: program.color, mb: 2 }}>
                      {program.title}
                    </Typography>

                    <Stack spacing={0.5} sx={{ mb: 3 }}>
                      {program.classes.map((cls) => (
                        <Typography
                          key={cls}
                          variant="body2"
                          sx={{ color: 'text.secondary', fontSize: '0.95rem' }}
                        >
                          {cls}
                        </Typography>
                      ))}
                    </Stack>

                    <Button
                      variant="text"
                      color="primary"
                      endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                      sx={{
                        fontWeight: 600,
                        color: program.color,
                        '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
                      }}
                    >
                      Khám phá ngay
                    </Button>
                  </Box>
                </Card>
              </m.div>
            ))}
          </Stack>
          {renderButtonLearn()}
          {renderInfo()}
        </m.div>
      </MotionViewport>
    </Box>
  );
}
