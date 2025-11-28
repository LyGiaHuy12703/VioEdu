import type { PackageProps, PackageCourseProps, PackageBenefitsProps } from './type';

export const PackageData: PackageProps[] = [
  {
    img: '/assets/icons/vio/medal_badge.png',
    title: 'Đánh giá năng lực đầu vào',
  },
  {
    img: '/assets/icons/vio/badge_icon.png',
    title: 'Lộ trình học tập cá nhân hoá',
  },
  {
    img: '/assets/icons/vio/vio_badge.png',
    title: 'Báo cáo học tập',
  },
  {
    img: '/assets/icons/vio/cupa_badge.png',
    title: 'Thách đấu mỗi ngày',
  },
  {
    img: '/assets/icons/vio/book_badge.png',
    title: 'Nội dung bám sát SGK',
  },
];

export const packageBenefits: PackageBenefitsProps[] = [
  {
    title: 'Tài khoản miễn phí',
    items: [
      'Học thử một số chủ đề miễn phí',
      'Thách đấu 1 trận/1 ngày',
      'Đấu trường miễn phí',
      'Tích lũy tối đa 5 kim cương/ngày',
    ],
  },
  {
    title: 'Tài khoản có phí',
    items: [
      'Học toàn bộ các chủ điểm',
      'Thách đấu 10 trận/ngày',
      'Đấu trường miễn phí',
      'Không giới hạn tích lũy kim cương đổi quà',
      'Đánh giá năng lực đầu vào',
      'Lộ trình học cá nhân hoá theo học lực',
      'Xem đánh giá chi tiết về quá trình học',
    ],
  },
];

export const PackageCourse: PackageCourseProps = {
  combos: [
    {
      name: 'combo vươn xa',
      subjects: ['Tiếng Việt', 'Toán (bằng tiếng Việt)', 'Toán (bằng tiếng Anh)'],
      plans: [
        {
          durationMonths: 6,
          originalPrice: 1800000,
          price: 1499000,
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 150 kim cương + 3 lượt thi thử',
          ],
          diamond: 150,
          popular: false,
        },
        {
          durationMonths: 12,
          originalPrice: 2880000,
          price: 1990000,
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 400 kim cương + 6 lượt thi thử',
          ],
          diamond: 400,
          popular: false,
        },
      ],
    },
    {
      name: 'combo tinh anh',
      subjects: [
        'Tiếng Việt',
        'Toán (bằng tiếng Việt)',
        'Toán (bằng tiếng Anh)',
        'Tài chính thông minh',
      ],
      plans: [
        {
          durationMonths: 6,
          originalPrice: 2400000,
          price: 1599000,
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 200 kim cương + 4 lượt thi thử',
          ],
          diamond: 200,
          popular: false,
        },
        {
          durationMonths: 12,
          originalPrice: 3840000,
          price: 2199000,
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 400 kim cương + 6 lượt thi thử',
          ],
          diamond: 400,
          popular: false,
        },
      ],
    },
    {
      name: 'combo đa tài',
      subjects: ['Toán (bằng tiếng Việt)', 'Tiếng Việt', 'Tiếng Anh (học cùng trợ lý AI)'],
      plans: [
        {
          durationMonths: 6,
          originalPrice: 2299000,
          price: 1779000,
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 150 kim cương + 3 lượt thi thử',
          ],
          diamond: 150,
          popular: false,
        },
        {
          durationMonths: 12,
          originalPrice: 3689000,
          price: 2839000,
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 300 kim cương + 6 lượt thi thử',
          ],
          diamond: 400,
          popular: false,
        },
      ],
    },
  ],
  subject: [
    {
      subject: 'Môn Toán',
      plans: [
        {
          durationMonths: 6,
          originalPrice: 600000,
          price: 600000,
          diamond: 50,
          gifts: ['Được thách đấu 10 lượt mỗi ngày trong Thách Đấu', 'Tặng 50 kim cương'],
        },
        {
          durationMonths: 12,
          originalPrice: 960000,
          price: 816000,
          diamond: 100,
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 100 kim cương + 2 lượt thi thử',
          ],
        },
      ],
    },
    {
      subject: 'Môn Tiếng Việt',
      plans: [
        {
          durationMonths: 6,
          originalPrice: 600000,
          price: 600000,
          diamond: 50,
          gifts: ['Được thách đấu 10 lượt mỗi ngày trong Thách Đấu', 'Tặng 50 kim cương'],
        },
        {
          durationMonths: 12,
          originalPrice: 960000,
          price: 816000,
          diamond: 100,
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 100 kim cương + 2 lượt thi thử',
          ],
        },
      ],
    },
    {
      subject: 'Môn Toán Tiếng Anh',
      plans: [
        {
          durationMonths: 6,
          originalPrice: 600000,
          price: 600000,
          diamond: 50,
          sub: 'Khi mua gói học môn Toán (bằng tiếng Anh) này, bạn sẽ được:',
          gifts: ['Được thách đấu 10 lượt mỗi ngày trong Thách Đấu', 'Tặng 50 kim cương'],
        },
        {
          durationMonths: 12,
          originalPrice: 960000,
          price: 816000,
          diamond: 100,
          sub: 'Khi mua gói học môn Toán (bằng tiếng Anh) này, bạn sẽ được:',
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 100 kim cương + 2 lượt thi thử',
          ],
        },
      ],
    },
    {
      subject: 'Môn Tài Chính Thông Minh',
      plans: [
        {
          durationMonths: 6,
          originalPrice: 600000,
          price: 600000,
          diamond: 50,
          gifts: ['Được thách đấu 10 lượt mỗi ngày trong Thách Đấu', 'Tặng 50 kim cương'],
        },
        {
          durationMonths: 12,
          originalPrice: 960000,
          price: 816000,
          diamond: 100,
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 100 kim cương + 2 lượt thi thử',
          ],
        },
      ],
    },
    {
      subject: 'Môn Tiếng Anh',
      plans: [
        {
          durationMonths: 6,
          originalPrice: 1099000,
          price: 879000,
          diamond: 50,
          sub: 'Khi mua gói môn Tiếng Anh (học cùng trợ lý AI) 6 tháng, bạn sẽ được:',
          gifts: ['Được thách đấu 10 lượt mỗi ngày trong Thách Đấu', 'Tặng 50 kim cương'],
        },
        {
          durationMonths: 12,
          originalPrice: 1769000,
          price: 1415000,
          diamond: 100,
          sub: 'Khi mua gói môn Tiếng Anh (học cùng trợ lý AI) 12 tháng, bạn sẽ được:',
          gifts: [
            'Được thách đấu 10 lượt mỗi ngày trong Thách Đấu',
            'Tặng 100 kim cương + 2 lượt thi thử',
          ],
        },
      ],
    },
  ],
};

export const PackageNoteData: string[] = [
  'Chính sách ưu đãi trên đây được áp dụng từ ngày 20/11 đến hết 25/11/2025',
  'Khối THCS chỉ có môn Toán (bằng Tiếng Việt)',
  'Gói học sau khi thanh toán sẽ không được hoàn huỷ.',
  'Không áp dụng đồng thời các ưu đãi khác.',
];
