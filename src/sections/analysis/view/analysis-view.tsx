import Image from 'next/image';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { dataAnalysis } from 'src/sections/analysis/data';

export function AnalysisView() {
  return (
    <Box sx={{ bgcolor: '#F0F0E6', minHeight: '100vh', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              color: '#2e7d32',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.8rem' },
            }}
          >
            VIOEDU - Hệ thống đánh giá
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 900, fontSize: { xs: '1rem', md: '1.2rem' } }}
          >
            Hệ thống đánh giá của VioEdu cho phép giáo viên, phụ huynh theo dõi quá trình học tập,
            điểm mạnh yếu, tiến bộ của từng học sinh để từ đó có thể lựa chọn lộ trình học tập phù
            hợp nhất.
          </Typography>
        </Box>

        {dataAnalysis.map((item, index) => (
          <Stack
            key={index}
            direction={{ xs: 'column', md: item.reverse ? 'row-reverse' : 'row' }}
            spacing={{ xs: 4, md: 8 }}
            alignItems="center"
            sx={{ mb: { xs: 10, md: 14 } }}
          >
            <Box
              sx={{
                flex: 1,
                maxWidth: { xs: '100%', md: '50%' },
                px: { md: 4 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: '#2e7d32',
                  mb: 3,
                  fontSize: { xs: '1.9rem', md: '2.6rem' },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  lineHeight: 1.8,
                }}
              >
                {item.desc}
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                maxWidth: { xs: '100%', md: '50%' },
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  priority={index < 2}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    padding: 10,
                    boxShadow: '1px 4px 12px 0 #33333375',
                  }}
                />
              </Box>
            </Box>
          </Stack>
        ))}
      </Container>
    </Box>
  );
}
