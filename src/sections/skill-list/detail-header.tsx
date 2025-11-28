import { Chip, Stack, Typography } from '@mui/material';

interface DetailHeaderProps {
  curriculumName: string;
  topicName: string;
  totalLessons: number;
  completedLessons?: number;
}

export default function DetailHeader({
  curriculumName,
  topicName,
  totalLessons,
  completedLessons = 0,
}: DetailHeaderProps) {
  const percent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: 72, mb: 1 }}
    >
      {/* Trái: Tên chương + chủ điểm */}
      <Stack spacing={0.5}>
        <Typography variant="h5" fontWeight="bold" color="text.primary" sx={{ lineHeight: 1.2 }}>
          {curriculumName}
        </Typography>
        <Chip
          label={topicName}
          size="small"
          color="primary"
          variant="outlined"
          sx={{
            height: 24,
            fontSize: '0.75rem',
            fontWeight: 600,
            borderRadius: 2,
          }}
        />
      </Stack>

      {/* Phải: Tiến độ gọn */}
      <Stack alignItems="flex-end" spacing={0}>
        <Typography variant="h4" fontWeight="bold" color="#4CAF50">
          {percent}%
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          fontWeight="500"
          sx={{ lineHeight: 1 }}
        >
          {completedLessons}/{totalLessons} bài học
        </Typography>
      </Stack>
    </Stack>
  );
}
