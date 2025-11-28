'use client';

import type { PackageType } from './type';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import PackageNote from './package-note';
import PackageCombo from './package-combo';
import PackageSingle from './package-single';
import PackageSelector from './package-selector';
import PackageComboIntro from './package-combo-intro';

const renderFormRegister = () => (
  <Box>
    <Typography variant="h6">
      <Chip label="01" color="success" size="small" sx={{ mr: 2, minWidth: 40 }} />
      Thông tin tài khoản
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          required
          fullWidth
          label="Họ và Tên"
          placeholder="Họ tên đầy đủ"
          helperText="Vui lòng điền Họ và Tên"
          slotProps={{
            formHelperText: {
              sx: { color: '#d32f2f' },
            },
          }}
        />
        <TextField
          required
          fullWidth
          sx={{ mt: 4 }}
          label="Số điện thoại"
          placeholder="Số điện thoại liên hệ"
          helperText="Vui lòng điền Số điện thoại"
          slotProps={{
            formHelperText: {
              sx: { color: '#d32f2f' },
            },
          }}
        />
        <TextField fullWidth sx={{ mt: 4 }} label="Email" placeholder="Email liên hệ" />
        <TextField
          required
          fullWidth
          sx={{ mt: 4 }}
          label="Địa chỉ"
          placeholder="Địa chỉ liên hệ"
          helperText="Vui lòng điền Địa chỉ"
          slotProps={{
            formHelperText: {
              sx: { color: '#d32f2f' },
            },
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          required
          fullWidth
          label="Danh sách tài khoản sử dụng khóa học"
          placeholder="Tìm kiếm tài khoản"
          helperText="Vui lòng chọn tài khoản sử dụng khóa học"
          slotProps={{
            formHelperText: {
              sx: { color: '#d32f2f' },
            },
          }}
        />
      </Grid>
    </Grid>
  </Box>
);

export function PackageRegister() {
  const [packageType, setPackageType] = useState<PackageType>('combo');
  const [selectedComboIndex, setSelectedComboIndex] = useState(0);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState<number>(0);
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 5 }}>
        {renderFormRegister()}
        <PackageSelector packageType={packageType} onChange={setPackageType} />

        {packageType === 'combo' && (
          <PackageCombo
            selectedComboIndex={selectedComboIndex}
            onSelectCombo={setSelectedComboIndex}
          />
        )}
        {packageType === 'single' && (
          <PackageSingle
            selectedSubjectIndex={selectedSubjectIndex}
            onSelectSubject={setSelectedSubjectIndex}
          />
        )}
        <PackageNote />
        {packageType === 'single' && <PackageComboIntro />}
      </Paper>
    </Container>
  );
}
