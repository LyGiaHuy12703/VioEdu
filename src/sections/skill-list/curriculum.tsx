import { Paper, Typography, LinearProgress } from '@mui/material';

import ExamCards from './exam-card';
import LessonCards from './lesson-card';
import DetailHeader from './detail-header';
import ProgressStats from './progress-slats';

interface CurriculumDetailProps {
  selectedCurriculum: any | null;
}

export default function CurriculumDetail({ selectedCurriculum }: CurriculumDetailProps) {
  if (!selectedCurriculum) {
    return (
      <Paper sx={{ p: 12, textAlign: 'center', borderRadius: 4, minHeight: 500 }}>
        <Typography variant="h6" color="text.secondary">
          Vui lòng chọn một chương trình học bên trái để xem chi tiết
        </Typography>
      </Paper>
    );
  }

  const lessonCount = selectedCurriculum.lessons.length || 5;
  const examCount = 3; // Có thể dynamic từ data

  return (
    <Paper sx={{ p: 4, borderRadius: 4, minHeight: { xs: 'auto', md: 600 } }}>
      <DetailHeader
        curriculumName={selectedCurriculum.curriculumName}
        topicName={selectedCurriculum.topicName}
        totalLessons={lessonCount}
      />

      <LinearProgress
        variant="determinate"
        value={0}
        sx={{
          height: 12,
          borderRadius: 6,
          mb: 4,
          bgcolor: '#e8f5e9',
          '& .MuiLinearProgress-bar': {
            borderRadius: 6,
            bgcolor: '#4CAF50',
          },
        }}
      />

      <ProgressStats />
      <LessonCards lessonCount={lessonCount} />
      <ExamCards examCount={examCount} />
    </Paper>
  );
}
