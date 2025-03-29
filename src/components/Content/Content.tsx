import { Helmet } from 'react-helmet';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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
    },
    body3: {
      fontFamily: 'medium, sans-serif',
      fontSize: '1rem',
      color: '#85ab7f',
    }
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'none',
}));

const Content = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={customTheme}>
    <Helmet>
        <title>Systemische Therapie – Psychotherapie in Lübeck | Paulina Tolk</title>
        <meta
          name="description"
          content="Erfahren Sie mehr über den Ansatz der systemischen Therapie, bei der der Mensch als Teil eines größeren sozialen Kontexts betrachtet wird. Optimieren Sie Ihre Beziehungen und Kommunikationsmuster."
        />
      </Helmet>

      {/* Bild volle Breite, Höhe automatisch */}
      <Box
        component="img"
        src="/forestBeach.jpg"
        alt="Ein schmaler, geschwungener Sandweg führt durch einen lichten Wald mit hohen, schlanken Bäumen entlang einer sanften, grasbewachsenen Böschung direkt am Meer."
        sx={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
        }}
      />

      {/* Zitat zentriert */}
      <Box
        component="section"
        sx={{
          backgroundColor: '#efeeee',
          color: '#737373',
          width: { xs: '90%', sm: '70%' },
          p: { xs: 2, sm: 4 },
          mx: 'auto',
          textAlign: 'center',
          marginBottom: 5,
          marginTop: 7,
        }}
      >
        <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="blockquote" fontFamily={'light, sans-serif'} letterSpacing={0.8} lineHeight={1.5}>
          „Verstehen kann man das Leben nur rückwärts. Leben muss man es vorwärts.“
        </Typography>
        <Typography
          mt={2}
          fontFamily={'thin, sans-serif'}
          component="cite"
          sx={{ textAlign: 'right', width: '100%' }}
        >
          - Søren Kierkegaard -
        </Typography>
      </Box>

      {/* Grid-Container mit responsiven Abständen */}
      <Grid
        container
        spacing={3}
        marginBottom={7}
      >
        <Grid item xs={12} md={4}>
          <Item sx={{ backgroundColor: '#efeeee', boxShadow: 'none' }}>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              <Typography variant="body3">Die systemische Therapie</Typography> ist ein Ansatz, der den Menschen nicht isoliert, sondern als Teil eines größeren sozialen Kontexts betrachtet.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              Im Mittelpunkt stehen die Wechselwirkungen in Familien, Partnerschaften und anderen sozialen Gruppen, die oft den Kern individueller Probleme bilden.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item sx={{ backgroundColor: '#efeeee', boxShadow: 'none' }}>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              Durch gezielte Methoden wie zirkuläres Fragen, Reframing und Aufstellungstechniken werden Kommunikationsmuster und <Typography variant="body3">Interaktionsstrukturen analysiert und verändert</Typography>.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              Dieser Ansatz betont, dass jeder Beteiligte sowohl Ursache als auch Wirkung sein kann – so werden Schuldzuweisungen vermieden und gemeinsame Lösungswege gefunden.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item sx={{ backgroundColor: '#efeeee', boxShadow: 'none' }}>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              Insgesamt unterstützt die systemische Therapie dabei, Konflikte zu lösen, <Typography variant="body3">gesündere Beziehungsstrukturen zu entwickeln</Typography> und nachhaltige Veränderungen im gesamten System zu bewirken.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Content;