import type { HomeItemsVio } from 'src/layouts/main/nav/types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Home_Items_Vio } from 'src/layouts/nav-config-main';

export function HomeItemsVio() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {Home_Items_Vio.map((item) => (
        <Typography variant="h6" sx={{ mx: 3 }} key={item.id}>
          {item.title}
        </Typography>
      ))}
    </Box>
  );
}
