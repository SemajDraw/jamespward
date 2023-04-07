import { Box, Stack } from '@mui/material';
import { About } from '@/components/about/about';
import { Contact } from '@/components/contact';
import { Projects } from '@/components/projects/projects';
import { Home } from '@/components/home';

const Index = () => {
  return (
    <Stack>
      <Home />

      <About />

      <Box>
        <Projects />
      </Box>

      <Contact />
    </Stack>
  );
};

export default Index;
