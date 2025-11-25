'use client';

import Image from 'next/image';
import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

type TabType = 'Phụ huynh' | 'Học sinh' | 'Giáo viên' | 'Nhà trường';

const tabs: TabType[] = ['Phụ huynh', 'Học sinh', 'Giáo viên', 'Nhà trường'];

const content: Record<
  TabType,
  { items: { icon: string; title: string; desc: string }[]; image: string }
> = {
  'Phụ huynh': {
    items: [
      {
        icon: '/assets/icons/vio/wcv1.png',
        title: 'Báo cáo trực quan',
        desc: 'Nhận báo cáo chi tiết hằng ngày về điểm mạnh, điểm yếu và kết quả học tập của con.',
      },
      {
        icon: '/assets/icons/vio/wcv2.png',
        title: 'Hỗ trợ kèm con học',
        desc: 'Sử dụng học liệu, lộ trình gợi ý và các phân tích của VioEdu để hỗ trợ con tự học hoặc có kế hoạch bồi dưỡng phù hợp.',
      },
      {
        icon: '/assets/icons/vio/wcv3.png',
        title: 'Tiết kiệm thời gian',
        desc: 'Tiết kiệm thời gian khi con tự giác, chủ động và tiến bộ trong học tập.',
      },
      {
        icon: '/assets/icons/vio/wcv4.png',
        title: 'Tiết kiệm tài chính',
        desc: 'Tiết kiệm chi phí, giảm áp lực học thêm khi con tự học hiệu quả.',
      },
    ],
    image: '/assets/background/whyChooseVio.png',
  },
  'Học sinh': {
    items: [
      {
        icon: '/assets/icons/vio/wcv1.png',
        title: 'Linh hoạt, chủ động',
        desc: 'Học mọi lúc, mọi nơi trên các thiết bị điện tử có kết nối Internet.',
      },
      {
        icon: '/assets/icons/vio/wcv2.png',
        title: 'Cạnh tranh, thu hút',
        desc: 'Quà tặng hấp dẫn và nhiều cuộc thi khuyến khích, cổ vũ tinh thần ham học.',
      },
      {
        icon: '/assets/icons/vio/wcv3.png',
        title: 'Lộ trình học cá nhân hóa',
        desc: 'Phát hiện điểm mạnh, điểm yếu, đề xuất kiến thức và kỹ năng phù hợp với năng lực học sinh. Rút ngắn thời gian học tập từ 30% - 50%.',
      },
      {
        icon: '/assets/icons/vio/wcv4.png',
        title: 'Tăng hứng thú học',
        desc: 'Video bài giảng hoạt hình cùng hệ thống câu hỏi luyện tập phong phú và giàu tính tương tác giúp học sinh vững kiến thức, hào hứng học tập.',
      },
    ],
    image: '/assets/background/whyChooseVio2.png',
  },
  'Giáo viên': {
    items: [
      {
        icon: '/assets/icons/vio/wcv1.png',
        title: 'Tiết kiệm thời gian',
        desc: 'Tiết kiệm 95% thời gian soạn giáo án, giao bài tập, tổ chức kiểm tra, chấm điểm',
      },
      {
        icon: '/assets/icons/vio/wcv2.png',
        title: 'Hỗ trợ quản lý',
        desc: 'Báo cáo thống kê nhanh, chính xác hiệu quả học tập của từng học sinh',
      },
      {
        icon: '/assets/icons/vio/wcv3.png',
        title: 'Dạy học hiệu quả',
        desc: 'Sử dụng nguồn học liệu của VioEdu để đa dạng hóa cách truyền tải kiến thức. Ứng dụng tính năng MS Team vào dạy học trực tuyến',
      },
      {
        icon: '/assets/icons/vio/wcv4.png',
        title: 'Giảm áp lực',
        desc: 'Hỗ trợ phân hóa học sinh, từ đó thiết kế lộ trình bồi dưỡng riêng biệt, sát sao, hiệu quả cho học sinh.',
      },
    ],
    image: '/assets/background/whyChooseVio3.png',
  },
  'Nhà trường': {
    items: [
      {
        icon: '/assets/icons/vio/wcv1.png',
        title: 'Quản lý toàn diện',
        desc: 'Quản lý toàn diện hoạt động dạy và học của giáo viên, học sinh theo từng khối lớp.',
      },
      {
        icon: '/assets/icons/vio/wcv2.png',
        title: 'Nâng cao chất lượng dạy và học',
        desc: 'Sử dụng nguồn học liệu, hạ tầng công nghệ và các báo cáo của VioEdu nhằm chủ động, phát huy và nâng cao chất lượng đào tạo.',
      },
      {
        icon: '/assets/icons/vio/wcv3.png',
        title: 'Đánh giá chính xác',
        desc: 'Báo cáo, thống kê, đánh giá hoạt động giảng dạy của giáo viên. Nắm bắt điểm mạnh, điểm yếu của học sinh từng khối lớp.',
      },
      {
        icon: '/assets/icons/vio/wcv4.png',
        title: 'Tối ưu thời gian',
        desc: 'Giảm thời gian thống kê, báo cáo, phân tích. Giảm thời gian tổ chức kiểm tra, đánh giá. Thuận tiện kết nối trực tiếp, kịp thời với phụ huynh.',
      },
    ],
    image: '/assets/background/whyChooseVio4.png',
  },
};

