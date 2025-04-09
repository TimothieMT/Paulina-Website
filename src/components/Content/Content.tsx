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
      letterSpacing: 3,
      lineHeight: 1.5,
      color: '#85ab7f',
    },
    h1: {
      fontFamily: 'medium, sans-serif',
      fontSize: '2rem',
      letterSpacing: 3,
      lineHeight: 1.5,

    },
    h2: {
      fontFamily: 'regular, sans-serif',
      fontSize: '1.5rem',
      letterSpacing: 3,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: 'regular, sans-serif',
      fontSize: '1.5rem',
      letterSpacing: 3,
      lineHeight: 1.5,
      color: '#85ab7f',
    },
    h5: {
      fontFamily: 'medium, sans-serif',
      fontSize: '1.5rem',
      letterSpacing: 3,
      lineHeight: 1.5,
      color: '#85ab7f',
    },
    p: {
      fontFamily: 'thin, sans-serif',
      fontSize: '0.8rem',
      color: '#737373',
      letterSpacing: 3,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: 'regular, sans-serif',
      fontSize: '1rem',
      color: '#737373',
      letterSpacing: 3,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: 'light, sans-serif',
      fontSize: '1.1rem',
      color: '#737373',
      letterSpacing: 3,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: 'light, sans-serif',
      fontSize: '1rem',
      color: '#737373',
      letterSpacing: 3,
      lineHeight: 1.5,
    },
    body3: {
      fontFamily: 'regular, sans-serif',
      fontSize: '1.5rem',
      letterSpacing: 3,
      lineHeight: 1.5,
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
              height={{ xs: 'auto', md: '900px' }}
              sx={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }} width={'600px'} alignContent={'center'}>
          <Item sx={{ backgroundColor: '#efeeee', boxShadow: 'none', width: '100%' }}>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              <Typography variant="body3">Herzlich willkommen!</Typography>
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              Psychotherapie für Einzelpersonen, Paare, Familien und andere Mehrpersonensettings.
              Die systemische Therapie ist ein ganzheitliche Ansatz, der Menschen in ihrem  Facettenreichtum und Kontext betrachtet
              Jeder Mensch erlebt die Welt auf seine Weise, geprägt von individuellen Erfahrungen und Perspektiven, und steht daher vor Herausforderungen, die passgenaue und auf seine Situation abgestimmte Lösungen erfordern.
              Ich lade Sie ein, aus den starren, potenziell dysfunktionalen und festgefahrenen kognitiven Mustern auszubrechen, um gemeinsam mit mir Ihre persönlichen Ressourcen zu entdecken, Rückenwind in Ihren Herausforderungen zu erfahren und mithilfe von Möglichkeitsräumen und multidimensionalen Perspektiven neue Wege zu dynamischen Veränderungen, neuen Lösungen und einem erfüllteren Leben zu finden – ein Leben mit mehr Möglichkeitsraum für Stärke, Leichtigkeit und Zufriedenheit.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              <Typography variant="body3">Was ist systemische Psychotherapie?</Typography>
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              Die systemische Therapie ist ein Ansatz, der den Menschen nicht isoliert, sondern als Teil eines größeren sozialen Kontexts betrachtet. Im Mittelpunkt stehen das persönliche Erleben sowie die Wechselwirkungen in Familien, Partnerschaften und anderen sozialen Gruppen, die oft den Kern individueller Probleme bilden.
              Insgesamt unterstützt die systemische Therapie dabei, Konflikte zu lösen, gesündere Beziehungsstrukturen zu entwickeln und nachhaltige Veränderungen im gesamten System zu bewirken.
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              <Typography variant="body3">Wie kann ich Ihnen helfen?</Typography>
            </Typography>
            <Typography variant="body1" textAlign={'start'} mb={3} gutterBottom>
              Ob Sie sich in einer persönlichen Krise befinden, Beziehungsprobleme haben oder einfach nur das Gefühl, festzustecken – ich biete Ihnen einen sicheren Raum, in dem Sie sich öffnen, Erkenntnisse erlangen und wachsen können. Gemeinsam arbeiten wir daran, Ihre Lebensqualität zu verbessern und neue Perspektiven zu entwickeln.
              Nun ist die richtige Zeit für neue Impulse und mögliche Veränderungen gekommen!
              Die Systemische Therapie ist ein wirksames und wissenschaftlich anerkanntes psychotherapeutisches Richtlinienverfahren.
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Divider/>
    </ThemeProvider>
  );
};

export default Content;