import { Box, Container, Grid, Typography } from '@mui/material';
import { Flex } from './common/flex';

import Email from '../../public/images/email.svg';
import Github from '../../public/images/github.svg';
import LinkedIn from '../../public/images/linkedin.svg';
import { Link } from './common/link';

export const Contact = () => {
  return (
    <Flex id="contact" sx={{ height: '70vh', position: 'relative' }}>
      <img
        src={'/images/sky.jpg'}
        alt="sky"
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
          opacity: 0.4,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ py: 6, zIndex: 2 }}>
        <Grid container sx={{ height: '100%' }} rowSpacing={10}>
          <Grid item xs={12}>
            <Flex sx={{ alignItems: 'flex-start' }}>
              <Typography
                variant="h3"
                sx={{ color: '#FFFFFF', fontWeight: 600 }}
              >
                Get in touch
              </Typography>
            </Flex>
          </Grid>

          <Grid item xs={12} md={6} sx={{ height: '100%' }}>
            <Flex
              sx={{
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <Flex sx={{ pl: 6, height: '100%', alignItems: 'flex-start' }}>
                <Link
                  href="https://www.linkedin.com/in/james--ward/"
                  underline="none"
                >
                  <Flex sx={{ gap: 4, alignItems: 'center' }}>
                    <Box sx={{ height: '45px', width: '45px' }}>
                      <LinkedIn sx={{ height: '100%', width: '100%' }} />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        letterSpacing: 0.8,
                      }}
                    >
                      LinkedIn
                    </Typography>
                  </Flex>
                </Link>
              </Flex>

              <Flex sx={{ pl: 6, height: '100%', alignItems: 'flex-start' }}>
                <Link href="mailto:jameswsoftware@gmail.com" underline="none">
                  <Flex sx={{ gap: 4, alignItems: 'center' }}>
                    <Box sx={{ height: '45px', width: '45px' }}>
                      <Email height="45px" width="45px" />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{ color: '#FFFFFF', fontWeight: 600 }}
                    >
                      Email
                    </Typography>
                  </Flex>
                </Link>
              </Flex>

              <Flex sx={{ pl: 6, height: '100%', alignItems: 'flex-start' }}>
                <Link href="https://github.com/SemajDraw" underline="none">
                  <Flex sx={{ gap: 4, alignItems: 'center' }}>
                    <Box sx={{ height: '45px', width: '45px' }}>
                      <Github height="45px" width="45px" />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{ color: '#FFFFFF', fontWeight: 600 }}
                    >
                      GitHub
                    </Typography>
                  </Flex>
                </Link>
              </Flex>
            </Flex>
          </Grid>

          <Grid
            item
            md={6}
            sx={{ height: '100%', display: { xs: 'none', md: 'flex' } }}
          >
            <Flex
              sx={{
                pb: 18,
                height: '100%',
                color: '#FFFFFF',
                flexDirection: 'column',
                letterSpacing: 0.8,
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4">Follow the links</Typography>
              <Typography variant="h4">or check out my GitHub</Typography>
              <Typography variant="h4">to see more of my work</Typography>
            </Flex>
          </Grid>
        </Grid>
      </Container>
    </Flex>
  );
};
