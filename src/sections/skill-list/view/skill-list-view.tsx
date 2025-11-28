'use client';

import type { Topic, Subject, Semester, Curriculum, GradeLevel } from '../type';

import { useMemo, useState, useEffect } from 'react';

import { Box, Grid, Paper, Container, Typography, LinearProgress } from '@mui/material';

import ExamCards from '../exam-card';
import LessonCards from '../lesson-card';
import { curriculumsData } from '../data';
import DetailHeader from '../detail-header';
import ProgressStats from '../progress-slats';
import FilterControls from '../filter-control';
import SubjectSelector from '../subject-selector';
import CurriculumTimeline from '../curriculum-timeline';

const subjectList: Subject[] = ['Toán', 'Tiếng Việt', 'Toán Tiếng Anh', 'Tài Chính', 'Tiếng Anh'];
const subjectIcons = {
  Toán: { on: '/assets/icons/vio/icon_math_on.png', off: '/assets/icons/vio/icon_math_off.png' },
  'Tiếng Việt': {
    on: '/assets/icons/vio/icon_viet_on.png',
    off: '/assets/icons/vio/icon_viet_off.png',
  },
  'Tiếng Anh': {
    on: '/assets/icons/vio/icon_english_vio_on.png',
    off: '/assets/icons/vio/icon_english_vio_off.png',
  },
  'Toán Tiếng Anh': {
    on: '/assets/icons/vio/icon_math_english_on.png',
    off: '/assets/icons/vio/icon_math_english_off.png',
  },
  'Tài Chính': {
    on: '/assets/icons/vio/icon_finance_on.png',
    off: '/assets/icons/vio/icon_finance_off.png',
  },
};

