'use client';

import Image from 'next/image';

import { Box, Grid, Stack, Button, Avatar, Typography } from '@mui/material';

import { PackageCourse } from './data';

type PackageComboProps = {
  selectedComboIndex: number;
  onSelectCombo: (index: number) => void;
};

export default function PackageCombo({ selectedComboIndex, onSelectCombo }: PackageComboProps) {
  const combo = PackageCourse.combos[selectedComboIndex];

  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h5"
        fontWeight={500}
        color="text.primary"
        textAlign={{ xs: 'center', md: 'left' }}
        gutterBottom
      >
        Chọn combo bạn muốn mua
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="flex-start" flexWrap="wrap" mb={6}>
        {PackageCourse.combos.map((c, idx) => (
          <Button
            key={c.name}
            variant={selectedComboIndex === idx ? 'contained' : 'outlined'}
            color="success"
            onClick={() => onSelectCombo(idx)}
            sx={{
              minWidth: 120,
              py: 1,
              fontSize: '1.1rem',
              fontWeight: 500,
              borderRadius: 6,
              textTransform: 'none',
              border: '3px solid',
              borderColor: selectedComboIndex === idx ? '#4caf50' : 'transparent',
              bgcolor: selectedComboIndex === idx ? 'rgba(76, 175, 80, 0.18)' : 'background.paper',
              backdropFilter: selectedComboIndex === idx ? 'blur(12px)' : 'none',
              color: selectedComboIndex === idx ? '#1b5e20' : 'text.primary',
              boxShadow: selectedComboIndex === idx ? 10 : 3,
              transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
              '&:hover': {
                bgcolor: '#4caf50',
                color: 'white',
                boxShadow: 5,
                transform: 'translateY(-3px)',
                borderColor: '#4caf50',
              },
            }}
          >
            {c.name.trim()}
          </Button>
        ))}
      </Stack>

      <Grid container spacing={5}>
        {combo.plans.map((plan) => {
          const saved = plan.originalPrice - plan.price;

          return (
            <Grid key={plan.durationMonths} size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  minHeight: 600,
                  borderRadius: 2,
                  border: '3px solid #e0e0e0',
                  bgcolor: '#fff',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    bgcolor: '#fffefe',
                    p: 3,
                    borderBottom: '1px dashed #e0e0e0',
                  }}
                >
                  <Stack direction="row" alignItems="center">
                    <Avatar
                      variant="rounded"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 50,
                        border: '3px solid #4caf50',
                        bgcolor: 'transparent',
                      }}
                    >
                      <Image
                        src="/assets/icons/vio/icon.png"
                        alt="Thời gian"
                        width={40}
                        height={40}
                        style={{ margin: 10 }}
                      />
                    </Avatar>
                    <Stack
                      direction="column"
                      alignItems="flex-start"
                      justifyContent="center"
                      sx={{ ml: 2 }}
                    >
                      <Typography variant="h4" color="grey">
                        GÓI HỌC
                      </Typography>
                      <Typography variant="h6" fontWeight={700}>
                        {plan.durationMonths} tháng
                      </Typography>
                    </Stack>
                  </Stack>

                  <Box
                    sx={{
                      position: 'absolute',
                      top: -6,
                      right: 26,
                      width: 80,
                      height: 100,
                      bgcolor: '#1976d2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10,
                      overflow: 'hidden',
                      borderBottomRightRadius: 50,
                      borderBottomLeftRadius: 50,
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        color: 'white',
                      }}
                    >
                      <Image
                        src="/assets/icons/vio/diamond.png"
                        alt="Kim cương"
                        width={48}
                        height={48}
                      />
                      <Typography
                        variant="h5"
                        fontWeight={900}
                        sx={{
                          mt: 0.5,
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          fontSize: '1.4rem',
                        }}
                      >
                        {plan.diamond || 0}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>

                <Box p={4}>
                  <Typography variant="h6" mb={2}>
                    Combo này bao gồm {combo.subjects.length} môn với thời gian học{' '}
                    {plan.durationMonths} tháng:
                  </Typography>

                  <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                    {combo.subjects.map((s) => (
                      <li key={s}>
                        <Typography variant="body2" fontWeight={600} color="text.primary">
                          {s}
                        </Typography>
                      </li>
                    ))}
                  </Box>

                  <Typography variant="h6" mb={1}>
                    Ngoài ra:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                    {plan.gifts.map((g) => (
                      <li key={g}>
                        <Typography variant="body1" fontWeight={600}>
                          + {g}
                        </Typography>
                      </li>
                    ))}
                  </Box>

                  {saved > 0 && (
                    <Typography variant="h5" color="#ff5722" fontWeight={600} mb={1}>
                      Giảm {saved.toLocaleString()} VND
                    </Typography>
                  )}

                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    mb={3}
                  >
                    <Typography variant="h5" fontWeight={900} color="primary.main">
                      {plan.price.toLocaleString()} VND
                    </Typography>
                    {saved > 0 && (
                      <Typography
                        variant="h6"
                        sx={{ textDecoration: 'line-through', color: 'text.disabled' }}
                      >
                        {plan.originalPrice.toLocaleString()} VND
                      </Typography>
                    )}
                  </Stack>

                  <Button
                    variant="contained"
                    color="success"
                    size="medium"
                    sx={{
                      px: 3,
                      fontSize: '1.25rem',
                      textTransform: 'none',
                      boxShadow: '0 8px 20px rgba(76, 175, 80, 0.4)',
                      '&:hover': {
                        boxShadow: '0 12px 28px rgba(76, 175, 80, 0.5)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Lựa chọn gói học
                  </Button>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
