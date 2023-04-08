import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ParallaxLayer } from './parallax-layer';

export const Projects = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="projects" sx={{ width: '100vw', height: '100%' }}>
      <ParallaxLayer
        img={isMobile ? '/images/posee-mobile.png' : '/images/posee.png'}
        title="P.OSEE"
        body="The future of B2B sales"
        button="Visit Site"
        link="https://posee.org"
      />

      <ParallaxLayer
        img={
          isMobile ? '/images/macrobros-mobile.png' : '/images/macrobros.png'
        }
        title="MacroBros"
        body="Cryptocurrency blog website"
        button="View Code"
        link="https://github.com/SemajDraw/macrobros"
      />

      <ParallaxLayer
        img="/images/localgigs.jpeg"
        title="Localgigs"
        body="Tailored live music event recommendations"
        button="View Code"
        link="https://github.com/SemajDraw/localgigs"
        opacity={isMobile ? 1 : undefined}
      />
    </Box>
  );
};
