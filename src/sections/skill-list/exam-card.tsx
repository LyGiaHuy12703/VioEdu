import type { Exam } from './type';

import Image from 'next/image';

import { Box, Grid, Chip, Paper, Stack, Button, Typography } from '@mui/material';

interface ExamCardsProps {
  exams: Exam[];
  curriculumId: string;
  completedExamIndices: number[];
}

export default function ExamCards({ exams, curriculumId, completedExamIndices }: ExamCardsProps) {
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
          color: '#D32F2F',
        }}
      >
        {' '}
        <Image src="/assets/svg/book.svg" alt="exam" width={50} height={50} />
        Bài kiểm tra ({exams.length})
      </Typography>

      <Grid container spacing={4}>
        {exams.map((exam, index) => {
          const isLocked = exam.needBuy === true;

          return (
            <Grid size={{ xs: 12, sm: 6 }} key={exam.id}>
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
                    boxShadow: isLocked ? undefined : '0 4px 8px rgba(244,67,54,0.18)',
                  },
                }}
              >
                {/* Ảnh đề thi */}
                <Box
                  sx={{
                    height: { xs: 180, sm: 220 },
                    bgcolor: '#fff0f0',
                    backgroundImage: `url(${exam.img || '/img/exams/default.png'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    flexShrink: 0,
                    borderBottom: '6px solid #F44336',
                  }}
                >
                  {/* Logo VioEdu nhỏ góc trên */}
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
                      background: 'white',
                      padding: 6,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    }}
                  />

                  {/* Lớp khóa khi cần mua */}
                  {isLocked && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(0,0,0,0.6)',
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
                        Cần mua khóa học để làm bài
                      </Typography>
                    </Box>
                  )}
                </Box>

                {/* Nội dung dưới ảnh */}
                <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="600"
                    color="#2e7d32"
                    sx={{
                      mb: 2,
                      lineHeight: 1.45,
                      minHeight: 56,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {exam.name}
                  </Typography>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    gap={1}
                    mb={3}
                    flexWrap="wrap"
                  >
                    <Stack direction="column" justifyContent="flex-end">
                      <Typography variant="h5" color="grey.500" fontWeight="500">
                        Số câu hỏi
                      </Typography>
                      <Chip
                        label={`${exam.numberOfQuestion} câu`}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                    </Stack>
                    <Stack direction="column" justifyContent="flex-end">
                      <Typography variant="h5" color="grey.500" fontWeight="500">
                        Thời gian làm
                      </Typography>
                      <Chip
                        label={`${exam.time} phút`}
                        size="small"
                        color="warning"
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                    </Stack>
                    {exam.needBuy ? (
                      <Button variant="outlined" fullWidth>
                        Vui lòng mua khóa học
                      </Button>
                    ) : (
                      <Box width="100%">
                        <Button variant="contained" color="success" fullWidth>
                          Làm bài kiểm tra
                        </Button>
                        <Typography color="success" textAlign="center">
                          Xem lịch sử làm bài
                        </Typography>
                      </Box>
                    )}
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
