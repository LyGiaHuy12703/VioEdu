import type { SubjectCategory } from './type';

export const curriculumsData: SubjectCategory[] = [
  // ==================== TOÁN ====================
  {
    id: 'toan',
    subject: 'Toán',
    grades: [
      // LỚP 1 - HỌC KÌ 1
      {
        id: 'toan-lop1-hk1',
        grade: 'Lớp 1',
        semester: 'Học kì 1',
        year: '2024-2025',
        topics: [
          {
            id: 't-toan-lop1-hk1-on-tap',
            name: 'Ôn tập và bổ sung về số học',
            curriculums: [
              {
                id: 'c-toan-lop1-hk1-1',
                name: 'Các số từ 1 đến 10',
                lessons: [
                  {
                    id: 'l-toan-1-1-1',
                    name: 'Nhận biết số 1–5',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: false,
                    src: '/videos/1-1.mp4',
                  },
                  {
                    id: 'l-toan-1-1-2',
                    name: 'Nhận biết số 6–10',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/1-2.mp4',
                  },
                  {
                    id: 'l-toan-1-1-3',
                    name: 'Đếm và so sánh',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/1-3.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-1-1-1',
                    name: 'Kiểm tra nhanh: 1–10',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: false,
                    numberOfQuestion: 10,
                    time: 10,
                  },
                  {
                    id: 'e-toan-1-1-2',
                    name: 'Bài tập củng cố: số cơ bản',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 12,
                    time: 12,
                  },
                ],
              },
              {
                id: 'c-toan-lop1-hk1-2',
                name: 'So sánh số',
                lessons: [
                  {
                    id: 'l-toan-1-2-1',
                    name: 'Lớn hơn – Nhỏ hơn',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/1-4.mp4',
                  },
                  {
                    id: 'l-toan-1-2-2',
                    name: 'Bằng nhau & dấu',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/1-5.mp4',
                  },
                  {
                    id: 'l-toan-1-2-3',
                    name: 'Thực hành so sánh',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/1-6.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-1-2-1',
                    name: 'Bài kiểm tra: So sánh số',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 8,
                    time: 10,
                  },
                  {
                    id: 'e-toan-1-2-2',
                    name: '/assets/icons/vio/image_exam_none.png',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 10,
                    time: 12,
                  },
                ],
              },
              {
                id: 'c-toan-lop1-hk1-3',
                name: 'Bảng cộng, bảng trừ trong phạm vi 10',
                lessons: [
                  {
                    id: 'l-toan-1-3-1',
                    name: 'Bảng cộng trong phạm vi 10',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/1-7.mp4',
                  },
                  {
                    id: 'l-toan-1-3-2',
                    name: 'Bảng trừ trong phạm vi 10',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/1-8.mp4',
                  },
                  {
                    id: 'l-toan-1-3-3',
                    name: 'Bài tập thực hành cộng trừ',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/1-9.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-1-3-1',
                    name: 'Đề kiểm tra: Cộng – Trừ (10 câu)',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 10,
                    time: 15,
                  },
                  {
                    id: 'e-toan-1-3-2',
                    name: 'Bài tập chọn lọc: Cộng trừ',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 12,
                    time: 18,
                  },
                ],
              },
            ],
          },
          {
            id: 't-toan-lop1-hk1-so-hoc-20',
            name: 'Số học đến 20',
            curriculums: [
              {
                id: 'c-toan-lop1-hk1-4',
                name: 'Số từ 11 đến 20',
                lessons: [
                  {
                    id: 'l-toan-1-4-1',
                    name: 'Nhận biết 11–15',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/2-1.mp4',
                  },
                  {
                    id: 'l-toan-1-4-2',
                    name: 'Nhận biết 16–20',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/2-2.mp4',
                  },
                  {
                    id: 'l-toan-1-4-3',
                    name: 'Đếm theo nhóm',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/2-3.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-1-4-1',
                    name: 'Kiểm tra: 11–20',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 10,
                    time: 12,
                  },
                  {
                    id: 'e-toan-1-4-2',
                    name: 'Bài tập tổng hợp 1',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 12,
                    time: 15,
                  },
                ],
              },
              {
                id: 'c-toan-lop1-hk1-5',
                name: 'Cộng trừ không nhớ trong phạm vi 20',
                lessons: [
                  {
                    id: 'l-toan-1-5-1',
                    name: 'Cộng không nhớ',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/2-4.mp4',
                  },
                  {
                    id: 'l-toan-1-5-2',
                    name: 'Trừ không nhớ',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/2-5.mp4',
                  },
                  {
                    id: 'l-toan-1-5-3',
                    name: 'Bộ bài tập thực hành',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/2-6.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-1-5-1',
                    name: 'Bài kiểm tra cộng – trừ (20)',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 15,
                    time: 18,
                  },
                  {
                    id: 'e-toan-1-5-2',
                    name: 'Đề nâng cao: Cộng trừ trong 20',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 18,
                    time: 20,
                  },
                ],
              },
            ],
          },
        ],
      },

      // LỚP 1 - HỌC KÌ 2
      {
        id: 'toan-lop1-hk2',
        grade: 'Lớp 1',
        semester: 'Học kì 2',
        year: '2024-2025',
        topics: [
          {
            id: 't-toan-lop1-hk2-so-hoc-100',
            name: 'Số học đến 100',
            curriculums: [
              {
                id: 'c-toan-lop1-hk2-1',
                name: 'Số từ 21 đến 100',
                lessons: [
                  {
                    id: 'l-toan-1-hk2-1-1',
                    name: 'Đếm 21–50',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/8-1.mp4',
                  },
                  {
                    id: 'l-toan-1-hk2-1-2',
                    name: 'Đếm 51–100',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/8-2.mp4',
                  },
                  {
                    id: 'l-toan-1-hk2-1-3',
                    name: 'Ghép số & nhóm',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/8-3.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-1-hk2-1-1',
                    name: 'Kiểm tra: 21–100',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 12,
                    time: 15,
                  },
                  {
                    id: 'e-toan-1-hk2-1-2',
                    name: 'Bài tập ôn tổng hợp',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 15,
                    time: 20,
                  },
                ],
              },
              {
                id: 'c-toan-lop1-hk2-2',
                name: 'Cộng trừ không nhớ trong phạm vi 100',
                lessons: [
                  {
                    id: 'l-toan-1-hk2-2-1',
                    name: 'Cộng phần nguyên',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/8-4.mp4',
                  },
                  {
                    id: 'l-toan-1-hk2-2-2',
                    name: 'Trừ không nhớ',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/8-5.mp4',
                  },
                  {
                    id: 'l-toan-1-hk2-2-3',
                    name: 'Bài tập thực hành nâng cao',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/8-6.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-1-hk2-2-1',
                    name: 'Bài kiểm tra cộng – trừ 100',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 15,
                    time: 20,
                  },
                  {
                    id: 'e-toan-1-hk2-2-2',
                    name: 'Đề luyện tốc độ tính',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 18,
                    time: 25,
                  },
                ],
              },
            ],
          },
          {
            id: 't-toan-lop1-hk2-dai-luong',
            name: 'Đại lượng và biểu đồ',
            curriculums: [
              {
                id: 'c-toan-lop1-hk2-3',
                name: 'Đơn vị đo độ dài',
                lessons: [
                  {
                    id: 'l-toan-1-hk2-3-1',
                    name: 'Mét, cm, mm',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/9-1.mp4',
                  },
                  {
                    id: 'l-toan-1-hk2-3-2',
                    name: 'Đổi đơn vị',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/9-2.mp4',
                  },
                  {
                    id: 'l-toan-1-hk2-3-3',
                    name: 'Bài tập ứng dụng',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/9-3.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-1-hk2-3-1',
                    name: 'Kiểm tra đơn vị đo',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 10,
                    time: 12,
                  },
                  {
                    id: 'e-toan-1-hk2-3-2',
                    name: 'Bài tập biểu đồ cơ bản',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 12,
                    time: 15,
                  },
                ],
              },
              {
                id: 'c-toan-lop1-hk2-4',
                name: 'Biểu đồ tranh',
                lessons: [
                  {
                    id: 'l-toan-1-hk2-4-1',
                    name: 'Đọc biểu đồ cơ bản',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/9-4.mp4',
                  },
                  {
                    id: 'l-toan-1-hk2-4-2',
                    name: 'Vẽ biểu đồ đơn giản',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/9-5.mp4',
                  },
                  {
                    id: 'l-toan-1-hk2-4-3',
                    name: 'Bài tập ứng dụng biểu đồ',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/9-6.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-1-hk2-4-1',
                    name: 'Đề kiểm tra đọc biểu đồ',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 12,
                    time: 15,
                  },
                  {
                    id: 'e-toan-1-hk2-4-2',
                    name: 'Bài tập vẽ & phân tích',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 10,
                    time: 20,
                  },
                ],
              },
            ],
          },
        ],
      },

      // LỚP 2 - HK 1
      {
        id: 'toan-lop2-hk1',
        grade: 'Lớp 2',
        semester: 'Học kì 1',
        year: '2024-2025',
        topics: [
          {
            id: 't-toan-lop2-hk1-so-hoc',
            name: 'Số học trong phạm vi 1000',
            curriculums: [
              {
                id: 'c-toan-lop2-hk1-1',
                name: 'Các số từ 101 đến 1000',
                lessons: [
                  {
                    id: 'l-toan-2-1-1',
                    name: 'Nhận biết số có 3 chữ số',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: false,
                    src: '/videos/t2-1.mp4',
                  },
                  {
                    id: 'l-toan-2-1-2',
                    name: 'So sánh số có 3 chữ số',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/t2-2.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-2-1-1',
                    name: 'Kiểm tra: Số & thứ tự (1000)',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 15,
                    time: 15,
                  },
                ],
              },
              {
                id: 'c-toan-lop2-hk1-2',
                name: 'Phép cộng, trừ (có nhớ) trong phạm vi 100',
                lessons: [
                  {
                    id: 'l-toan-2-2-1',
                    name: 'Cộng có nhớ',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/t2-3.mp4',
                  },
                  {
                    id: 'l-toan-2-2-2',
                    name: 'Trừ có nhớ',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/t2-4.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-2-2-1',
                    name: 'Bài tập tốc độ: Cộng trừ (100)',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 20,
                    time: 20,
                  },
                ],
              },
            ],
          },
          {
            id: 't-toan-lop2-hk1-hinh-hoc',
            name: 'Hình học phẳng',
            curriculums: [
              {
                id: 'c-toan-lop2-hk1-3',
                name: 'Đường thẳng, đoạn thẳng',
                lessons: [
                  {
                    id: 'l-toan-2-3-1',
                    name: 'Điểm, đoạn thẳng cơ bản',
                    img: '/assets/icons/vio/premium_2025.png',
                    needBuy: true,
                    src: '/videos/t2-5.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-toan-2-3-1',
                    name: 'Kiểm tra: Nhận biết hình cơ bản',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 10,
                    time: 15,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== TIẾNG VIỆT ====================
  {
    id: 'tieng-viet',
    subject: 'Tiếng Việt',
    grades: [
      {
        id: 'tv-lop1-hk1',
        grade: 'Lớp 1',
        semester: 'Học kì 1',
        year: '2024-2025',
        topics: [
          {
            id: 't-tv-lop1-chu-cai',
            name: 'Làm quen chữ cái',
            curriculums: [
              {
                id: 'c-tv-lop1-1',
                name: 'Bảng chữ cái tiếng Việt',
                lessons: [
                  {
                    id: 'l-tv-1-1',
                    name: 'Chữ cái hoa & thường',
                    img: '/assets/icons/vio/premium_2025.pngng',
                    needBuy: true,
                    src: '/videos/tv1-1.mp4',
                  },
                  {
                    id: 'l-tv-1-2',
                    name: 'Phân biệt nguyên âm & phụ âm',
                    img: '/assets/icons/vio/premium_2025.pngng',
                    needBuy: true,
                    src: '/videos/tv1-2.mp4',
                  },
                  {
                    id: 'l-tv-1-3',
                    name: 'Thực hành viết chữ',
                    img: '/assets/icons/vio/premium_2025.pngng',
                    needBuy: true,
                    src: '/videos/tv1-3.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-tv-1-1',
                    name: 'Kiểm tra chữ cái cơ bản',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 10,
                    time: 12,
                  },
                  {
                    id: 'e-tv-1-2',
                    name: 'Bài tập ghép chữ & vần',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 12,
                    time: 15,
                  },
                ],
              },
              // ... đầy đủ các chương Tiếng Việt Lớp 1, Lớp 5
            ],
          },
        ],
      },
      // Lớp 2
      // Thêm vào grades: [] của môn Tiếng Việt
      {
        id: 'tv-lop2-hk1',
        grade: 'Lớp 2',
        semester: 'Học kì 1',
        year: '2024-2025',
        topics: [
          {
            id: 't-tv-lop2-chinh-ta',
            name: 'Chính tả và Ngữ pháp',
            curriculums: [
              {
                id: 'c-tv-lop2-1',
                name: 'Luyện tập chính tả',
                lessons: [
                  {
                    id: 'l-tv-2-1-1',
                    name: 'Chính tả phân biệt L/N',
                    img: '/assets/icons/vio/premium_2025.pngng',
                    needBuy: false,
                    src: '/videos/tv2-1.mp4',
                  },
                  {
                    id: 'l-tv-2-1-2',
                    name: 'Chính tả phân biệt S/X',
                    img: '/assets/icons/vio/premium_2025.pngng',
                    needBuy: true,
                    src: '/videos/tv2-2.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-tv-2-1-1',
                    name: 'Kiểm tra nhanh: Chính tả cơ bản',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 15,
                    time: 15,
                  },
                ],
              },
              {
                id: 'c-tv-lop2-2',
                name: 'Từ loại và Đặt câu',
                lessons: [
                  {
                    id: 'l-tv-2-2-1',
                    name: 'Nhận biết Danh từ',
                    img: '/assets/icons/vio/premium_2025.pngng',
                    needBuy: true,
                    src: '/videos/tv2-3.mp4',
                  },
                  {
                    id: 'l-tv-2-2-2',
                    name: 'Ôn tập mẫu câu Ai là gì?',
                    img: '/assets/icons/vio/premium_2025.pngng',
                    needBuy: true,
                    src: '/videos/tv2-4.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-tv-2-2-1',
                    name: 'Bài tập: Từ và câu',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 12,
                    time: 15,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== TIẾNG ANH ====================
  {
    id: 'tieng-anh',
    subject: 'Tiếng Anh',
    grades: [
      {
        id: 'eng-lop3-hk1',
        grade: 'Lớp 3',
        semester: 'Học kì 1',
        year: '2024-2025',
        topics: [
          {
            id: 't-eng-lop3-unit1-5',
            name: 'Unit 1-5',
            curriculums: [
              {
                id: 'c-eng-lop3-1',
                name: 'Hello & Family',
                lessons: [
                  {
                    id: 'l-eng-3-1-1',
                    name: 'Greetings & Introductions',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/e1-1.mp4',
                  },
                  {
                    id: 'l-eng-3-1-2',
                    name: 'Family members vocabulary',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/e1-2.mp4',
                  },
                  {
                    id: 'l-eng-3-1-3',
                    name: 'Simple dialogues',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/e1-3.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-eng-3-1-1',
                    name: 'Mini test: Hello & Family',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 10,
                    time: 12,
                  },
                  {
                    id: 'e-eng-3-1-2',
                    name: 'Listening practice',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 8,
                    time: 10,
                  },
                ],
              },
              // ... đầy đủ các unit
            ],
          },
        ],
      },
      // Thêm vào grades: [] của môn Tiếng Anh
      {
        id: 'eng-lop4-hk1',
        grade: 'Lớp 4',
        semester: 'Học kì 1',
        year: '2024-2025',
        topics: [
          {
            id: 't-eng-lop4-unit1-3',
            name: 'Unit 1-3 (School & Friends)',
            curriculums: [
              {
                id: 'c-eng-lop4-1',
                name: 'School Things & Activities',
                lessons: [
                  {
                    id: 'l-eng-4-1-1',
                    name: 'School objects vocabulary',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/e4-1.mp4',
                  },
                  {
                    id: 'l-eng-4-1-2',
                    name: 'Asking about possession (Whose is this?)',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/e4-2.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-eng-4-1-1',
                    name: 'Mini test: Vocabulary and Grammar',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 10,
                    time: 12,
                  },
                ],
              },
              {
                id: 'c-eng-lop4-2',
                name: 'Describing Friends & Family',
                lessons: [
                  {
                    id: 'l-eng-4-2-1',
                    name: 'Adjectives for description',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/e4-3.mp4',
                  },
                  {
                    id: 'l-eng-4-2-2',
                    name: 'Present Simple tense review',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/e4-4.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-eng-4-2-1',
                    name: 'Listening & Reading practice',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 15,
                    time: 20,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'eng-lop12-hk1',
        grade: 'Lớp 12',
        semester: 'Học kì 1',
        year: '2024-2025',
        topics: [
          {
            id: 't-eng-lop12-thpt',
            name: 'Ôn thi THPT Quốc gia',
            curriculums: [
              {
                id: 'c-eng-lop12-reading',
                name: 'Reading Comprehension',
                lessons: [
                  {
                    id: 'l-eng-12-r1',
                    name: 'Skimming & Scanning',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/e2-1.mp4',
                  },
                  {
                    id: 'l-eng-12-r2',
                    name: 'Question types',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/e2-2.mp4',
                  },
                  {
                    id: 'l-eng-12-r3',
                    name: 'Practice passages',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/e2-3.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-eng-12-r1',
                    name: 'Reading test (30 mins)',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 20,
                    time: 30,
                  },
                  {
                    id: 'e-eng-12-r2',
                    name: 'Full reading mock',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 30,
                    time: 45,
                  },
                ],
              },
              // Grammar, Writing Task 2 đã có đầy đủ
            ],
          },
        ],
      },
    ],
  },

  // ==================== TOÁN TIẾNG ANH ====================
  {
    id: 'toan-tieng-anh',
    subject: 'Toán Tiếng Anh',
    grades: [
      {
        id: 'matheng-lop9-hk1',
        grade: 'Lớp 9',
        semester: 'Học kì 1',
        year: '2024-2025',
        topics: [
          {
            id: 't-matheng-algebra',
            name: 'Algebra',
            curriculums: [
              {
                id: 'c-matheng-quad',
                name: 'Quadratic Equations',
                lessons: [
                  {
                    id: 'l-matheng-q1',
                    name: 'Basic forms & roots',
                    img: '/assets/icons/vio/premium_2025.pngng',
                    needBuy: true,
                    src: '/videos/ta1-1.mp4',
                  },
                  {
                    id: 'l-matheng-q2',
                    name: 'Factorization methods',
                    img: '/assets/icons/vio/premium_2025.pngng',
                    needBuy: true,
                    src: '/videos/ta1-2.mp4',
                  },
                  {
                    id: 'l-matheng-q3',
                    name: 'Solve quadratic problems',
                    img: '/assets/icons/vio/premium_2025.pngng',
                    needBuy: true,
                    src: '/videos/ta1-3.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-matheng-q1',
                    name: 'Quadratic test',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 12,
                    time: 20,
                  },
                  {
                    id: 'e-matheng-q2',
                    name: 'Advanced quadratic set',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 15,
                    time: 25,
                  },
                ],
              },
              // Functions, Geometry đã có đầy đủ
            ],
          },
        ],
      },
    ],
  },

  // ==================== TÀI CHÍNH ====================
  {
    id: 'tai-chinh',
    subject: 'Tài Chính',
    grades: [
      {
        id: 'finance-lop10-hk1',
        grade: 'Lớp 10',
        semester: 'Học kì 1',
        year: '2024-2025',
        topics: [
          {
            id: 't-finance-ca-nhan',
            name: 'Tài chính cá nhân',
            curriculums: [
              {
                id: 'c-finance-ngan-sach',
                name: 'Lập ngân sách',
                lessons: [
                  {
                    id: 'l-finance-1-1',
                    name: 'Nguyên tắc lập ngân sách',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/f1-1.mp4',
                  },
                  {
                    id: 'l-finance-1-2',
                    name: 'Lập bảng thu chi',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/f1-2.mp4',
                  },
                  {
                    id: 'l-finance-1-3',
                    name: 'Quản lý chi tiêu cá nhân',
                    img: '/assets/icons/vio/premium_2025.pngg',
                    needBuy: true,
                    src: '/videos/f1-3.mp4',
                  },
                ],
                exams: [
                  {
                    id: 'e-finance-1-1',
                    name: 'Bài kiểm tra: Lập ngân sách',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 12,
                    time: 20,
                  },
                  {
                    id: 'e-finance-1-2',
                    name: 'Case study tài chính gia đình',
                    img: '/assets/icons/vio/image_exam_none.png',
                    needBuy: true,
                    numberOfQuestion: 8,
                    time: 30,
                  },
                ],
              },
              // Tiết kiệm, lãi suất đã có đầy đủ
            ],
          },
        ],
      },
    ],
  },
];
