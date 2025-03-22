import { Box, Typography, Link, Stack, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Grid2 from '@mui/material/Grid2';

const CleanGrid = styled(Grid2, {
  shouldForwardProp: (prop) => prop !== 'item',
})({});

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <Box component="footer" position="sticky">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          direction= "row"
        >
          <CleanGrid>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Link href="/#">
                  <Box
                    component="img"
                    src="/Logo.png"
                    alt="Logo"
                    sx={{ width: isSmallScreen ? '150px' : '300px', height: 'auto' }}
                  />
                </Link>
              </Box>
            </Box>
          </CleanGrid>

          <CleanGrid>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1}
              marginRight={2}
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-end' }}
              sx={{
                '& a': {
                  color: '#737373',
                  textDecoration: 'none',
                  padding: '4px',
                }
              }}
            >
              <Link href="/contact" sx={{
                '&:hover': { color: '#85ab7f' },
              }}>Kontakt</Link>
              <Link href="/policy" sx={{
                '&:hover': { color: '#85ab7f' },
              }}>Datenschutz</Link>
              <Link href="/impressum" sx={{
                '&:hover': { color: '#85ab7f' },
              }}>Impressum</Link>
            </Stack>
          </CleanGrid>
        </Grid>
        <Typography
          variant="body2"
          align="center"
          fontSize={10}
          sx={{ color: '#737373' }}
        >
          © {currentYear} Therapie Paulina Tolk. Alle Rechte vorbehalten.
        </Typography>
      </Box>
  );
};

export default Footer;