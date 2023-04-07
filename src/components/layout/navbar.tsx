import { Flex } from '@/components/common/flex';
import { scrollTo } from '@/utils/window';
import { Container, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Fragment, useEffect, useState } from 'react';

import Initials from '../../../public/initials.svg';

interface TextLinkProps {
  id: string;
}

const TextLink = ({ id }: TextLinkProps) => (
  <Typography
    onClick={() => scrollTo(id)}
    sx={{
      color: 'white.main',
      ':hover': { color: 'gray.main' },
      textTransform: 'uppercase',
      cursor: 'pointer',
    }}
  >
    {id}
  </Typography>
);

export const Navbar = () => {
  const [atRoot, setAtRoot] = useState<boolean>(true);
  const trigger = useScrollTrigger({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setAtRoot(true);
      if (window.scrollY > 350) setAtRoot(false);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          elevation={atRoot ? 0 : 2}
          sx={{
            height: atRoot ? '100px' : '80px',
            background: atRoot ? 'transparent' : 'black',
          }}
        >
          <Toolbar sx={{ height: atRoot ? '100px' : '80px' }}>
            <Container maxWidth="xl">
              <Flex
                sx={{
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Initials
                  onClick={() => scrollTo('home')}
                  height={atRoot ? '70' : '50'}
                  width="100"
                  fill="white"
                  stroke="white"
                  style={{ cursor: 'pointer' }}
                />

                <Flex sx={{ ml: 3, gap: 6 }}>
                  <TextLink id={'about'} />

                  <TextLink id={'projects'} />

                  <TextLink id={'contact'} />
                </Flex>
              </Flex>
            </Container>
          </Toolbar>
        </AppBar>
      </Slide>
    </Fragment>
  );
};
