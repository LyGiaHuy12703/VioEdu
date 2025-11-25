import type { Theme, SxProps } from '@mui/material/styles';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';

// ----------------------------------------------------------------------

/**
 * Item
 */
export type NavItemStateProps = {
  open?: boolean;
  active?: boolean;
};

export type NavItemOptionsProps = {
  subItem?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
};

export type NavItemDataProps = {
  path: string;
  title: string;
  icon?: string | React.ReactNode;
  deepMatch?: boolean;
  children?: {
    subheader: string;
    items: { title: string; path: string }[];
  }[];
};

export type NavItemProps = ButtonBaseProps &
  NavItemDataProps &
  NavItemStateProps &
  NavItemOptionsProps;

/**
 * List
 */
export type NavListProps = React.ComponentProps<'li'> & {
  sx?: SxProps<Theme>;
  data: NavItemDataProps;
};

export type NavSubListProps = React.ComponentProps<'li'> & {
  sx?: SxProps<Theme>;
  subheader: string;
  data: NavItemDataProps[];
};

/**
 * Assist
 */
export type AssistType = {
  quantity: string;
  image?: string;
  title: string;
};

/**
 * Ranking
 */
export type RankingItem = {
  rank?: number;
  name: string;
  school: string;
  avatar?: string;
};
/**
 * Header title
 */
export type HeaderTitle = {
  title: string;
  path: string;
  icon: string;
};
/**
 * Home Items
 */
export type HomeItemsVio = {
  id: number;
  title: string;
  href?: string;
};
/**
 * News_Paper
 */
export type NewsPaper = {
  name: string;
  logo: string;
};

/**
 * SELECT_DATA
 */
export type SELECT_DATA = {
  value: string | number;
  label: string;
};
/**
 * Main
 */
export type NavMainProps = {
  sx?: SxProps<Theme>;
  data: NavItemDataProps[];
};

export type AssistantProps = {
  sx?: SxProps<Theme>;
  data: AssistType[];
};

export type RankingProps = {
  sx?: SxProps<Theme>;
  data: RankingItem[];
};

export type HeaderTitleProps = {
  sx?: SxProps<Theme>;
  data: HeaderTitle[];
};
export type HomeHonorProps = {
  title?: string;
  year?: string;
  currentTopTitle?: string;
  top10?: RankingItem[];
};
