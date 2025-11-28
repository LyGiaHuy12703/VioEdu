'use client';

import type { Breakpoint } from '@mui/material/styles';
import type { FooterProps } from './footer';
import type { NavMainProps } from './nav/types';
import type { MainSectionProps, HeaderSectionProps, LayoutSectionProps } from '../core';

import { useTheme } from '@mui/material/styles';

import { usePathname } from 'src/routes/hooks';

import HomeDownloadMobile from 'src/sections/home/Home-download-mobile';

import { Header } from './header';
import { HomeFooter } from './footer';
import { VioHeader } from './vioHeader';
import { NavDesktop } from './nav/desktop';
import { navData as mainNavData } from '../nav-config-main';
import { MainSection, LayoutSection, HeaderSection } from '../core';

// ----------------------------------------------------------------------
type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>;

export type MainLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
  slotProps?: {
    header?: HeaderSectionProps;
    nav?: { data?: NavMainProps['data'] };
    main?: MainSectionProps;
    footer?: FooterProps;
  };
};
export function MainLayout({
  sx,
  cssVars,
  children,
  slotProps,
  layoutQuery = 'md',
}: MainLayoutProps) {
  const pathname = usePathname();
  const theme = useTheme();

  const isHomePage = pathname === '/' || pathname === '/home';
  const navData = slotProps?.nav?.data ?? mainNavData;

  return (
    <LayoutSection
      sx={{
        minHeight: '100vh',
        ...sx,
      }}
      cssVars={cssVars}
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          disableElevation={isHomePage}
          disableOffset={isHomePage}
          // position={isHomePage ? 'sticky' : 'relative'}
          position="relative"
          sx={{
            ...(!isHomePage && {
              bgcolor: '#55C57A !important', // ép nền xanh cho toàn bộ header ở trang con
            }),
            ...slotProps?.header?.sx,
          }}
          slots={{
            topArea: isHomePage ? <Header /> : <VioHeader />,

            centerArea: (
              <NavDesktop
                data={navData}
                sx={{
                  // Layout desktop
                  [theme.breakpoints.up(layoutQuery)]: {
                    display: 'flex',
                    justifyContent: 'center',
                    flexGrow: 1,
                  },

                  // TRANG CHỦ: chữ đen, nền trong suốt hoặc trắng (tùy Header)
                  ...(isHomePage && {
                    color: 'text.primary',
                    '& a, & .MuiTypography-root': {
                      color: 'inherit',
                    },
                    '& .active, & a[aria-current="page"]': {
                      fontWeight: 700,
                    },
                  }),

                  ...(!isHomePage && {
                    color: 'white !important',
                    py: 2,

                    '& a, & .MuiTypography-root': {
                      color: 'inherit !important',
                    },

                    '& .active, & a[aria-current="page"]': {
                      color: 'white !important',
                      fontWeight: 700,
                    },

                    // Nút Home nổi bật
                    '& a[href="/"], & a[href="/home"]': {
                      backgroundColor: 'white !important',
                      color: '#55C57A !important',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      borderRadius: 2,
                      px: 3,
                      py: 1.2,
                      boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
                      transition: 'all 0.35s ease',
                      '&:hover': {
                        backgroundColor: '#f8f8f8 !important',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                      },
                    },
                  }),

                  '& a:hover': {
                    opacity: 0.8,
                  },
                }}
              />
            ),
          }}
          {...slotProps?.header}
        />
      }
      footerSection={
        isHomePage ? <HomeFooter /> : null // trang con → không có footer
      }
    >
      <MainSection {...slotProps?.main}>{children}</MainSection>

      {isHomePage && <HomeDownloadMobile />}
    </LayoutSection>
  );
}
