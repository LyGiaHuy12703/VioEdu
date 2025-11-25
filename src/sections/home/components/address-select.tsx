'use client';

import { useState, useEffect } from 'react';
import addressData from 'public/json/address.json';

import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

type Province = {
  Code: string;
  Name: string;
  CodeName: string;
  FullName: string;
  Wards: { Code: string; Name: string; CodeName: string; FullName: string }[];
};

export default function AddressSelect({
  province,
  setProvince,
  district,
  setDistrict,
}: {
  province: string;
  setProvince: (value: string) => void;
  district: string;
  setDistrict: (value: string) => void;
}) {
  const [provinces] = useState<Province[]>(addressData);
  const [districts, setDistricts] = useState<Province['Wards']>([]);

  useEffect(() => {
    if (province) {
      const selected = provinces.find((p) => p.Code === province);
      setDistricts(selected?.Wards || []);
      setDistrict('');
    } else {
      setDistricts([]);
      setDistrict('');
    }
  }, [province, provinces]);

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <FormControl sx={{ minWidth: { xs: 280, sm: 200 } }}>
        <InputLabel sx={{ color: 'white' }}>Tỉnh / Thành phố</InputLabel>
        <Select
          value={province}
          label="Tỉnh / Thành phố"
          onChange={(e) => setProvince(e.target.value)}
          sx={{
            color: 'white',
            bgcolor: 'rgba(255,255,255,0.1)',
            borderRadius: 2,
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#4caf50' },
            '& .MuiSvgIcon-root': { color: 'white' },
          }}
        >
          <MenuItem value="">Tất cả tỉnh thành</MenuItem>
          {provinces.map((p) => (
            <MenuItem key={p.Code} value={p.Code}>
              {p.FullName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: { xs: 280, sm: 200 } }} disabled={!province}>
        <InputLabel sx={{ color: 'white' }}>Xã / Phường</InputLabel>
        <Select
          value={district}
          label="Xã / Phường"
          onChange={(e) => setDistrict(e.target.value)}
          sx={{
            color: 'white',
            bgcolor: province ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
            borderRadius: 2,
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#4caf50' },
            '& .MuiSvgIcon-root': { color: 'white' },
          }}
        >
          <MenuItem value="">Tất cả xã phường</MenuItem>
          {districts.map((d) => (
            <MenuItem key={d.Code} value={d.Code}>
              {d.FullName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
