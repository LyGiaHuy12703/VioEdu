'use client';

import Image from 'next/image';

import { Box, Grid, Stack, Button, Avatar, Typography } from '@mui/material';

import { PackageCourse } from './data';

type PackageSingleProps = {
  selectedSubjectIndex: number | null;
  onSelectSubject: (index: number) => void;
};

export default function PackageSingle({
  selectedSubjectIndex,
  onSelectSubject,
}: PackageSingleProps) {
  const selectedSubject =
    selectedSubjectIndex !== null ? PackageCourse.subject[selectedSubjectIndex] : null;

  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h5"
        fontWeight={500}
        color="text.primary"
        textAlign={{ xs: 'center', md: 'left' }}
        gutterBottom
      >
        Chọn môn bạn muốn mua
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="flex-start" flexWrap="wrap" mb={6}>
        {PackageCourse.subject.map((item, idx) => (
          <Button
            key={item.subject}
            variant={selectedSubjectIndex === idx ? 'contained' : 'outlined'}
            color="success"
            onClick={() => onSelectSubject(idx)}
            sx={{
              minWidth: 120,
              py: 1,
              fontSize: '1.1rem',
              fontWeight: 500,
              borderRadius: 6,
              textTransform: 'none',
              border: '3px solid',
              borderColor: selectedSubjectIndex === idx ? '#4caf50' : 'transparent',
              bgcolor:
                selectedSubjectIndex === idx ? 'rgba(76, 175, 80, 0.18)' : 'background.paper',
              backdropFilter: selectedSubjectIndex === idx ? 'blur(12px)' : 'none',
              color: selectedSubjectIndex === idx ? '#1b5e20' : 'text.primary',
              boxShadow: selectedSubjectIndex === idx ? 10 : 3,
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
            {item.subject.replace('Môn ', '')}
          </Button>
        ))}
      </Stack>

      {selectedSubject && (
        <Grid container spacing={5} justifyContent="center">
          {selectedSubject.plans.map((plan) => {
            const saved = plan.originalPrice - plan.price;

            return (
              <Grid key={plan.durationMonths} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: 'relative',
                    minHeight: 550,
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
                        />
                      </Avatar>
                      <Stack sx={{ ml: 2 }}>
                        <Typography variant="h4" color="grey.600">
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
                      <Box sx={{ textAlign: 'center', color: 'white' }}>
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
                    {plan.sub && (
                      <Typography variant="h6" mb={3} fontStyle="italic" fontFamily="500">
                        {plan.sub}
                      </Typography>
                    )}

                    <Typography variant="h6" mb={1}>
                      Bạn sẽ nhận được:
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

                    <Stack direction="row" alignItems="center" spacing={2} mb={4}>
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
      )}
    </Box>
  );
}
