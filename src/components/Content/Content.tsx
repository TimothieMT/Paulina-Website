import { Helmet } from 'react-helmet';
import { Box, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
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
      fontSize: '1.3rem',
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

  return (
    <ThemeProvider theme={customTheme}>
    <Helmet>
        <title>Systemische Therapie – Psychotherapie in Lübeck | Paulina Tolk</title>
        <meta
          name="description"
          content="Erfahren Sie mehr über den Ansatz der systemischen Therapie, bei der der Mensch als Teil eines größeren sozialen Kontexts betrachtet wird. Optimieren Sie Ihre Beziehungen und Kommunikationsmuster."
        />
      </Helmet>

      {/* Grid-Container mit responsiven Abständen */}
      <Grid
        container
        spacing={3}
        marginBottom={7}
        marginTop={5}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Item sx={{ backgroundColor: '#efeeee', boxShadow: 'none' }}>
            <Box
              component="img"
              src="/forestBeach.jpg"
              alt="Ein schmaler, geschwungener Sandweg führt durch einen lichten Wald mit hohen, schlanken Bäumen entlang einer sanften, grasbewachsenen Böschung direkt am Meer."
              sx={{
                width: '100%',
                height: '600px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }} width={'600px'} alignContent={'center'}>
          <Item sx={{ backgroundColor: '#efeeee', boxShadow: 'none', width: '100%' }}>
            <Typography variant="body1" textAlign={'start'} mb={3} letterSpacing={3} lineHeight={1.5} gutterBottom>
              <Typography variant="body3">Die systemische Therapie</Typography> ist ein Ansatz, der den Menschen nicht isoliert, sondern als Teil eines größeren sozialen Kontexts betrachtet.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} letterSpacing={3} lineHeight={1.5} gutterBottom>
              Im Mittelpunkt stehen die Wechselwirkungen in Familien, Partnerschaften und anderen sozialen Gruppen, die oft den Kern individueller Probleme bilden.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} letterSpacing={3} lineHeight={1.5} gutterBottom>
              Durch gezielte Methoden wie zirkuläres Fragen, Reframing und Aufstellungstechniken werden Kommunikationsmuster und <Typography variant="body3">Interaktionsstrukturen analysiert und verändert</Typography>.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} letterSpacing={3} lineHeight={1.5} gutterBottom>
              Dieser Ansatz betont, dass jeder Beteiligte sowohl Ursache als auch Wirkung sein kann – so werden Schuldzuweisungen vermieden und gemeinsame Lösungswege gefunden.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} letterSpacing={3} lineHeight={1.5} gutterBottom>
              Insgesamt unterstützt die systemische Therapie dabei, Konflikte zu lösen, <Typography variant="body3">gesündere Beziehungsstrukturen zu entwickeln</Typography> und nachhaltige Veränderungen im gesamten System zu bewirken.
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Divider/>

      {/* Grid-Container mit responsiven Abständen */}
      <Grid
        container
        spacing={3}
        marginBottom={7}
        marginTop={5}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Grid size={{ xs: 12, md: 5 }} width={'600px'} alignContent={'center'}>
          <Item sx={{ backgroundColor: '#efeeee', boxShadow: 'none', width: '100%' }}>
            <Typography variant="body1" textAlign={'start'} mb={3} letterSpacing={3} lineHeight={1.5} gutterBottom>
              <Typography variant="body3">Die systemische Therapie</Typography> ist ein Ansatz, der den Menschen nicht isoliert, sondern als Teil eines größeren sozialen Kontexts betrachtet.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} letterSpacing={3} lineHeight={1.5} gutterBottom>
              Im Mittelpunkt stehen die Wechselwirkungen in Familien, Partnerschaften und anderen sozialen Gruppen, die oft den Kern individueller Probleme bilden.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} letterSpacing={3} lineHeight={1.5} gutterBottom>
              Durch gezielte Methoden wie zirkuläres Fragen, Reframing und Aufstellungstechniken werden Kommunikationsmuster und <Typography variant="body3">Interaktionsstrukturen analysiert und verändert</Typography>.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} letterSpacing={3} lineHeight={1.5} gutterBottom>
              Dieser Ansatz betont, dass jeder Beteiligte sowohl Ursache als auch Wirkung sein kann – so werden Schuldzuweisungen vermieden und gemeinsame Lösungswege gefunden.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} letterSpacing={3} lineHeight={1.5} gutterBottom>
              Insgesamt unterstützt die systemische Therapie dabei, Konflikte zu lösen, <Typography variant="body3">gesündere Beziehungsstrukturen zu entwickeln</Typography> und nachhaltige Veränderungen im gesamten System zu bewirken.
            </Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Item sx={{ backgroundColor: '#efeeee', boxShadow: 'none' }}>
            <Box
              component="img"
              src="/forestBeach.jpg"
              alt="Ein schmaler, geschwungener Sandweg führt durch einen lichten Wald mit hohen, schlanken Bäumen entlang einer sanften, grasbewachsenen Böschung direkt am Meer."
              sx={{
                width: '100%',
                height: '600px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Content;