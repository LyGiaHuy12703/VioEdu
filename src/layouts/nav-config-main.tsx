import type { NavMainProps, RankingProps, AssistantProps, HeaderTitleProps } from './main/nav/types';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  {
    title: 'Vào học',
    path: '/',
    icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" />,
  },
  {
    title: 'Đổi quà',
    path: paths.giftExchange,
    icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: paths.analysisIntro,
    icon: <Iconify width={22} icon="solar:file-bold-duotone" />,
  },
  {
    title: 'Thách đấu',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.arena,
  },
  {
    title: 'Mua khóa học',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.package,
  },
  {
    title: 'Tin tức',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.docs,
  },
];

export const assistantData: AssistantProps['data'] = [
  {
    quantity: 'Hơn 96%',
    image: '/assets/icons/vio/assistance1.png',
    title: 'Hơn 96% học sinh tiến bộ rõ rệt và yêu thích, tự giác học tập',
  },
  {
    quantity: 'Chỉnh xác 95%',
    image: '/assets/icons/vio/assistance2.png',
    title: 'Gợi ý lộ trình học cá nhân hoá',
  },
  {
    quantity: '1,000,000++',
    image: '/assets/icons/vio/assistance3.png',
    title: '1,000,000++ nội dung kiến thức theo SGK và nâng cao',
  },
  {
    quantity: '10 triệu học sinh',
    image: '/assets/icons/vio/assistance4.png',
    title: '10 triệu học sinh yêu thích và tiến bộ',
  },
];
// Dữ liệu top 10 – dùng lại 3 avatar luân phiên cho top 4-10
export const mockTop10: RankingProps['data'] = [
  {
    rank: 1,
    name: 'Trần Hà Anh',
    school: 'THPT Kiên Lương 1',
    avatar: '/assets/icons/vio/user2.jpg',
  },
  {
    rank: 2,
    name: 'Nguyễn Trần Ngọc Nhi',
    school: 'Tiểu học A Thị trấn Mỹ Luông',
    avatar: '/assets/icons/vio/user1.jpg',
  },
  {
    rank: 3,
    name: 'Nguyễn Phú Cường',
    school: 'Tiểu học Nguyễn Du',
    avatar: '/assets/icons/vio/user3.jpg',
  },
  {
    rank: 4,
    name: 'Lê Thị Minh Thư',
    school: 'THCS Trần Phú',
    avatar: '/assets/icons/vio/user1.jpg',
  },
  {
    rank: 5,
    name: 'Phạm Quốc Bảo',
    school: 'THPT Chuyên Lê Hồng Phong',
    avatar: '/assets/icons/vio/user2.jpg',
  },
  {
    rank: 6,
    name: 'Huỳnh Ngọc Ái Vy',
    school: 'Tiểu học Kim Đồng',
    avatar: '/assets/icons/vio/user3.jpg',
  },
  {
    rank: 7,
    name: 'Đỗ Anh Khoa',
    school: 'THCS Nguyễn Tri Phương',
    avatar: '/assets/icons/vio/user1.jpg',
  },
  {
    rank: 8,
    name: 'Vũ Hoàng Minh Châu',
    school: 'THPT Nguyễn Thị Minh Khai',
    avatar: '/assets/icons/vio/user2.jpg',
  },
  {
    rank: 9,
    name: 'Trương Bảo Long',
    school: 'Tiểu học Lê Quý Đôn',
    avatar: '/assets/icons/vio/user3.jpg',
  },
  {
    rank: 10,
    name: 'Bùi Thị Diễm My',
    school: 'THCS Lê Lợi',
    avatar: '/assets/icons/vio/user1.jpg',
  },
];

export const headerTitle: HeaderTitleProps['data'] = [
  {
    title: 'support@vio.edu.vn',
    path: '#',
    icon: '/assets/svg/mail.svg',
  },
  {
    title: 'Facebook VioEdu',
    path: '#',
    icon: '/assets/svg/facebook.svg',
  },
  {
    title: '1900 636 111',
    path: '#',
    icon: '/assets/svg/hotline.svg',
  },
  {
    title: '0353.055.060',
    icon: '/assets/svg/phone.svg',
    path: '#',
  },
];
