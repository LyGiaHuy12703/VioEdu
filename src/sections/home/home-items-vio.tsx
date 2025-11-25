import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function HomeItemsVio() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant="h6" sx={{ mx: 3 }}>
        Học toán trực tuyến
      </Typography>
      <Typography variant="h6" sx={{ mx: 3 }}>
        Học tiếng việt trực tuyến
      </Typography>
      <Typography variant="h6" sx={{ mx: 3 }}>
        Học toán tiếng anh trực tuyến
      </Typography>
    </Box>
  );
}
