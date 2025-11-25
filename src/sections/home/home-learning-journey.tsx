import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const steps = [
  {
    number: 1,
    color: '#2196f3',
    bg: '#e3f2fd',
    title: 'Đánh giá đầu vào miễn phí',
    items: ['Đánh giá năng lực'],
    icon: '⭐',
  },
  {
    number: 2,
    color: '#ff9800',
    bg: '#fff3e0',
    title: 'Học tập chủ động',
    items: ['Xem video lý thuyết', 'Luyện tập', 'Làm bài kiểm tra học kỳ'],
    icon: '✨',
  },
  {
    number: 3,
    color: '#4caf50',
    bg: '#e8f5e8',
    title: 'Tương tác, chinh phục',
    items: ['Thách đấu, đấu trường', 'Đổi quà'],
    icon: '🏆',
  },
];

// ----------------------------------------------------------------------

export function HomeLearningJourney() {
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <MotionViewport
          viewport={{
            once: false,
            amount: 0.01,
          }}
          disableAnimate={false}
        >
          <m.div variants={varFade('inUp', { distance: 100 })}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 8, md: 6 }}
              alignItems="center"
              justifyContent="center"
              sx={{ position: 'relative', mt: { xs: 12, md: 8 } }}
            >
              {steps.map((step, index) => (
                <Box key={step.number || index}>
                  <Box sx={{ textAlign: 'center', position: 'relative' }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: step.color,
                        color: 'white',
                        fontSize: '1.8rem',
                        fontWeight: 900,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        boxShadow: `0 8px 20px ${step.color}40`,
                        zIndex: 2,
                        position: 'relative',
                      }}
                    >
                      {step.number}
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: 800, color: step.color, mb: 3 }}>
                      {step.title}
                    </Typography>

                    <Box
                      sx={{
                        bgcolor: step.bg,
                        borderRadius: 6,
                        p: { xs: 3, md: 4 },
                        minHeight: 220,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      }}
                    >
                      <Box sx={{ fontSize: 40, opacity: 0.6, mb: 2, textAlign: 'center' }}>
                        {step.icon}
                      </Box>
                      <Stack spacing={2}>
                        {step.items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              bgcolor: 'white',
                              borderRadius: 4,
                              px: 2.5,
                              py: 1.5,
                              fontWeight: 600,
                              color: step.color,
                              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                              textAlign: 'center',
                            }}
                          >
                            {item}
                          </Box>
                        ))}
                      </Stack>
                    </Box>

                    {index < steps.length - 1 && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 30,
                          left: '100%',
                          width: '100%',
                          height: 4,
                          borderBottom: '3px dashed',
                          borderColor: 'grey.300',
                          display: { xs: 'none', md: 'block' },
                          zIndex: 1,
                          transform: 'translateX(-50%)',
                        }}
                      />
                    )}
                  </Box>
                </Box>
              ))}
            </Stack>
          </m.div>
        </MotionViewport>
      </Container>
    </Box>
  );
}
