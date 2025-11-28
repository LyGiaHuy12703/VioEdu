import type { Subject } from './type';

import Image from 'next/image';

import { Box, Typography } from '@mui/material';

interface SubjectSelectorProps {
  selectedSubject: Subject;
  onSubjectChange: (subject: Subject) => void;
  subjectIcons: Record<string, { on: string; off: string }>;
  subjectList: Subject[];
}

export default function SubjectSelector({
  selectedSubject,
  onSubjectChange,
  subjectIcons,
  subjectList,
}: SubjectSelectorProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 4,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        mb: 2,
      }}
    >
      {subjectList.map((subject) => {
        const isActive = selectedSubject === subject;
        const icon = isActive ? subjectIcons[subject].on : subjectIcons[subject].off;

        return (
          <Box
            key={subject}
            onClick={() => onSubjectChange(subject)}
            sx={{
              cursor: 'pointer',
              width: { xs: 140, sm: 160 },
              height: 140,
              borderRadius: 4,
              mt: 3,
              bgcolor: isActive ? 'white' : 'transparent',
              border: isActive ? '4px solid grey.500' : '2px dashed rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: isActive ? '0 5px 15px rgba(0,0,0,0.2)' : 'none',
              '&:hover': {
                transform: 'translateY(-1px)',
              },
            }}
          >
            <Image src={icon} alt={subject} width={50} height={50} style={{ marginBottom: 12 }} />
            <Typography variant="h6" fontWeight="bold">
              {subject}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
