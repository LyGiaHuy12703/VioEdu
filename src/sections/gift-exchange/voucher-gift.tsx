import Image from 'next/image';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import LoginForGiveGift from './login-for-give-gift';
import { VoucherNotes, GiftVoucherData } from './data';

export default function VoucherGift() {
  return (
    <Box>
      <LoginForGiveGift />
      {GiftVoucherData.map((item) => (
        <Box>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 5 }} key={item.name}>
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
                <Box>
                  <Chip label={`Còn lại: ${giftItem.quantity}`} sx={{ mt: 1 }} />
                </Box>
                <Stack direction="row" my={2}>
                  <Image src="/assets/icons/vio/diamond.png" alt="diamond" width={30} height={30} />
                  <Typography variant="h5" fontFamily="500" color="info" ml={1}>
                    {giftItem.price}
                  </Typography>
                </Stack>
                <Tooltip
                  title="Bạn cần đăng nhập để thực hiện đổi quà"
                  followCursor
                  placement="top-start"
                >
                  <Box component="span" tabIndex={-1}>
                    <Button variant="contained" color="success" size="large" disabled fullWidth>
                      Đổi quà
                    </Button>
                  </Box>
                </Tooltip>
              </Stack>
            ))}
          </Stack>
        </Box>
      ))}
      <Stack mt={10} mb={5}>
        <Typography variant="h5" fontWeight="500" color="grey.500" textAlign="center">
          Like/Theo dõi Facebook VioEdu để có nhiều cơ hội nhận quà hơn!
        </Typography>
      </Stack>
      <Box sx={{ mb: 6, px: { xs: 2, sm: 4 } }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: '#d32f2f',
            fontWeight: 'bold',
            mb: 2,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Lưu ý
        </Typography>

        <Box component="ul" sx={{ m: 0, pl: 3, '& li': { mb: 1.8, lineHeight: 1.6 } }}>
          {VoucherNotes.map((note, index) => (
            <Typography
              key={index}
              component="li"
              variant="body1"
              color="error"
              dangerouslySetInnerHTML={{ __html: note }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
