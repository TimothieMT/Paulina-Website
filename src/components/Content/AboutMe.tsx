import { Box, Typography } from '@mui/material';

const AboutMe = () => {
  return (
    <Box margin={10}>
      <Typography variant={'h1'}>Über mich</Typography>
      <Typography marginTop={8}>Ich bin ein Webentwickler aus Berlin.</Typography>
    </Box>
  );
};

export default AboutMe;