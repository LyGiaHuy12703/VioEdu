import type { Breakpoint } from '@mui/material/styles';

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
        maxWidth="lg"
        sx={{
          px: { xs: 3, sm: 4, md: 6, lg: 10, xl: 20 },
        }}
      >
        <Box
          sx={{
            gap: 5,
            display: 'flex',
            justifyContent: 'space-between',

            flexDirection: { xs: 'row', [layoutQuery]: 'row' },
            alignItems: 'center',
            my: 1,
          }}
        >
          <img src="/logo/logoWhite.png" alt="VioEdu" width={80} />
          <Box
            sx={{
              display: { xs: 'none', [layoutQuery]: 'flex' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            {headerTitle.map((list) => (
              <Box
                key={list.title}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', [layoutQuery]: 'row' },
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
