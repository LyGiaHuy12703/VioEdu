'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function HomeDownloadMobile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpen, setIsOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  if (!mounted) return null;

  if (!isMobile || !isOpen) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#e0f7fa',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          height: '35%',
          minHeight: 200,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        {/* Ảnh Robot Banner */}
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/assets/background/bg_mobile.png"
            alt="VioEdu Mobile Banner"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          mt: -2,
          zIndex: 2,
          p: 3,
          pt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0px -4px 20px rgba(0,0,0,0.05)',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#0D2B4F',
            fontWeight: 700,
            mb: 1,
            fontSize: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          VioEdu hoạt động tốt hơn
          <br />
          trên ứng dụng
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, maxWidth: 300 }}>
          Để tham gia đấu trường và học tập trên VioEdu một cách tốt nhất & hiệu quả.
        </Typography>

        <Stack direction="row" spacing={1.5} sx={{ mb: 2.5 }}>
          <Box
            component="a"
            href="https://apps.apple.com/vn/app/vioedu-h%E1%BB%8Dc-sinh/id1504319030"
            target="_blank"
            sx={{ width: 135, height: 40, position: 'relative' }}
          >
            {/* Thay bằng ảnh nút AppStore */}
            <Image
              src="/assets/icons/vio/App_Store_New.png"
              alt="App Store"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>

          <Box
            component="a"
            href="https://play.google.com/store/apps/details?id=com.vioedu.student"
            target="_blank"
            sx={{ width: 135, height: 40, position: 'relative' }}
          >
            <Image
              src="/assets/icons/vio/Google_Play_New.png"
              alt="Google Play"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Stack>

        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
          Tải App để trải nghiệm VioEdu ngay bây giờ
        </Typography>

        {/* Divider Hoặc */}
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Hoặc bạn có thể
        </Typography>

        {/* 2 Nút chức năng phụ */}
        <Stack direction="row" spacing={2} sx={{ mb: 4, width: '100%' }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => setIsOpen(false)} // Tạm thời đóng popup để xem tin tức
            sx={{
              borderRadius: 30,
              borderColor: '#ddd',
              color: 'text.primary',
              textTransform: 'none',
              py: 1.2,
            }}
          >
            Tin tức VioEdu
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{
              borderRadius: 30,
              bgcolor: '#66bb6a', // Màu xanh lá giống ảnh
              '&:hover': { bgcolor: '#57a05b' },
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              py: 1.2,
            }}
          >
            Mua khóa học
          </Button>
        </Stack>

        {/* Khung hỗ trợ (Support Box) */}
        <Box
          sx={{
            width: '100%',
            bgcolor: '#F4F8FA', // Màu nền xám xanh nhạt
            borderRadius: 2,
            p: 2,
            mb: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Bạn cần tư vấn thêm về gói học vui lòng liên hệ
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#0D2B4F', fontWeight: 700 }}>
            1900.636.111 (phím số 2)
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', my: 0.5 }}>
            Hoặc
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#0D2B4F', fontWeight: 700 }}>
            0353.055.060
          </Typography>
        </Box>

        {/* Nút thoát dùng Web (Dự phòng) */}
        <Button
          onClick={() => setIsOpen(false)}
          sx={{ textTransform: 'none', color: 'text.secondary', fontSize: '0.85rem' }}
        >
          Tiếp tục sử dụng bản Web
        </Button>
      </Box>
    </Box>
  );
}
