import type { Breakpoint } from '@mui/material/styles';

import Link from 'next/link';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { headerTitle } from '../nav-config-main';
import { SignInButton } from '../components/sign-in-button';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const HeaderRoot = styled('header')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.vars.palette.background.default,
}));

export type HeaderProps = React.ComponentProps<typeof HeaderRoot>;

export function Header({
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
        <Box
          sx={{
            gap: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minWidth: 0,
            my: 1,
          }}
        >
          <Box sx={{ flexShrink: 0 }}>
            <Link href="/" style={{ display: 'block', lineHeight: 0 }}>
              <Image
                src="/logo/logoWhite.png"
                alt="VioEdu - Trang chủ"
                width={80}
                height={100}
                style={{ width: 80, height: 'auto' }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', [layoutQuery]: 'flex' },
              gap: { md: 2, lg: 3, xl: 4 },
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'center',
              minWidth: 0,
              mx: { md: 2, lg: 3, xl: 4 },
              overflow: 'hidden',
            }}
          >
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
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1, sm: 1.5 },
              ml: { xs: 'auto', md: 0 },
            }}
          >
            <SignInButton />

            <Button
              variant="outlined"
              rel="noopener noreferrer"
              target="_blank"
              href={paths.minimalStore}
              sx={{
                display: { xs: 'none', [layoutQuery]: 'inline-flex' },
              }}
            >
              Đăng ký
            </Button>
          </Box>
        </Box>
      </Container>
      <Divider />
    </HeaderRoot>
  );
}
