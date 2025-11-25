'use client';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { mockTop10 } from 'src/layouts/nav-config-main';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeHero } from '../home-hero';
import { HomeHonor } from '../home-honor';
import { HomeNewsVio } from '../home-news-vio';
import { HomePrograms } from '../home-programs';
import { HomeItemsVio } from '../home-items-vio';
import { HomeReviewVio } from '../home-review-vio';
import { HomeRewardVio } from '../home-reward-vio';
import { HomePartnerVio } from '../home-partner-vio';
import HomeWhyChooseVio from '../home-why-choose-vio';
import { HomeDownloadApp } from '../home-download-app';
import { HomeAssistantBox } from '../home-assistant-box';
import { HomeLearningJourney } from '../home-learning-journey';

const renderHomeHero = () => (
  <Box
    sx={{
      position: 'relative',
      backgroundImage: 'url("/assets/background/vio.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      marginTop: -10,
    }}
  >
    <HomeHero />
  </Box>
);

const renderAssistantBox = () => (
  <Box
    sx={{
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: 'url("/assets/background/vio2.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <Container maxWidth="lg">
      <HomeAssistantBox sx={{ mt: -30 }} />
    </Container>
    <Container maxWidth="lg">
      <HomeHonor year="2025 - 2026" currentTopTitle="Top 10 - Khối 1" top10={mockTop10} />
    </Container>
  </Box>
);

const renderProgramVio = () => (
  <Container maxWidth="lg">
    <HomePrograms />
  </Container>
);

const renderHomeLearningJourney = () => (
  <Box
    sx={{
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: 'url("/assets/background/vio3.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      marginTop: -20,
    }}
  >
    <Container maxWidth="lg">
      <HomeLearningJourney />
    </Container>
  </Box>
);

const renderHomeDownloadApp = () => (
  <Box
    sx={{
      position: 'relative',
      height: '90vh',
      backgroundImage: 'url("/assets/background/vio4.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      marginTop: -10,
    }}
  >
    <Container maxWidth="lg">
      <HomeDownloadApp />
    </Container>
  </Box>
);

const renderWhyChooseVio = () => (
  <Container maxWidth="lg">
    <HomeWhyChooseVio />
  </Container>
);

const renderReviewVio = () => (
  <Box
    sx={{
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: 'url("/assets/background/bgReview.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      pb: { xs: 12, md: 20 },
      overflow: 'hidden',
    }}
  >
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
      <HomeReviewVio />
    </Container>

    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: { xs: 80, sm: 120, md: 180, lg: 220 },
        zIndex: 1,
      }}
    >
      <Image
        src="/assets/background/bg-waves.png"
        alt="Sóng trang trí"
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'bottom',
        }}
        priority
      />
    </Box>
  </Box>
);

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <Stack
      sx={{
        position: 'relative',
        top: 0,
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={[(theme) => ({ position: 'fixed', zIndex: theme.zIndex.appBar + 1 })]}
      />
      <BackToTopButton />
      {renderHomeHero()}
      {renderAssistantBox()}
      {renderProgramVio()}
      {renderHomeLearningJourney()}
      {renderHomeDownloadApp()}
      {renderWhyChooseVio()}
      {renderReviewVio()}
      <Container maxWidth="lg" sx={{ mt: -10 }}>
        <HomePartnerVio />
      </Container>
      <Container maxWidth="lg">
        <HomeNewsVio />
      </Container>
      <Container maxWidth="xl" sx={{ mb: 3 }}>
        <HomeRewardVio />
      </Container>
      <Container maxWidth="xl">
        <hr />
        <HomeItemsVio />
        <hr />
      </Container>
    </Stack>
  );
}
