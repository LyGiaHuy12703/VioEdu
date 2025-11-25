import type { SelectChangeEvent } from '@mui/material/Select';
import type { Variants, TargetAndTransition } from 'framer-motion';
import type { RankingItem, HomeHonorProps } from 'src/layouts/main/nav/types';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { GRADE, ROUND_EXAM } from 'src/layouts/nav-config-main';

import { varFade, MotionViewport } from 'src/components/animate';

import AddressSelect from './components/address-select';

const SecondaryPodium = ({ rank, item }: { rank: 2 | 3; item: RankingItem }) => (
  <m.div style={{ textAlign: 'center' }} whileHover={{ y: -10 }}>
    <Box sx={{ position: 'relative' }}>
      <Box
        component="img"
        src="/assets/icons/vio/island.png"
        alt={`Đảo ${rank}`}
        sx={{
          width: { xs: 120, md: 180 },
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: { xs: '3rem', md: '5rem' },
          fontWeight: 900,
          color: 'white',
          textShadow: '0 4px 10px rgba(0,0,0,0.5)',
        }}
      >
        {rank}
      </Typography>
    </Box>

    <Box
      component="img"
      src={item.avatar || (rank === 3 ? '/assets/medal-bronze.svg' : '')}
      alt={item.name}
      sx={{
        width: { xs: rank === 3 ? 50 : 50, md: rank === 3 ? 70 : 100 },
        height: { xs: rank === 3 ? 50 : 50, md: rank === 3 ? 70 : 100 },
        border: '6px solid white',
        borderRadius: '50%',
        mt: rank === 3 ? -40 : -45,
        boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
      }}
    />

    <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 700 }}>
      {item.name}
    </Typography>
    <Typography variant="body2" sx={{ color: '#e3f2fd' }}>
      {item.school}
    </Typography>
  </m.div>
);

