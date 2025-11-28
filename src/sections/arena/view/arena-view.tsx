import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export function ArenaView() {
  return (
    <Box sx={{ bgcolor: '#F0F0E6', minHeight: '100vh', position: 'relative', pb: 10 }}>
      <Container maxWidth="lg">
        <Paper
          sx={{
            m: 5,
            minHeight: 500,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            background: 'linear-gradient(to bottom, #85c056 70px, white 70px)',
          }}
        >
          <Box
            sx={{
              bgcolor: '#85c056',
              height: 70,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              Đấu trường học tập
            </Typography>
          </Box>
          <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
            <Typography variant="h6" color="error">
              Cần đăng nhập để vào đấu trường
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
