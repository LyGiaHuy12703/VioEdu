import Image from 'next/image';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const renderVideo = () => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      maxWidth: { xs: 360, sm: 640, md: 800, lg: 1000 },
      mx: 'auto',
      mt: { xs: 6, md: 8 },
      borderRadius: { xs: 16, md: 4 },
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,166,81,0.2)',
    }}
  >
    <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src="https://www.youtube-nocookie.com/embed/AvNuEhs7wMI"
        title="Đánh giá VioEdu"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
      />
    </Box>
  </Box>
);

const renderButtonFooter = () => (
  <Box sx={{ display: 'flex', my: 5 }}>
    <Button variant="contained" color="white" sx={{ mx: 2 }}>
      <Typography variant="body2">Kỹ năng công nghệ thông tin</Typography>
    </Button>
    <Button variant="contained" color="white" sx={{ mx: 2 }}>
      <Typography variant="body2">Nắm vững kiến thức, tự tin lên lớp</Typography>
    </Button>
    <Button variant="contained" color="white" sx={{ mx: 2 }}>
      <Typography variant="body2">Phát triển tư duy Toán học & năng lực tự học</Typography>
    </Button>
    <Button variant="contained" color="white" sx={{ mx: 2 }}>
      <Typography variant="body2">Yêu thích môn Toán</Typography>
    </Button>
    <Button variant="contained" color="white" sx={{ mx: 2 }}>
      <Typography variant="body2">Thói quen chủ động</Typography>
    </Button>
  </Box>
);

export function HomeReviewVio() {
  return (
    <Stack>
      <Box>
        <Image
          src="/assets/icons/vio/cupVioedu.png"
          alt="cup Vioedu"
          width={166}
          height={194}
          style={{ margin: '0 auto', display: 'block', marginBottom: 20 }}
        />
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          {' '}
          Đánh giá về VioEdu dưới nhiều góc nhìn
        </Typography>
        {renderVideo()}
        {renderButtonFooter()}
      </Box>
    </Stack>
  );
}
