import Image from 'next/image';

import { Box, Stack, Paper, Typography } from '@mui/material';

interface ProgressStatsProps {
  completedLessons: number;
  totalLessons: number;
  completedExams: number;
  totalExams: number;
}

export default function ProgressStats({
  completedLessons,
  totalLessons,
  completedExams,
  totalExams,
}: ProgressStatsProps) {
  const lessonPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const examPercent = totalExams > 0 ? Math.round((completedExams / totalExams) * 100) : 0;

  return (
    <Paper
      elevation={0}
      sx={{
        px: 3,
        py: 1,
        borderRadius: 4,
        bgcolor: 'white',
        border: '1px solid #e8f5e9',
        boxShadow: '0 4px 12px rgba(76, 175, 80, 0.08)',
        overflow: 'hidden',
      }}
    >
      <Stack direction="row" spacing={3} justifyContent="center">
        {/* BÀI HỌC */}
        <Box sx={{ textAlign: 'center' }}>
          <Stack direction="row" alignItems="center" spacing={1.5} mb={1}>
            <Image src="/assets/svg/check.svg" alt="check" width={24} height={24} />
            <Typography variant="h5" fontWeight="bold" color="#2e7d32">
              {completedLessons} / {totalLessons}
            </Typography>
          </Stack>
          <Typography variant="body1" fontWeight="600" color="text.primary">
            Bài học đã hoàn thành
          </Typography>
          <Box sx={{ mt: 1, height: 8, borderRadius: 4, bgcolor: '#e8f5e9', overflow: 'hidden' }}>
            <Box
              sx={{
                width: `${lessonPercent}%`,
                height: '100%',
                bgcolor: '#4CAF50',
                borderRadius: 4,
                transition: 'width 0.6s ease',
              }}
            />
          </Box>
          <Typography variant="caption" color="#4CAF50" fontWeight="bold" sx={{ mt: 0.5 }}>
            {lessonPercent}% hoàn thành
          </Typography>
        </Box>

        {/* BÀI KIỂM TRA */}
        <Box sx={{ textAlign: 'center' }}>
          <Stack direction="row" alignItems="center" spacing={1.5} mb={1}>
            <Image src="/assets/svg/quiz.svg" alt="check" width={24} height={24} />
            <Typography variant="h5" fontWeight="bold" color="#1976d2">
              {completedExams} / {totalExams}
            </Typography>
          </Stack>
          <Typography variant="body1" fontWeight="600" color="text.primary">
            Đề thi đã làm
          </Typography>
          <Box sx={{ mt: 1, height: 8, borderRadius: 4, bgcolor: '#e3f2fd', overflow: 'hidden' }}>
            <Box
              sx={{
                width: `${examPercent}%`,
                height: '100%',
                bgcolor: '#2196F3',
                borderRadius: 4,
                transition: 'width 0.6s ease',
              }}
            />
          </Box>
          <Typography variant="caption" color="#2196F3" fontWeight="bold" sx={{ mt: 0.5 }}>
            {examPercent}% hoàn thành
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
