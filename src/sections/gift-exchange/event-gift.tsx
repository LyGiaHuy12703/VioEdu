import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export function EventGift() {
  return (
    <Box
      sx={{
        borderBottom: '1px solid #e0e0e0',
        py: 2,
        px: { xs: 2, sm: 4 },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          fontWeight: 600,
          color: 'text.primary',
          fontSize: { xs: '0.95rem', sm: '1.1rem' },
        }}
      >
        {/* Cột 1: Ngày diễn ra */}
        <Box sx={{ flex: 1, textAlign: 'left' }}>Ngày diễn ra</Box>

        {/* Cột 2: Sự kiện */}
        <Box sx={{ flex: 2, textAlign: 'center' }}>Sự kiện</Box>

        {/* Cột 3: Quà tặng */}
        <Box sx={{ flex: 1, textAlign: 'right' }}>Quà tặng</Box>
      </Stack>
    </Box>
  );
}
