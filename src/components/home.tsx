import { Container, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import { Flex } from './common/flex';

import Banner from '../../public/images/banner.jpg';

export const Home = () => {
  return (
    <Flex sx={{ height: '100vh' }}>
      <Image
        src={Banner}
        alt="banner"
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        fill
      />
      <Flex
        sx={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          background: 'black',
          opacity: 0.3,
          zIndex: 1,
        }}
      ></Flex>
      <Container maxWidth="lg" id="home" sx={{ height: '100vh', zIndex: 2 }}>
        <Toolbar sx={{ height: '100px' }} />
        <Flex sx={{ height: 'calc(100% - 100px)', width: '100%' }}>
          <Flex
            sx={{
              pb: '100px',
              height: '100%',
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant="h1"
              sx={{ mb: 2, color: 'white.main', fontWeight: 600 }}
            >
              Hello!
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: 'white.main', fontWeight: 600 }}
            >
              {`I am James Ward`}
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: 'white.main', fontWeight: 600 }}
            >
              {`a software engineer`}
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: 'white.main', fontWeight: 600 }}
            >
              {`based in Dublin, Ireland.`}
            </Typography>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
