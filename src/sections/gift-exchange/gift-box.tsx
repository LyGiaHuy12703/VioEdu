'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import VoucherGift from './voucher-gift';
import { EventGift } from './event-gift';
import { PhysicalGift } from './physical-gift';

export default function GiftBox() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: '#F0F0E6', minHeight: '100vh', pt: 8, mt: -25 }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" mb={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#333"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
            }}
          >
            Gian hàng đổi thưởng
          </Typography>
        </Stack>
        <Stack alignItems="center">
          <Tabs value={value} onChange={handleChange}>
            {['Quà hiện vật', 'Voucher khóa học', 'Sự kiện kỳ thú'].map((label, index) => (
              <Tab
                key={index}
                label={
                  <Typography fontWeight={600} fontSize="1.05rem" sx={{ textTransform: 'none' }}>
                    {label}
                  </Typography>
                }
                sx={{
                  minHeight: 56,
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  px: { xs: 3, sm: 5 },
                  py: 1,
                  bgcolor: value === index ? '#4CAF50' : '#B0BEC5',
                  color: 'white !important',
                  boxShadow: value === index ? '0 4px 12px rgba(76, 175, 80, 0.3)' : 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: value === index ? '#43a047' : '#90A4AE',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                  },
                }}
              />
            ))}
          </Tabs>
        </Stack>
        <Paper>
          <Stack sx={{ p: 3 }}>
            {value === 0 && <PhysicalGift />}
            {value === 1 && <VoucherGift />}
            {value === 2 && <EventGift />}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
