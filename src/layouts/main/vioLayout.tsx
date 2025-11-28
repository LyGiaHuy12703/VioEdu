'use client';

import type { Breakpoint } from '@mui/material/styles';
import type { FooterProps } from './footer';
import type { NavMainProps } from './nav/types';
import type { MainSectionProps, HeaderSectionProps, LayoutSectionProps } from '../core';

import HomeDownloadMobile from 'src/sections/home/Home-download-mobile';

import { VioHeader } from './vioHeader';
import { navData as mainNavData } from '../nav-config-main';
import { VioNavDesktop } from './nav/desktop/vio-nav-desktop';
import { MainSection, LayoutSection, HeaderSection } from '../core';

// ----------------------------------------------------------------------

type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>;

export type VioLayoutProps = LayoutBaseProps & {
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

export function VioLayout({
  sx,
  cssVars,
  children,
  slotProps,
  layoutQuery = 'md',
}: VioLayoutProps) {
  const navData = slotProps?.nav?.data ?? mainNavData;

  const renderHeader = () => {
    const headerSlots: HeaderSectionProps['slots'] = {
      topArea: <VioHeader sx={{ position: 'block' }} />,
      centerArea: (
        <>
          {/** @slot Nav desktop */}
          <VioNavDesktop
            data={navData}
            sx={(theme) => ({
              position: 'none',
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

  const renderMain = () => <MainSection {...slotProps?.main}>{children}</MainSection>;

  return (
    <LayoutSection
      /** **************************************
       * @Header
       *************************************** */
      headerSection={renderHeader()}
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
