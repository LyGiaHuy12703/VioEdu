import type { NavMainProps } from '../types';

import { Nav, NavUl } from '../components';
import { NavList } from './nav-desktop-list';

// ----------------------------------------------------------------------

export function VioNavDesktop({ data, sx, ...other }: NavMainProps) {
  return (
    <Nav
      sx={[
        () => ({
          /* Put styles */
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <NavUl
        sx={{
          gap: 5,
          height: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {data.map((list) => (
          <NavList
            key={list.title}
            data={list}
            sx={{
              ':hover': {
                backgroundColor: 'action.hover',
                borderRadius: 1,
                transition: 'background-color 200ms ease',
              },
            }}
          />
        ))}
      </NavUl>
    </Nav>
  );
}
