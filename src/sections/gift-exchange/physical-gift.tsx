import Image from 'next/image';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { GiftData } from './data';
import GiftComingSoon from './gift-comming-soon';
import LoginForGiveGift from './login-for-give-gift';

export function PhysicalGift() {
  return (
    <Box>
      <LoginForGiveGift />
      <GiftComingSoon />
      {GiftData.map((item) => (
        <Box key={item.name}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 5 }}>
            <Divider sx={{ flex: 1 }} />
            <Chip
              size="medium"
              icon={
                <Image
                  src="/assets/icons/vio/giftCategory.png"
                  alt="gift-category"
                  width={24}
                  height={24}
                />
              }
              label={item.name}
            />
            <Divider sx={{ flex: 1 }} />
          </Stack>
          <Stack direction="row" justifyContent="space-around" alignItems="center" mt={5}>
            {item.gift.map((giftItem) => (
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                key={giftItem.name}
              >
                <Typography variant="h5"> {giftItem.name} </Typography>
                <Tooltip
                  title="Bạn cần đăng nhập để thực hiện đổi quà"
                  followCursor
                  placement="top-start"
                >
                  <Image
                    src={giftItem.img}
                    alt={giftItem.name}
                    width={130}
                    height={130}
                    style={{ marginTop: 2 }}
                  />
                </Tooltip>
                <Stack direction="row" mt={2}>
                  <Image src="/assets/icons/vio/diamond.png" alt="diamond" width={30} height={30} />
                  <Typography variant="h5" fontFamily="500" color="info" ml={1}>
                    {giftItem.price}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
