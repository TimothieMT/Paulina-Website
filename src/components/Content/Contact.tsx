import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box margin={10}>
      <Typography variant={'h1'}>Contact</Typography>
      <Typography marginTop={8}>Feel free to contact me at
        <a href="mailto:" target="_blank" rel="noopener noreferrer">
          {' '}
        </a>
      </Typography>
    </Box>
  );
};

export default Contact;