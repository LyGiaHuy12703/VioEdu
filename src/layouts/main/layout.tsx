'use client';

import type { Breakpoint } from '@mui/material/styles';
import type { FooterProps } from './footer';
import type { NavMainProps } from './nav/types';
import type { MainSectionProps, HeaderSectionProps, LayoutSectionProps } from '../core';

import { useBoolean } from 'minimal-shared/hooks';

import { usePathname } from 'src/routes/hooks';

import HomeDownloadMobile from 'src/sections/home/Home-download-mobile';

import { Header } from './header';
import { NavDesktop } from './nav/desktop';
import { Footer, HomeFooter } from './footer';
import { navData as mainNavData } from '../nav-config-main';
import { MainSection, LayoutSection, HeaderSection } from '../core';

// ----------------------------------------------------------------------

type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>;

export type MainLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
  slotProps?: {
    header?: HeaderSectionProps;
    nav?: {
      data?: NavMainProps['data'];
    };
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

  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  const isHomePage = pathname === '/';

  const navData = slotProps?.nav?.data ?? mainNavData;

  const renderHeader = () => {
    const headerSlots: HeaderSectionProps['slots'] = {
      topArea: <Header />,
      // leftArea: (
      //   <>
      //     {/** @slot Nav mobile */}
      //     <MenuButton
      //       onClick={onOpen}
      //       sx={(theme) => ({
      //         mr: 1,
      //         ml: -1,
      //         [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
      //       })}
      //     />
      //     <NavMobile data={navData} open={open} onClose={onClose} />

      //     {/** @slot Logo */}
      //     {/* <Logo /> */}
      //   </>
      // ),
      centerArea: (
        <>
          {/** @slot Nav desktop */}
          <NavDesktop
            data={navData}
            sx={(theme) => ({
              display: 'none',
              [theme.breakpoints.up(layoutQuery)]: {
                mr: 2.5,
                display: 'flex',
                justifyContent: 'center',
              },
            })}
          />
        </>
      ),
    };

    return (
      <HeaderSection
        layoutQuery={layoutQuery}
        {...slotProps?.header}
        slots={{ ...headerSlots, ...slotProps?.header?.slots }}
        slotProps={slotProps?.header?.slotProps}
        sx={slotProps?.header?.sx}
      />
    );
  };

  const renderFooter = () =>
    isHomePage ? <HomeFooter sx={slotProps?.footer?.sx} /> : <Footer sx={slotProps?.footer?.sx} />;

  const renderMain = () => <MainSection {...slotProps?.main}>{children}</MainSection>;

  return (
    <LayoutSection
      /** **************************************
       * @Header
       *************************************** */
      headerSection={renderHeader()}
      /** **************************************
       * @Footer
       *************************************** */
      footerSection={renderFooter()}
      /** **************************************
       * @Styles
       *************************************** */
      cssVars={cssVars}
      sx={sx}
    >
      {renderMain()}
      <HomeDownloadMobile />
    </LayoutSection>
  );
}
