import { Container, Divider, Grid, Typography } from '@mui/material';
import { Flex } from '../common/flex';
import { GridItemLayout } from './grid-item.layout';
import { architecture, design, development } from './constants';

export const About = () => {
  return (
    <Flex>
      <Container id="about" sx={{ py: 10 }}>
        <Flex sx={{ px: 2, gap: 2, mb: 4, flexDirection: 'column' }}>
          <Typography
            variant="h5"
            sx={{
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            Continually tinkering with all things techy.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textTransform: 'uppercase',
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            A passionate fan of good music.
          </Typography>
        </Flex>

        <Flex
          sx={{
            mb: 6,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Flex
            sx={{
              gap: 6,
              width: { xs: '100%', sm: '90%', md: '80%', lg: '60%' },
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 300,
                letterSpacing: 0.8,
              }}
            >
              {`I'm a software engineer based in Dublin, Ireland. I specialise in
              full stack web development and I am passionate about crypto tech.`}
            </Typography>

            <Divider />
          </Flex>
        </Flex>

        <Grid container>
          <Grid item xs={12} md={4}>
            <GridItemLayout
              title="Architecture"
              items={architecture}
              sx={{ justifyContent: 'flex-start' }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <GridItemLayout
              title="Development"
              items={development}
              sx={{ justifyContent: { xs: 'flex-start', md: 'center' } }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <GridItemLayout
              title="Design"
              items={design}
              sx={{ justifyContent: { xs: 'flex-start', md: 'flex-end' } }}
            />
          </Grid>
        </Grid>
      </Container>
    </Flex>
  );
};
