import type { Semester, Curriculum } from './type';

import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import { Box, Tab, Tabs, Paper, Stack, Typography } from '@mui/material';

interface CurriculumTimelineProps {
  selectedSemester: Semester;
  filteredCurriculums: any[];
  selectedCurriculumId: string | null;
  selectedTopicId: string | null;
  selectedTopic?: any;
  onCurriculumSelect: (curriculumId: string) => void;
  onSemesterChange: (semester: Semester) => void;
  onResetFilters: () => void;
}

export default function CurriculumTimeline({
  selectedSemester,
  filteredCurriculums,
  selectedCurriculumId,
  selectedTopicId,
  selectedTopic,
  onCurriculumSelect,
  onSemesterChange,
  onResetFilters,
}: CurriculumTimelineProps) {
  return (
    <Box>
      <Tabs
        value={selectedSemester}
        onChange={(_, v) => {
          onSemesterChange(v);
          onResetFilters();
        }}
        variant="fullWidth"
      >
        <Tab
          label="Học kì 1"
          value="Học kì 1"
          sx={{
            minWidth: 150,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            bgcolor: selectedSemester === 'Học kì 1' ? '#4CAF50' : '#e8f5e9',
            color: selectedSemester === 'Học kì 1' ? 'white' : '#2e7d32',
            fontWeight: 'bold',
          }}
        />
        <Tab
          label="Học kì 2"
          value="Học kì 2"
          sx={{
            minWidth: 150,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            bgcolor: selectedSemester === 'Học kì 2' ? '#4CAF50' : '#e8f5e9',
            color: selectedSemester === 'Học kì 2' ? 'white' : '#2e7d32',
            fontWeight: 'bold',
            boxShadow: selectedSemester === 'Học kì 2' ? '0 4px 12px rgba(76,175,80,0.4)' : 'none',
          }}
        />
      </Tabs>

      <Paper sx={{ p: 1 }}>
        <Timeline
          position="right"
          sx={{
            p: 0,
            '& .MuiTimelineItem-missingOppositeContent:before': {
              flex: 'initial',
              padding: 0,
            },
          }}
        >
          {selectedTopicId !== 'all-topics' && selectedTopic && (
            <Box sx={{ p: 2, bgcolor: '#e3f2fd', borderRadius: 2, mb: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="primary">
                {selectedTopic.topicName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedTopic.curriculums.length} chương trình học
              </Typography>
            </Box>
          )}

          {filteredCurriculums.length === 0 ? (
            <TimelineItem>
              <TimelineContent sx={{ py: 10 }}>
                <Typography color="text.secondary" textAlign="center">
                  Chưa có dữ liệu cho học kỳ này
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ) : (
            filteredCurriculums.map((curriculum: Curriculum, index: number) => {
              const isSelected = selectedCurriculumId === curriculum.id;
              const lessonCount = curriculum.lessons.length;

              return (
                <TimelineItem key={curriculum.id}>
                  <TimelineSeparator>
                    <TimelineDot
                      variant={isSelected ? 'filled' : 'outlined'}
                      sx={{
                        width: 24,
                        height: 24,
                        border: isSelected ? '6px solid #4CAF50' : '4px solid #81d4fa',
                        bgcolor: isSelected ? '#4CAF50' : 'white',
                        boxShadow: isSelected ? '0 0 0 4px rgba(76,175,80,0.2)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        },
                      }}
                      onClick={() => onCurriculumSelect(curriculum.id)}
                    />
                    {index < filteredCurriculums.length - 1 && (
                      <TimelineConnector sx={{ bgcolor: '#81d4fa', width: 4, ml: -1 }} />
                    )}
                  </TimelineSeparator>

                  <TimelineContent
                    sx={{
                      py: 1.5,
                      px: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(1px)',
                      },
                    }}
                    onClick={() => onCurriculumSelect(curriculum.id)}
                  >
                    <Paper
                      elevation={isSelected ? 6 : 2}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        transition: 'all 0.2s ease',
                        bgcolor: isSelected ? '#E3F2FD' : 'white',
                        border: isSelected ? '2px solid #E3F2FD' : '1px solid #e0e0e0',
                        boxShadow: isSelected ? '0 2px 6px #61bcfc' : '0 2px 4px #E3F2FD',
                        '&:hover': {
                          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <Stack spacing={1}>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color={isSelected ? '#2e7d32' : 'text.primary'}
                          sx={{ lineHeight: 1 }}
                        >
                          {curriculum.name}
                        </Typography>

                        <Stack spacing={1}>
                          <Stack direction="row" spacing={3} alignItems="center">
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ minWidth: 80 }}
                            >
                              Bài học:
                            </Typography>
                            <Typography variant="body1" fontWeight="medium" color="primary">
                              {lessonCount}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={3} alignItems="center">
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ minWidth: 80 }}
                            >
                              Bài kiểm tra:
                            </Typography>
                            <Typography variant="body1" fontWeight="500" color="info.main">
                              <Typography variant="body1" fontWeight="medium" color="primary">
                                {lessonCount}
                              </Typography>
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              );
            })
          )}
        </Timeline>
      </Paper>
    </Box>
  );
}
