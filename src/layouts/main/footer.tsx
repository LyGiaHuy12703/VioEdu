'use client';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

// =================================== TOÀN BỘ DATA Ở ĐÂY ===================================
const ABOUT_LINKS = [
  'Quy định chung',
  'Hướng dẫn thanh toán',
  'Điều kiện giao dịch chung',
  'Quy trình sử dụng dịch vụ',
  'Chính sách bảo hành',
  'Chính sách hoàn trả hàng',
  'Chính sách bảo mật',
] as const;

const VIOEDU_LINKS = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Danh sách chủ điểm', href: '/chu-diem' },
  { name: 'Đánh giá', href: '/danh-gia' },
  { name: 'Mua khoá học', href: '/mua-khoa-hoc' },
  { name: 'Đăng ký', href: '/dang-ky' },
  { name: 'Đăng nhập', href: '/dang-nhap' },
  { name: 'Hướng dẫn sử dụng', href: '/huong-dan' },
] as const;

const CONTACT_INFO = [
  {
    icon: '/assets/svg/building.svg',
    title: 'Địa chỉ công ty',
    content: (
      <>
        <strong>Hệ thống Giáo dục Trực tuyến VioEdu – Công ty TNHH FPT IS</strong>
        <br />
        G.PPKD số 0104128565 do Sở KHĐT TP Hà Nội cấp ngày 13/08/2009
        <br />
        Tòa FPT, số 10 Phạm Văn Bạch, Phường Cầu Giấy, Hà Nội, Việt Nam
      </>
    ),
  },
  {
    icon: '/assets/svg/phone.svg',
    title: 'Hotline',
    content: (
      <>
        Hỗ trợ trực tuyến: <strong>1900 636 111</strong> hoặc <strong>0353055060</strong>
        <br />
        (8h30–21h thứ 2 - thứ 6, 8h30–11h30 thứ 7)
      </>
    ),
  },
  {
    icon: '/assets/svg/mail.svg',
    title: 'Email',
    content: <Link href="mailto:support@vio.edu.vn">support@vio.edu.vn</Link>,
  },
] as const;

// =================================== STYLE ===================================
const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
}));

export type FooterProps = React.ComponentProps<typeof FooterRoot>;

const renderFooterInfo = () => (
  <Container sx={{ position: 'relative', zIndex: 2 }}>
    <Grid container spacing={{ xs: 4, md: 6 }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Giới thiệu
        </Typography>
        {ABOUT_LINKS.map((text) => (
          <Link
            key={text}
            component={RouterLink}
            href="#"
            color="inherit"
            underline="hover"
            variant="body2"
            display="block"
            sx={{ my: 2, opacity: 0.9 }}
          >
            {text}
          </Link>
        ))}
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Thông tin liên hệ
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
          {CONTACT_INFO.map((item) => (
            <Box key={item.title} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Image src={item.icon} alt={item.title} width={34} height={34} />
              <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                {item.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Về VioEdu
        </Typography>

        {VIOEDU_LINKS.map((link) => (
          <Link
            key={link.name}
            component={RouterLink}
            href={link.href}
            color="inherit"
            variant="body2"
            display="block"
            sx={{
              my: 2,
              opacity: 0.9,
              cursor: 'pointer',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            {link.name}
          </Link>
        ))}
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Mạng xã hội
        </Typography>
        <Box sx={{ my: 3, display: 'flex', gap: 1 }}>
          <Image
            src="/assets/svg/facebook.svg"
            alt="facebook"
            width={50}
            height={50}
            style={{ marginRight: 10 }}
          />
          <Image src="/assets/svg/youtube.svg" alt="youtube" width={50} height={50} />
        </Box>
        <Box
          component="img"
          src="/assets/icons/vio/logoSaleNoti2.png"
          alt="Đã thông báo Bộ Công Thương"
          sx={{ height: { xs: 60, md: 80 } }}
        />
      </Grid>
    </Grid>
  </Container>
);

const renderFooterCopyRight = () => (
  <Box
    sx={{
      position: 'relative',
      mt: { xs: -4, md: -20 },
      backgroundImage: `url("/assets/background/footerVio.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
      backgroundSize: 'cover',
      minHeight: { xs: 220, md: 280 },
      width: '100vw',
      left: '50%',
      right: '50%',
      mx: '-50vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      pt: { xs: 12, md: 25 },
      pb: { xs: 4, md: 6 },
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      },
    }}
  >
    <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
      <Box
        component="img"
        src="/logo/logoFooter.png"
        alt="VioEdu"
        sx={{
          width: { xs: 90, sm: 110 },
          mb: 2,
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))',
        }}
      />
      <br />
      <Typography
        variant="caption"
        sx={{
          color: 'white',
          fontSize: { xs: '0.8rem', sm: '0.95rem' },
          lineHeight: 1.9,
          opacity: 0.95,
        }}
      >
        © Copyright 2018 for vio.edu.vn. All rights reserved
        <br />
        Hệ thống sử dụng tốt nhất bằng trình duyệt
        <Link
          href="https://www.google.com/chrome/"
          target="_blank"
          rel="noopener"
          color="inherit"
          underline="always"
          sx={{ fontWeight: 600 }}
        >
          Google Chrome
        </Link>
        <br />
        Env: PROD; Version: v25.1121.2
      </Typography>
    </Box>
  </Box>
);

export function Footer({ sx, ...other }: FooterProps) {
  return (
    <FooterRoot sx={sx} {...other}>
      {renderFooterInfo()}
      {renderFooterCopyRight()}
    </FooterRoot>
  );
}

export function HomeFooter({ sx, ...other }: FooterProps) {
  return <Footer sx={sx} {...other} />;
}
