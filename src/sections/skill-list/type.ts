// src/type.ts  (hoặc lib/type.ts)
export type GradeLevel =
  | 'Lớp 1'
  | 'Lớp 2'
  | 'Lớp 3'
  | 'Lớp 4'
  | 'Lớp 5'
  | 'Lớp 6'
  | 'Lớp 7'
  | 'Lớp 8'
  | 'Lớp 9'
  | 'Lớp 10'
  | 'Lớp 11'
  | 'Lớp 12';

export type Subject = 'Toán' | 'Tiếng Việt' | 'Toán Tiếng Anh' | 'Tài Chính' | 'Tiếng Anh';
export type Semester = 'Học kì 1' | 'Học kì 2';

export type Lesson = {
  id: string;
  name: string;
  img: string;
  needBuy: boolean;
  src?: string;
};

export type Exam = {
  id: string;
  name: string;
  img: string;
  needBuy: boolean;
  numberOfQuestion: number;
  time: number;
};

export type Curriculum = {
  id: string;
  name: string;
  lessons: Lesson[];
  exams: Exam[];
};

export type Topic = {
  id: string;
  name: string;
  curriculums: Curriculum[];
};

export type Grade = {
  id: string;
  grade: GradeLevel;
  semester: Semester;
  year: string;
  topics: Topic[];
};

export type SubjectCategory = {
  id: string;
  subject: Subject;
  grades: Grade[];
};
