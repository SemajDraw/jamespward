import { Parallax } from 'react-parallax';
import { Flex } from '../common/flex';
import { Button, Link, Typography } from '@mui/material';

interface ParallaxLayerProps {
  img: string;
  title: string;
  body: string;
  button: string;
  link: string;
}

export const ParallaxLayer = (props: ParallaxLayerProps) => {
  const { img, title, body, button, link } = props;

  return (
    <Parallax
      blur={0}
      bgImage={img}
      bgImageAlt="posee"
      bgImageStyle={{ width: '100%', height: '100%' }}
      strength={600}
    >
      <Flex
        sx={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          background: 'black',
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      <Flex
        sx={{
          height: '100vh',
          width: '100vw',
          zIndex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          opacity: 1,
          position: 'relative',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: '2.5rem',
              sm: '2.9rem',
              md: '3.5rem',
              lg: '3.75rem',
            },
            color: '#FFFFFF',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '2.9rem',
              md: '3.5rem',
              lg: '3.75rem',
            },
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          {body}
        </Typography>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outlined"
            sx={{
              mt: 3,
              height: '60px',
              width: '200px',
              color: '#FFFFFF',
              borderColor: '#FFFFFF',
              borderWidth: '2px',
              fontSize: '20px',
              fontWeight: 700,
              ':hover': {
                color: 'orange.main',
                borderColor: 'orange.main',
                backgroundColor: '#FFFFFF',
                opacity: 5,
              },
            }}
          >
            {button}
          </Button>
        </Link>
      </Flex>
    </Parallax>
  );
};
