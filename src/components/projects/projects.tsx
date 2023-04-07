import { Box } from '@mui/material';
import { ParallaxLayer } from './parallax-layer';

export const Projects = () => {
  return (
    <Box id="projects" sx={{ width: '100vw', height: '100%' }}>
      <ParallaxLayer
        img="/images/posee.png"
        title="P.OSEE"
        body="The future of B2B sales"
        button="Visit Site"
        link="https://posee.org"
      />

      <ParallaxLayer
        img="/images/macrobros.png"
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
      />
    </Box>
  );
};
