import { Box, List, ListItemText, SxProps, Typography } from '@mui/material';
import { Flex } from '../common/flex';

interface GridItemLayoutProps {
  title: string;
  items: string[];
  sx: SxProps;
}

export const GridItemLayout = (props: GridItemLayoutProps) => {
  const { title, items, sx } = props;

  return (
    <Flex sx={sx}>
      <Box
        sx={{
          p: 2,
          display: 'inline-block',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: '20px',
            fontWeight: 400,
            letterSpacing: 3,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>

        <List sx={{ pl: 4 }}>
          {items.map((item) => (
            <ListItemText
              key={item}
              primary={item}
              primaryTypographyProps={{
                fontSize: '20px',
                fontWeight: 300,
                textTransform: 'none',
                letterSpacing: 0.8,
              }}
            />
          ))}
        </List>
      </Box>
    </Flex>
  );
};
