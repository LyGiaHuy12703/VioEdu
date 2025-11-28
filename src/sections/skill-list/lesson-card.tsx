// components/lesson-card.tsx
import type { Lesson } from './type';

import Image from 'next/image';

import { Box, Grid, Paper, Stack, Button, Typography } from '@mui/material';

interface LessonCardsProps {
  lessons: Lesson[];
  curriculumId: string;
  completedCount: number;
}

export default function LessonCards({ lessons, curriculumId, completedCount }: LessonCardsProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          color: 'primary.main',
        }}
      >
        Bài học ({lessons.length})
      </Typography>

      <Grid container spacing={4}>
        {lessons.map((lesson, index) => {
          const isLocked = lesson.needBuy === true;

          return (
            <Grid size={{ xs: 12, sm: 6 }} key={lesson.id}>
              <Paper
                elevation={isLocked ? 1 : 4}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  bgcolor: '#fff',
                  boxShadow: isLocked ? '0 2px 8px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.12)',
                  transition: 'all 0.3s ease',
                  opacity: isLocked ? 0.75 : 1,
                  cursor: isLocked ? 'not-allowed' : 'pointer',
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: isLocked ? 'none' : 'translateY(-1px)',
                    boxShadow: isLocked ? undefined : '0 4px 8px rgba(0,0,0,0.18)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: { xs: 180, sm: 220 },
                    bgcolor: '#f5f5f5',
                    backgroundImage: `url(${lesson.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/assets/icons/vio/icon.png"
                    alt="VioEdu"
                    width={40}
                    height={40}
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      opacity: 0.9,
                      borderRadius: '50%',
                      padding: 0.5,
                      background: '#fff',
                    }}
                  />

                  {isLocked && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(0,0,0,0.55)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: 1.5,
                        color: '#fff',
                      }}
                    >
                      <Image src="/assets/svg/lock.svg" alt="Khóa" width={56} height={56} />
                      <Typography variant="subtitle2" fontWeight="600">
                        Cần mua khóa học để học chủ điểm này
                      </Typography>
                    </Box>
                  )}
                </Box>

                <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="600"
                    color="#1a237e"
                    sx={{
                      lineHeight: 1.45,
                      minHeight: 56,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {lesson.name}
                  </Typography>
                  <Stack direction="row" justifyContent="center" alignItems="center">
                    <Button>
                      <Stack direction="column" justifyContent="center" alignItems="center">
                        <Image src="/assets/svg/forward.svg" alt="Video" width={22} height={22} />
                        <Typography variant="body2">VIDEO LÝ THUYẾT</Typography>
                      </Stack>
                    </Button>
                    <Button>
                      <Stack direction="column" justifyContent="center" alignItems="center">
                        <Image src="/assets/svg/book.svg" alt="Video" width={22} height={22} />
                        <Typography variant="body2">THỰC HÀNH</Typography>
                      </Stack>
                    </Button>
                    <Button>
                      <Stack direction="column" justifyContent="center" alignItems="center">
                        <Image src="/assets/svg/timeLine.svg" alt="Video" width={22} height={22} />
                        <Typography variant="body2">TIẾN ĐỘ</Typography>
                      </Stack>
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
