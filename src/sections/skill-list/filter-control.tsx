import type { Topic, Curriculum, GradeLevel } from './type';

import { Box, Stack, Select, MenuItem, InputLabel, Typography, FormControl } from '@mui/material';

interface FilterControlsProps {
  selectedGrade: GradeLevel | null;
  selectedTopicId: string | null;
  currentGrades: GradeLevel[];
  gradeCurriculumCounts: Record<string, number>;
  curriculumsList: Curriculum[];
  topicsList: Topic[];
  onGradeChange: (grade: GradeLevel) => void;
  onTopicChange: (topicId: string) => void;
}

export default function FilterControls({
  selectedGrade,
  selectedTopicId,
  currentGrades,
  gradeCurriculumCounts,
  curriculumsList,
  topicsList,
  onGradeChange,
  onTopicChange,
}: FilterControlsProps) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
      <Box>
        <Typography variant="h3" fontWeight="300" textAlign="start">
          Danh sách chương trình học
        </Typography>
      </Box>

      <Stack direction="row" spacing={2}>
        {/* SELECT LỚP */}
        <FormControl size="small" sx={{ minWidth: 300 }}>
          <InputLabel sx={{ color: '#666', display: 'flex', alignItems: 'center' }}>
            Chọn lớp
          </InputLabel>
          <Select
            value={selectedGrade || ''}
            onChange={(e) => onGradeChange(e.target.value as GradeLevel)}
            label="Chọn lớp"
            displayEmpty
            sx={{
              borderRadius: 1,
              minHeight: 60,
              bgcolor: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#e0e0e0',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4CAF50',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4CAF50',
                borderWidth: 2,
              },
            }}
          >
            {currentGrades.map((grade) => {
              const curriculumCount = gradeCurriculumCounts[grade] || 0;
              return (
                <MenuItem key={grade} value={grade}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: '#4CAF50',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                      }}
                    >
                      {grade.replace('Lớp ', '')}
                    </Box>
                    <Box>
                      <Typography fontWeight="medium">{grade}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {curriculumCount} chương trình học
                      </Typography>
                    </Box>
                  </Stack>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        {/* SELECT CHỦ ĐỀ */}
        <FormControl size="small" sx={{ minWidth: 300 }}>
          <InputLabel sx={{ color: '#666' }}>Chọn chủ điểm</InputLabel>
          <Select
            value={selectedTopicId || 'all-topics'}
            onChange={(e) => onTopicChange(e.target.value as string)}
            label="Chọn chủ điểm"
            displayEmpty
            sx={{
              borderRadius: 1,
              minHeight: 60,
              bgcolor: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#e0e0e0',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4CAF50',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4CAF50',
                borderWidth: 2,
              },
            }}
          >
            <MenuItem value="all-topics">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: '100%' }}
              >
                <Box>
                  <Typography fontWeight="medium">📚 Tất cả chủ điểm</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {curriculumsList.length} chương trình học
                  </Typography>
                </Box>
                <Typography variant="body2" color="primary" fontWeight="bold">
                  0%
                </Typography>
              </Stack>
            </MenuItem>

            {topicsList.map((topic: Topic) => (
              <MenuItem key={topic.id} value={topic.id}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ width: '100%' }}
                >
                  <Box>
                    <Typography fontWeight="medium">{topic.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {topic.curriculums.length} chương trình học
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="primary" fontWeight="bold">
                    0%
                  </Typography>
                </Stack>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}