export function HomeHonor({
  title = 'Vinh danh Đấu trường khu vực VioEdu',
  year = '2025 - 2026',
  currentTopTitle = 'Top 10 - Khối 1',
  top10 = [],
}: HomeHonorProps) {
  const ranked = top10
    .map((item, idx) => ({ ...item, rank: item.rank || idx + 1 }))
    .sort((a, b) => (a.rank || 0) - (b.rank || 0));

  const top1 = ranked[0];
  const top2 = ranked[1];
  const top3 = ranked[2];
  const others = ranked.slice(3);
  const [province, setProvince] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [round, setRound] = useState<string>('all');

  const baseFade = varFade('inUp');

  const blockVariants: Variants = {
    initial: {
      ...(baseFade.initial as TargetAndTransition),
      opacity: 0,
      transition: { duration: 0 },
    },
    animate: {
      ...(baseFade.animate as TargetAndTransition),
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        minHeight: { xs: 600, md: 800 },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <MotionViewport
          viewport={{ once: false, amount: 0.2, margin: '-50px' }}
          disableAnimate={false}
        >
          <m.div variants={blockVariants}>
            {/* --- Title --- */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: 3,
                  textShadow: '0 4px 10px rgba(0,0,0,0.2)',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  opacity: 0.9,
                  mb: 2,
                }}
              >
                {year}
              </Typography>
            </Box>
            {/* ====================== FILTERS - ĐẸP & HOÀN CHỈNH ====================== */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 3 }}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 5, flexWrap: 'wrap', gap: 2 }}
            >
              {/* Tỉnh thành */}
              <FormControl sx={{ minWidth: { xs: 280, sm: 180 } }}>
                <AddressSelect
                  province={province}
                  setProvince={setProvince}
                  district={district}
                  setDistrict={setDistrict}
                />
              </FormControl>

              <FormControl sx={{ minWidth: { xs: 280, sm: 140 } }}>
                <InputLabel id="grade-label" sx={{ color: 'white' }}>
                  Khối lớp
                </InputLabel>
                <Select
                  labelId="grade-label"
                  value={grade}
                  label="Khối lớp"
                  onChange={(e: SelectChangeEvent) => setGrade(e.target.value)}
                  sx={{
                    minWidth: 160,
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: 2,
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4caf50',
                    },
                    '& .MuiSvgIcon-root': { color: 'white' },
                    '& .MuiSelect-select': {
                      py: 1.5,
                    },
                  }}
                >
                  {GRADE.map((option) => (
                    <MenuItem
                      key={option.value || 'all'}
                      value={option.value}
                      sx={{
                        fontWeight: option.value === 0 ? 600 : 400,
                        color: option.value === 0 ? 'primary.main' : 'inherit',
                      }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Vòng thi */}
              <FormControl sx={{ minWidth: { xs: 280, sm: 180 } }}>
                <InputLabel id="round-label" sx={{ color: 'white' }}>
                  Vòng thi
                </InputLabel>
                <Select
                  labelId="round-label"
                  value={round}
                  label="Vòng thi"
                  onChange={(e: SelectChangeEvent) => setRound(e.target.value)}
                  sx={{
                    minWidth: 200,
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: 2,
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#4caf50' },
                    '& .MuiSvgIcon-root': { color: 'white' },
                    '& .MuiSelect-select': { py: 1.5 },
                  }}
                >
                  {ROUND_EXAM.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      sx={{
                        fontWeight: option.value === 'all' ? 600 : 500,
                        bgcolor:
                          round === option.value && option.value === 'all'
                            ? 'success.main'
                            : 'inherit',
                        color:
                          round === option.value && option.value === 'all' ? 'white' : 'inherit',
                      }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
            {/* --- Tag --- */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 4,
              }}
            >
              <Box
                sx={{
                  bgcolor: '#b5ffbc',
                  color: '#1b5e20',
                  px: 3,
                  py: 1,
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', md: '1.4rem' },
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                }}
              >
                {currentTopTitle}
              </Box>
            </Box>

            {/* --- Podium --- */}
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 4, md: 6 }}
              alignItems="flex-end"
              justifyContent="center"
              sx={{ mt: { xs: 14, md: 30 } }}
            >
              {/* Top 2 */}
              {top2 && <SecondaryPodium rank={2} item={top2} />}

              {/* Top 1 */}
              {top1 && (
                <m.div style={{ textAlign: 'center' }} whileHover={{ y: -20 }}>
                  <Box sx={{ position: 'relative', display: 'inline-block' }}>
                    {/* Avatar Top 1 - Có animation nảy nhẹ nội bộ (giữ lại cho đẹp) */}
                    <m.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: 'backOut' }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Box
                        component="img"
                        src={top1.avatar || '/assets/avatars/default-boy.svg'}
                        alt={top1.name}
                        sx={{
                          width: { xs: 130, md: 190 },
                          height: { xs: 130, md: 190 },
                          mt: -30,
                          borderRadius: '50%',
                          border: '10px solid #ffd700',
                          boxShadow:
                            '0 20px 50px rgba(255,215,0,0.7), 0 0 30px rgba(255,215,0,0.4)',
                          position: 'relative',
                          zIndex: 10,
                          mb: -10,
                        }}
                      />
                    </m.div>

                    {/* Crown - Loop Animation */}
                    <m.img
                      src="/assets/icons/vio/crown.png"
                      alt="Vương miện"
                      animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: 'easeInOut',
                      }}
                      style={{
                        position: 'absolute',
                        top: -250,
                        left: 110,
                        transform: 'translateX(-50%)',
                        width: 130,
                        zIndex: 20,
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Island & Rank Number */}
                    <Box
                      component="img"
                      src="/assets/icons/vio/island.png"
                      alt="Đảo hạng 1"
                      sx={{
                        width: { xs: 240, md: 340 },
                        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                        zIndex: 1,
                      }}
                    />
                    <Typography
                      sx={{
                        position: 'absolute',
                        bottom: 30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: { xs: '5rem', md: '7.5rem' },
                        fontWeight: 900,
                        color: 'white',
                        textShadow: '0 6px 20px rgba(0,0,0,0.7)',
                        zIndex: 5,
                      }}
                    >
                      1
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontWeight: 900,
                        textShadow: '0 4px 15px rgba(0,0,0,0.5)',
                      }}
                    >
                      {top1.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: '#fff59d', fontWeight: 700, opacity: 0.95 }}
                    >
                      {top1.school}
                    </Typography>
                  </Box>
                </m.div>
              )}

              {/* Top 3 */}
              {top3 && <SecondaryPodium rank={3} item={top3} />}
            </Stack>

            {/* --- List Others --- */}
            {others.length > 0 && (
              <Box sx={{ mt: 8 }}>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  justifyContent="end"
                  gap={1}
                  sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}
                >
                  {others.map((item, index) => (
                    <Stack
                      key={index}
                      sx={{
                        bgcolor: 'white',
                        p: 2,
                        borderRadius: 2,
                        width: 500,
                        display: 'flex',
                        flexFlow: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 'bold', minWidth: 20 }}>
                        {item.rank}
                      </Box>
                      <Box
                        component="img"
                        src={item.avatar || '/assets/avatars/default-boy.svg'}
                        alt={item.name}
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          ml: 2.5,
                          mr: 3.5,
                          objectFit: 'cover',
                        }}
                      />
                      <Stack direction="column" spacing={0.5} sx={{ display: 'flex', flex: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                          {item.name}
                        </Typography>
                        <Tooltip title={item.school}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              opacity: 0.9,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              maxWidth: { xs: 180, md: 260 },
                            }}
                          >
                            {item.school}
                          </Typography>
                        </Tooltip>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            )}
          </m.div>
        </MotionViewport>
      </Container>
    </Box>
  );
}
