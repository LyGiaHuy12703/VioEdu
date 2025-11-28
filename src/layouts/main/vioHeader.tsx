import type { Breakpoint } from '@mui/material/styles';

import Link from 'next/link';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { headerTitle } from '../nav-config-main';
import { SignInButton } from '../components/sign-in-button';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const HeaderRoot = styled('header')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.vars.palette.background.default,
}));

export type HeaderProps = React.ComponentProps<typeof HeaderRoot>;

export function VioHeader({
  sx,
  layoutQuery = 'md',
  ...other
}: HeaderProps & { layoutQuery?: Breakpoint }) {
  return (
    <HeaderRoot sx={sx} {...other}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          px: { xs: 3, sm: 4, md: 6, lg: 10, xl: 20 },
        }}
      >
        <Stack direction="row" justifyContent="flex-start" gap={5} alignItems="center" my={1}>
          {headerTitle.map((list) => (
            <Box
              key={list.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', [layoutQuery]: 'row' },
                minWidth: 0,
              }}
            >
              <Image src={list.icon} alt={list.title} width={24} height={24} />

              <Typography component="div" variant="overline" sx={{ mx: 1 }}>
                {list.title}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" my={2}>
            <Link href="/" style={{ display: 'block', lineHeight: 0 }}>
              <Image
                src="/logo/logoWhite.png"
                alt="VioEdu - Trang chủ"
                width={80}
                height={100}
                style={{ width: 120, height: 'auto' }}
              />
            </Link>
            <TextField
              fullWidth
              size="small"
              placeholder="Tìm kiếm..."
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Image src="/assets/svg/search.svg" alt="search" width={24} height={24} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                ml: 5,
                maxWidth: { xs: '100%', md: 400 },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',

                  '&:hover': {
                    backgroundColor: '#fff',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  },
                  '&.Mui-focused': {
                    backgroundColor: '#fff',
                    boxShadow: '0 0 0 3px rgba(85, 197, 122, 0.25)',
                  },
                },
              }}
            />
          </Stack>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 1.5 },
              ml: { xs: 'auto', md: 0 },
            }}
          >
            <SignInButton size="large" />

            <Button
              variant="contained"
              rel="noopener noreferrer"
              target="_blank"
              color="success"
              size="large"
              href="#"
              sx={{
                display: { xs: 'none', [layoutQuery]: 'inline-flex' },
              }}
            >
              Đăng ký
            </Button>
          </Box>
        </Stack>
      </Container>
      <Divider />
    </HeaderRoot>
  );
}
