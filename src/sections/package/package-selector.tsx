import type { PackageType } from './type';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

export default function PackageSelector({
  packageType,
  onChange,
}: {
  packageType: PackageType;
  onChange: (t: PackageType) => void;
}) {
  const handleChange = (value: PackageType) => {
    onChange(value);
  };
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h5" fontFamily="400" gutterBottom>
        <Chip label="02" color="success" sx={{ mr: 2, minWidth: 40 }} />
        Lựa chọn gói học
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <ButtonBase
          onClick={() => handleChange('combo')}
          sx={{
            flex: 1,
            maxWidth: { md: 500 },
            borderRadius: 2,
            overflow: 'hidden',
            border: '2px solid',
            borderColor: packageType === 'combo' ? 'success.main' : 'grey.300',
            bgcolor: packageType === 'combo' ? 'rgba(76, 175, 80, 0.14)' : 'background.paper',
            backdropFilter: packageType === 'combo' ? 'blur(6px)' : 'none',
            '&:hover': {
              bgcolor: packageType === 'combo' ? 'rgba(76, 175, 80, 0.14)' : 'action.hover',
              boxShadow: 8,
              transform: 'translateY(-2px)',
            },
            boxShadow: packageType === 'combo' ? 4 : 1,
            transition: 'all 0.3s ease',
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', p: 4, textAlign: 'left' }}>
            <Badge
              color="error"
              badgeContent={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontWeight: 700,
                    fontSize: '0.8rem',
                  }}
                >
                  <Image src="/assets/svg/saving.svg" alt="save" width={18} height={18} />
                  40%
                </Box>
              }
              sx={{
                position: 'absolute',
                top: 13,
                right: 30,
                '& .MuiBadge-badge': {
                  width: 70,
                  height: 'auto',
                  minWidth: 'auto',
                  padding: '6px 10px',
                  borderRadius: '16px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                  whiteSpace: 'nowrap', // không xuống dòng
                  bgcolor: '#f44336',
                  color: 'white',
                  boxShadow: '0 2px 8px rgba(244,67,54,0.3)',
                },
              }}
            />

            <Stack direction="row" alignItems="center" spacing={3}>
              <Image
                src="/assets/icons/vio/iconPackageCup.png"
                alt="Combo"
                width={60}
                height={60}
              />
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={800}
                  color={packageType === 'combo' ? 'success.main' : 'text.primary'}
                >
                  Mua theo combo
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  Tiết kiệm lên tới 40% học không giới hạn!
                </Typography>
              </Box>
            </Stack>
          </Box>
        </ButtonBase>

        <ButtonBase
          onClick={() => handleChange('single')}
          sx={{
            flex: 1,
            maxWidth: { md: 500 },
            borderRadius: 2,
            overflow: 'hidden',
            border: '2px solid',
            borderColor: packageType === 'single' ? 'primary.main' : 'grey.300',
            bgcolor: packageType === 'single' ? 'rgba(76, 175, 80, 0.14)' : 'background.paper',
            backdropFilter: packageType === 'single' ? 'blur(6px)' : 'none',
            '&:hover': {
              bgcolor: packageType === 'single' ? 'rgba(76, 175, 80, 0.14)' : 'action.hover',
              boxShadow: 8,
              transform: 'translateY(-2px)',
            },
            boxShadow: packageType === 'single' ? 4 : 1,
            transition: 'all 0.3s ease',
          }}
        >
          <Box sx={{ p: 4, textAlign: 'left' }}>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Image src="/assets/icons/vio/iconItemBuy.png" alt="Mua lẻ" width={60} height={60} />
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={800}
                  color={packageType === 'single' ? 'primary.main' : 'text.primary'}
                >
                  Mua lẻ từng môn học
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  Chọn riêng từng môn phù hợp với nhu cầu cụ thể
                </Typography>
              </Box>
            </Stack>
          </Box>
        </ButtonBase>
      </Stack>
    </Box>
  );
}
