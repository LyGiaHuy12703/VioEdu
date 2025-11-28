import { Stack, Typography } from '@mui/material';

import { PackageNoteData } from './data';

export default function PackageNote() {
  return (
    <Stack direction="column" alignItems="flex-start" spacing={1} sx={{ mt: 5 }}>
      <Typography variant="body2" fontWeight="bold">
        Lưu ý:
      </Typography>

      {PackageNoteData.map((note, index) => (
        <Typography key={index} variant="body2">
          • {note}
        </Typography>
      ))}
    </Stack>
  );
}
