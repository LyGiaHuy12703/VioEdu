import type {
  NewsPaper,
  SELECT_DATA,
  NavMainProps,
  RankingProps,
  HomeItemsVio,
  AssistantProps,
  HeaderTitleProps,
} from './main/nav/types';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  {
    title: 'Vào học',
    path: '/skill-list',
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
    path: paths.news,
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
export const Home_Items_Vio: HomeItemsVio[] = [
  { id: 1, title: 'Học toán trực tuyến' },
  { id: 2, title: 'Học tiếng Việt trực tuyến' },
  { id: 3, title: 'Học toán tiếng Anh trực tuyến' },
];

export const News_Paper: NewsPaper[] = [
  { name: 'vn_express', logo: '/logo/logo-vnexpress.jpg' },
  { name: 'dan_tri', logo: '/logo/logo-dantri.png' },
  { name: 'nhip_song_so', logo: '/logo/nhipSongSo-logo.png' },
  { name: 'tien_phong', logo: '/logo/logo-tienphong.jpg' },
  { name: 'nguoi_lao_dong', logo: '/logo/nld.jpg' },
  { name: 'vtv3', logo: '/logo/nhipSongSo-logo.png' },
  { name: 'vtv_news', logo: '/logo/logo-vnexpress.jpg' },
  { name: 'ict_news', logo: '/logo/ICTnews-Logo.jpeg' },
];

export const GRADE: SELECT_DATA[] = [
  { value: 0, label: 'Tất cả khối' },
  { value: 1, label: 'Khối 1' },
  { value: 2, label: 'Khối 2' },
  { value: 3, label: 'Khối 3' },
  { value: 4, label: 'Khối 4' },
  { value: 5, label: 'Khối 5' },
  { value: 6, label: 'Khối 6' },
  { value: 7, label: 'Khối 7' },
  { value: 8, label: 'Khối 8' },
  { value: 9, label: 'Khối 9' },
  { value: 10, label: 'Lớp 10' },
  { value: 11, label: 'Lớp 11' },
  { value: 12, label: 'Lớp 12' },
];

export const ROUND_EXAM: SELECT_DATA[] = [
  { value: 'all', label: 'Tổng hợp tất cả vòng' },
  { value: 'preliminary', label: 'Vòng sơ loại' },
  { value: 'quarter', label: 'Tứ kết' },
  { value: 'semi', label: 'Bán kết' },
  { value: 'final', label: 'Chung kết' },
];
