import { Stack } from '@mui/material';
import { About } from '@/components/about/about';
import { Contact } from '@/components/contact';
import { Projects } from '@/components/projects';
import { Home } from '@/components/home';

const Index = () => {
  return (
    <Stack>
      <Home />

      <About />

      <Projects />

      <Contact />
    </Stack>
  );
};

export default Index;
