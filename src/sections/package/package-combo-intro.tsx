'use client';

import Image from 'next/image';

import { Box, Stack, Button, Typography } from '@mui/material';

import { PackageCourse } from './data';

export default function PackageComboIntro() {
  const combos = PackageCourse.combos;
  return (
    <Box sx={{ mt: 1 }}>
      <Stack direction="row" alignItems="center" justifyContent="flex-start" mb={5}>
        <Image src="/assets/svg/gift.svg" alt="Ưu đãi" width={56} height={56} />
        <Typography variant="h4" fontWeight={900} ml={2} color="#d84315">
          Combo giá siêu hấp dẫn
        </Typography>
      </Stack>

      <Stack spacing={5}>
        {combos.map((combo) =>
          combo.plans.map((plan) => {
            const saved = plan.originalPrice - plan.price;

            return (
              <Box
                key={`${combo.name}-${plan.durationMonths}`}
                sx={{
                  borderRadius: 4,
                  border: '2px solid #e0e0e0',
                  overflow: 'hidden',
                  bgcolor: 'background.paper',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                    borderColor: '#81c784',
                  },
                }}
              >
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  alignItems="center"
                  spacing={{ xs: 3, md: 4 }}
                  sx={{ p: 4 }}
                >
                  {/* Cột trái: Tên combo + thời gian */}
                  <Box sx={{ minWidth: { md: 220 }, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                      Combo {plan.durationMonths} tháng
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight={900}
                      color="primary.main"
                      sx={{ textTransform: 'uppercase' }}
                    >
                      {combo.name.replace('combo ', '')}
                    </Typography>
                  </Box>

                  {/* Cột giữa: Nội dung */}
                  <Box sx={{ flex: 1, maxWidth: 520 }}>
                    <Typography variant="body1" fontWeight={500} gutterBottom>
                      Combo này bao gồm {combo.subjects.length} môn với thời gian học{' '}
                      {plan.durationMonths} tháng:
                    </Typography>

                    <Box component="ul" sx={{ my: 1.5, pl: 3 }}>
                      {combo.subjects.map((s) => (
                        <li key={s}>
                          <Typography variant="body1">{s}</Typography>
                        </li>
                      ))}
                    </Box>

                    <Typography variant="body1" fontWeight={500} mt={2}>
                      Ngoài ra:
                    </Typography>

                    <Box component="ul" sx={{ my: 1.5, pl: 3 }}>
                      {plan.gifts.map((g) => (
                        <li key={g}>
                          <Typography variant="body1" color="text.secondary">
                            + {g}
                          </Typography>
                        </li>
                      ))}
                      {plan.diamond && (
                        <li>
                          <Typography variant="body1" color="text.secondary" fontWeight={600}>
                            + Tặng {plan.diamond} kim cương
                          </Typography>
                        </li>
                      )}
                    </Box>
                  </Box>

                  {/* Cột phải: Giá + Nút */}
                  <Stack alignItems="flex-end" spacing={1} sx={{ minWidth: { md: 220 } }}>
                    <Typography variant="h6" color="#ff5722" fontWeight={800}>
                      Giảm {saved.toLocaleString()} VND
                    </Typography>

                    <Typography variant="h4" fontWeight={900} color="primary.main">
                      {plan.price.toLocaleString()} VND
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ textDecoration: 'line-through', color: 'text.disabled' }}
                    >
                      {plan.originalPrice.toLocaleString()} VND
                    </Typography>

                    <Button
                      variant="contained"
                      color="success"
                      size="large"
                      sx={{
                        mt: 3,
                        minWidth: 120,
                        py: 1.8,
                        fontWeight: 800,
                      }}
                    >
                      Mua ngay
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            );
          })
        )}
      </Stack>
    </Box>
  );
}
