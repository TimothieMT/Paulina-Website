import { Helmet } from 'react-helmet';
import { Box, Typography, Link, Stack, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Grid2 from '@mui/material/Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
  typography: {
    h4: {
      fontFamily: 'medium, sans-serif',
      fontSize: '2rem',
    },
    h1: {
      fontFamily: 'medium, sans-serif',
      fontSize: '2rem',

    },
    h2: {
      fontFamily: 'regular, sans-serif',
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: 'regular, sans-serif',
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: 'medium, sans-serif',
      fontSize: '1.5rem',
    },
    p: {
      fontFamily: 'thin, sans-serif',
      fontSize: '0.8rem',
      color: '#737373',
    },
    body1: {
      fontFamily: 'regular, sans-serif',
      fontSize: '1rem',
      color: '#737373',
    },
    subtitle1: {
      fontFamily: 'light, sans-serif',
      fontSize: '1.1rem',
      color: '#737373',
    },
    body2: {
      fontFamily: 'light, sans-serif',
      fontSize: '1rem',
      color: '#737373',
    }
  },
});

const CleanGrid = styled(Grid2, {
  shouldForwardProp: (prop) => prop !== 'item',
})({});

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={customTheme}>
    <Helmet>
        <title>Therapie Paulina Tolk – Footer</title>
        <meta
          name="description"
          content="Footer der Website von Therapie Paulina Tolk – Psychotherapie in Lübeck. Alle Rechte vorbehalten."
        />
      </Helmet>
      <Box
        component="footer"
        position="sticky"
        marginTop={3}
        sx={{
          width: '100%',
          height: '150px', // Feste Höhe
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <CleanGrid>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, marginLeft: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Link href="/#" aria-label="Zur Startseite">
                  <Box
                    component="img"
                    src="/Logo.png"
                    alt="Das Logo zeigt mittig die Silhouette eines menschlichen Kopfes im Seitenprofil, der aus stilisierten grünen Blättern und Zweigen geformt ist und Wachstum, Gesundheit und Lebenskraft symbolisiert. Links neben der Silhouette steht das Wort „THERAPIE“ und rechts daneben „TOLK“, beide Wörter in klaren, grauen Großbuchstaben. Unterhalb des Logos befindet sich der Zusatz „SYSTEMISCHE THERAPIE“ in kleinerer, ebenfalls grauer Schrift, was auf die therapeutische Fachrichtung hinweist."
                    sx={{ width: isSmallScreen ? '150px' : '300px', height: 'auto' }}
                  />
                </Link>
              </Box>
            </Box>
          </CleanGrid>

          <CleanGrid>
            <Box component="nav" aria-label="Footer Navigation">
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
                <Link href="/contact" variant="subtitle1" sx={{ '&:hover': { color: '#85ab7f' } }}>
                  Kontakt
                </Link>
                <Link href="/policy" variant="subtitle1" sx={{ '&:hover': { color: '#85ab7f' } }}>
                  Datenschutz
                </Link>
                <Link href="/impressum" variant="subtitle1" sx={{ '&:hover': { color: '#85ab7f' } }}>
                  Impressum
                </Link>
              </Stack>
            </Box>
          </CleanGrid>
        </Grid>
        <Typography
          variant="body2"
          align="center"
          fontSize={10}
          sx={{ color: '#737373', mt: 2, marginRight: 3 }}
        >
          © {currentYear} Therapie Paulina Tolk. Alle Rechte vorbehalten.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;