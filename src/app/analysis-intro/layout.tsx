import { VioLayout } from '../../layouts/main/vioLayout';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <VioLayout>{children}</VioLayout>;
}
