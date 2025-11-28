import Image from 'next/image';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function GiftComingSoon() {
  return (
    <Box sx={{ width: '100%', border: '1px dashed #c5cee0', borderRadius: 5, mt: 3 }}>
      <Stack direction="column" justifyContent="center" alignItems="center" sx={{ p: 5 }}>
        <Image
          src="/assets/icons/vio/giftCategory.png"
          alt="gift-category"
          width={75}
          height={75}
        />
        <Typography variant="h5">
          Quà đang được sản xuất để chuẩn bị ra lò. Kiên trì chút nha!
        </Typography>
        <Typography variant="body1" textAlign="center">
          Hãy chuẩn bị kim cương đầy hũ để rinh quà <br /> Like/Theo dõi Facebook VioEdu để có nhiều
          cơ hội nhận quà hơn!
        </Typography>
      </Stack>
    </Box>
  );
}
