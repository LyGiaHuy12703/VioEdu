import Image from 'next/image';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SignInButton } from 'src/layouts/components/sign-in-button';

export default function LoginForGiveGift() {
  return (
    <Box sx={{ width: '100%', border: '1px dashed #c5cee0', borderRadius: 5 }}>
      <Stack direction="column" justifyContent="center" alignItems="center" sx={{ p: 5 }}>
        <Image
          src="/assets/icons/vio/giftCategory.png"
          alt="gift-category"
          width={75}
          height={75}
        />
        <Typography variant="h5">Bạn cần đăng nhập để có thể đổi quà</Typography>
        <Typography variant="body1">Nhanh tay rinh quà về cho mình nào</Typography>
        <SignInButton
          sx={{
            mt: 2,
            bgcolor: '#65b446',
            color: 'white',
            '&:hover': {
              bgcolor: '#76be5a',
            },
          }}
        />
      </Stack>
    </Box>
  );
}
