import {
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Flex } from './common/flex';

export const Home = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Flex id="home" sx={{ height: '100vh' }}>
      <img
        src={'/images/banner.jpg'}
        alt="banner"
        height="100%"
        width="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          position: 'absolute',
          zIndex: 0,
        }}
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
      />

      <Container maxWidth="lg" sx={{ height: '100vh', zIndex: 2 }}>
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
              variant={isMobile ? 'h2' : 'h1'}
              sx={{ mb: 2, color: 'white.main', fontWeight: 600 }}
            >
              Hello!
            </Typography>
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              sx={{ color: 'white.main', fontWeight: 600 }}
            >
              {`I'm James Ward`}
            </Typography>
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              sx={{ color: 'white.main', fontWeight: 600 }}
            >
              {`a software engineer`}
            </Typography>
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
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