export default function HomeWhyChooseVio() {
  const [activeTab, setActiveTab] = useState<TabType>('Phụ huynh');
  const current = content[activeTab];

  return (
    <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Tiêu đề */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            fontSize: { xs: 36, md: 48 },
            mb: 6,
            lineHeight: 1.2,
          }}
        >
          Tại sao nên lựa chọn
          <Box component="span" sx={{ color: 'success.main' }}>
            VioEdu
          </Box>
        </Typography>

        <Stack direction="row" justifyContent="center" spacing={2} flexWrap="wrap" sx={{ mb: 10 }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <m.div key={tab} whileTap={{ scale: 0.95 }}>
                <Box
                  onClick={() => setActiveTab(tab)}
                  sx={{
                    px: { xs: 4, md: 5 },
                    py: 1.8,
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: { xs: 16, md: 18 },
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    bgcolor: isActive ? '#00a651' : '#f5f5f5',
                    color: isActive ? 'white' : 'text.primary',
                    minWidth: 140,
                    textAlign: 'center',
                    boxShadow: isActive ? '0 8px 25px rgba(0,166,81,0.3)' : 'none',
                    '&:hover': {
                      bgcolor: isActive ? '#008a45' : '#e0e0e0',
                    },
                  }}
                >
                  {tab}
                </Box>
              </m.div>
            );
          })}
        </Stack>

        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: { xs: 6, md: 8 },
                alignItems: 'center',
              }}
            >
              <Box sx={{ flex: { lg: '0 0 58%' }, width: '100%' }}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 4,
                  }}
                >
                  {current.items.map((item, index) => (
                    <Box
                      key={index}
                      component={m.div}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      sx={{ width: '100%' }}
                    >
                      <Stack direction="row" spacing={3} alignItems="flex-start">
                        <Box sx={{ flexShrink: 0, width: 56, height: 56 }}>
                          <Image src={item.icon} alt={item.title} width={56} height={56} />
                        </Box>
                        <Box>
                          <Typography variant="h6" fontWeight={700} gutterBottom>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                            {item.desc}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ flex: { lg: '0 0 42%' }, width: '100%', maxWidth: 600 }}>
                <m.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Image
                    src={current.image}
                    alt={activeTab}
                    width={200}
                    height={300}
                    style={{ display: 'block' }}
                    priority
                  />
                </m.div>
              </Box>
            </Box>
          </m.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
