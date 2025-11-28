'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { PackageData, packageBenefits } from './data';

const renderBenefit = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{ border: '1px solid #E5E5E5', borderRadius: 3 }}
  >
    {packageBenefits.map((item, index) => (
      <React.Fragment key={item.title}>
        <Stack sx={{ width: '48%', p: 3 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {item.title}
          </Typography>

          {item.items.map((benefit) => (
            <Stack
              key={benefit}
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{
                bgcolor: '#E9F7EC',
                p: 1,
                borderRadius: 2,
                mb: 1,
              }}
            >
              <Image src="/assets/svg/check.svg" alt="check" width={24} height={24} />
              <Typography>{benefit}</Typography>
            </Stack>
          ))}
        </Stack>
        {index === 0 && (
          <Divider orientation="vertical" flexItem sx={{ borderColor: '#D8D8D8', opacity: 0.7 }} />
        )}
      </React.Fragment>
    ))}
  </Stack>
);

export function PackageBenefit() {
  const [openBenefit, setOpenBenefit] = useState(false);

  return (
    <Box sx={{ mb: 5 }}>
      <Container maxWidth="lg" sx={{ mt: -15, zIndex: 10 }}>
        <Paper sx={{ p: 5, position: 'relative' }}>
          <Typography variant="h3" fontWeight={500} color="success" textAlign="center">
            Chỉ từ 3,000đ/ngày
          </Typography>
          <Typography variant="body1" textAlign="center">
            Học tập thả ga trên VioEdu
          </Typography>
          <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
            <Image
              src="/assets/icons/vio/icon.png"
              alt="icon"
              width={40}
              height={40}
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
            {PackageData.map((item) => (
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                key={item.title}
              >
                <Image src={item.img} alt={item.title} width={70} height={70} />
                <Typography textAlign="center">{item.title}</Typography>
              </Stack>
            ))}
          </Stack>
          <Stack direction="row" justifyContent="center" sx={{ mt: 5, mb: 3 }}>
            <Button
              variant="outlined"
              sx={{ width: 'fit-content' }}
              onClick={() => setOpenBenefit(!openBenefit)}
            >
              <Image
                src="/assets/svg/star.svg"
                alt="star"
                width={24}
                height={24}
                style={{ margin: 10 }}
              />
              <Typography variant="h6">Đặc quyền dành riêng cho tài khoản có phí!</Typography>
              <Image
                src="/assets/svg/star.svg"
                alt="star"
                width={24}
                height={24}
                style={{ margin: 10 }}
              />
            </Button>
          </Stack>
          {openBenefit && renderBenefit()}
          <Box
            sx={{
              position: 'absolute',
              bottom: -20,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Image src="/assets/svg/medal.svg" alt="medal" width={50} height={50} />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