export default function SkillListView() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>('Toán');
  const [selectedSemester, setSelectedSemester] = useState<Semester>('Học kì 1');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('Lớp 1');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all-topics');
  const [selectedCurriculumId, setSelectedCurriculumId] = useState<string | null>(null);

  // KHI ĐỔI MÔN → RESET HẾT: lớp, topic, chương
  const handleSubjectChange = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedGrade('Lớp 1'); // Reset về lớp mặc định
    setSelectedTopicId('all-topics'); // Reset topic
    setSelectedCurriculumId(null); // Reset chương
  };

  // LẤY DỮ LIỆU MÔN
  const subjectData = useMemo(
    () => curriculumsData.find((d) => d.subject === selectedSubject),
    [selectedSubject]
  );

  // DANH SÁCH LỚP CÓ TRONG MÔN + HỌC KỲ
  const currentGrades = useMemo(() => {
    const grades =
      subjectData?.grades.filter((g) => g.semester === selectedSemester).map((g) => g.grade) || [];

    return Array.from(new Set(grades)).sort(
      (a, b) => parseInt(a.replace('Lớp ', '')) - parseInt(b.replace('Lớp ', ''))
    );
  }, [subjectData, selectedSemester]);

  // TỰ ĐỘNG CHỌN LỚP ĐẦU TIÊN KHI KHÔNG CÓ LỚP HOẶC LỚP KHÔNG TỒN TẠI
  useEffect(() => {
    if (currentGrades.length > 0) {
      if (!currentGrades.includes(selectedGrade)) {
        setSelectedGrade(currentGrades[0]);
        setSelectedTopicId('all-topics');
        setSelectedCurriculumId(null);
      }
    }
  }, [currentGrades, selectedGrade]);

  // DỮ LIỆU LỚP HIỆN TẠI
  const currentGradeData = useMemo(
    () =>
      subjectData?.grades.find((g) => g.grade === selectedGrade && g.semester === selectedSemester),
    [subjectData, selectedGrade, selectedSemester]
  );

  // TOPIC & TẤT CẢ CHƯƠNG
  const topicsList: Topic[] = useMemo(() => currentGradeData?.topics || [], [currentGradeData]);
  const allCurriculums: Curriculum[] = useMemo(
    () => topicsList.flatMap((t) => t.curriculums),
    [topicsList]
  );

  // LỌC CHƯƠNG THEO TOPIC
  const filteredCurriculums = useMemo(() => {
    if (selectedTopicId === 'all-topics' || !selectedTopicId) {
      return allCurriculums;
    }
    const topic = topicsList.find((t) => t.id === selectedTopicId);
    return topic?.curriculums || [];
  }, [allCurriculums, selectedTopicId, topicsList]);

  // CHƯƠNG ĐANG CHỌN
  const selectedCurriculum = useMemo(
    () => filteredCurriculums.find((c) => c.id === selectedCurriculumId),
    [filteredCurriculums, selectedCurriculumId]
  );

  const selectedTopic = topicsList.find((t) => t.id === selectedTopicId);

  // TỰ ĐỘNG CHỌN CHƯƠNG ĐẦU TIÊN KHI LỌC THAY ĐỔI
  useEffect(() => {
    if (filteredCurriculums.length > 0) {
      const validId = filteredCurriculums.some((c) => c.id === selectedCurriculumId)
        ? selectedCurriculumId
        : filteredCurriculums[0].id;
      if (validId !== selectedCurriculumId) {
        setSelectedCurriculumId(validId);
      }
    } else {
      if (selectedCurriculumId !== null) {
        setSelectedCurriculumId(null);
      }
    }
  }, [filteredCurriculums, selectedCurriculumId]);

  // ĐẾM CHƯƠNG TRONG MỖI LỚP
  const gradeCurriculumCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    currentGrades.forEach((grade) => {
      const data = subjectData?.grades.find(
        (g) => g.grade === grade && g.semester === selectedSemester
      );
      counts[grade] = data?.topics.flatMap((t) => t.curriculums).length || 0;
    });
    return counts;
  }, [subjectData, selectedSemester, currentGrades]);

  // TIẾN ĐỘ MOCK
  const currentProgress = useMemo(() => {
    if (!selectedCurriculum) return { completedLessons: 0, completedExams: [] };
    const mock: Record<string, any> = {
      'c-toan-lop1-hk1-1': { completedLessons: 2, completedExams: [0] },
      'c-toan-lop1-hk1-2': { completedLessons: 3, completedExams: [0, 1] },
    };
    return mock[selectedCurriculum.id] || { completedLessons: 0, completedExams: [] };
  }, [selectedCurriculum]);

  const completedLessonsCount = currentProgress.completedLessons || 0;
  const totalLessons = selectedCurriculum?.lessons.length || 0;
  const totalExams = selectedCurriculum?.exams?.length || 0;
  const lessonProgressPercent = totalLessons > 0 ? (completedLessonsCount / totalLessons) * 100 : 0;

  // HANDLERS
  const handleSemesterChange = (semester: Semester) => {
    setSelectedSemester(semester);
    setSelectedTopicId('all-topics');
    setSelectedCurriculumId(null);
  };

  const handleGradeChange = (grade: GradeLevel) => {
    setSelectedGrade(grade);
    setSelectedTopicId('all-topics');
    setSelectedCurriculumId(null);
  };

  const handleTopicChange = (topicId: string) => {
    setSelectedTopicId(topicId);
    // useEffect sẽ tự động chọn chương đầu tiên
  };

  const handleCurriculumSelect = (id: string) => {
    setSelectedCurriculumId(id);
  };

  return (
    <Box sx={{ bgcolor: '#F0F0E6', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <SubjectSelector
          selectedSubject={selectedSubject}
          onSubjectChange={handleSubjectChange}
          subjectIcons={subjectIcons}
          subjectList={subjectList}
        />

        <Box sx={{ mt: 2 }}>
          <FilterControls
            selectedGrade={selectedGrade}
            selectedTopicId={selectedTopicId}
            currentGrades={currentGrades}
            gradeCurriculumCounts={gradeCurriculumCounts}
            topicsList={topicsList}
            curriculumsList={allCurriculums}
            onGradeChange={handleGradeChange}
            onTopicChange={handleTopicChange}
          />

          <Grid container spacing={4} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <CurriculumTimeline
                selectedSemester={selectedSemester}
                filteredCurriculums={filteredCurriculums}
                selectedCurriculumId={selectedCurriculumId}
                selectedTopicId={selectedTopicId}
                selectedTopic={selectedTopic || null}
                onCurriculumSelect={handleCurriculumSelect}
                onSemesterChange={handleSemesterChange}
                onResetFilters={() => setSelectedTopicId('all-topics')}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              {selectedCurriculum ? (
                <Box>
                  <Paper sx={{ p: 4, borderRadius: 4, mb: 3 }}>
                    <DetailHeader
                      curriculumName={selectedCurriculum.name}
                      topicName={selectedTopic?.name || 'Tất cả chương trình'}
                      totalLessons={totalLessons}
                    />
                    <LinearProgress
                      variant="determinate"
                      value={lessonProgressPercent}
                      sx={{
                        height: 12,
                        borderRadius: 6,
                        mb: 4,
                        bgcolor: '#e8f5e9',
                        '& .MuiLinearProgress-bar': { borderRadius: 6, bgcolor: '#4CAF50' },
                      }}
                    />
                    <ProgressStats
                      completedLessons={completedLessonsCount}
                      totalLessons={totalLessons}
                      completedExams={currentProgress.completedExams?.length || 0}
                      totalExams={totalExams}
                    />
                  </Paper>

                  <Paper sx={{ p: 4, borderRadius: 4, minHeight: 600 }}>
                    <LessonCards
                      lessons={selectedCurriculum.lessons}
                      curriculumId={selectedCurriculum.id}
                      completedCount={completedLessonsCount}
                    />
                    {selectedCurriculum.exams && selectedCurriculum.exams.length > 0 && (
                      <ExamCards
                        exams={selectedCurriculum.exams}
                        curriculumId={selectedCurriculum.id}
                        completedExamIndices={currentProgress.completedExams || []}
                      />
                    )}
                  </Paper>
                </Box>
              ) : (
                <Paper sx={{ p: 12, textAlign: 'center', borderRadius: 4, minHeight: 500 }}>
                  <Typography variant="h6" color="text.secondary">
                    Vui lòng chọn một chương trình học bên trái để xem chi tiết
                  </Typography>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
