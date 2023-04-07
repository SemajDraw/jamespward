import { Flex } from '../common/flex';
import Initials from '../../../public/images/initials.svg';
import { scrollTo } from '@/utils/window';

export const Footer = () => {
  return (
    <Flex
      sx={{
        py: 4,
        width: '100%',
        background: 'black',
        position: 'relative',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      <Flex onClick={() => scrollTo('home')}>
        <Initials
          height="70px"
          width="100%"
          fill="white"
          stroke="white"
          style={{ cursor: 'pointer' }}
        />
      </Flex>
    </Flex>
  );
};
