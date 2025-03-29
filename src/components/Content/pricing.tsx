import { Helmet } from 'react-helmet';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
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

const services = [
  {
    title: 'Einzelsetting',
    head: 'Therapiestunde 50 Minuten',
    price: '167 €',
    description: 'In der Einzeltherapie haben Sie die Möglichkeit, sich in einem geschützten Rahmen mit Ihren Themen auseinanderzusetzen. Gemeinsam schauen wir auf Ihre Lebenssituation und erarbeiten Lösungsansätze.',
    subtitle: 'Die Kosten der Systemischen Therapie trägt der Klient/in auf Selbstzahlerbasis in Eigenleistung.',
  },
  {
    title: 'Multi-Personen-Setting',
    head: 'Therapiestunde 50 Minuten',
    price: '196 €',
    description: 'In der Multi-Personen-Therapie können Sie gemeinsam mit Ihrem Partner oder anderen Bezugspersonen an Ihren Themen arbeiten. Wir unterstützen Sie dabei, Ihre Beziehungen zu stärken und Konflikte zu lösen.',
    subtitle: 'Die Kosten der Systemischen Therapie trägt der Klient/in auf Selbstzahlerbasis in Eigenleistung.',
  }
];

const Pricing = () => {
  return (
    <ThemeProvider theme={customTheme}>
    <Helmet>
        <title>Kostenübersicht – Psychotherapie in Lübeck | Paulina Tolk</title>
        <meta
          name="description"
          content="Detaillierte Kostenübersicht zur systemischen Therapie. Erfahren Sie mehr über Honorar, Terminwahrnehmung, Zahlungsziel, Absagefristen und Ausfallhonorare in der Psychotherapie Praxis in Lübeck."
        />
      </Helmet>
      <Box
        component="section"
        aria-labelledby="overview-heading"
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: { xs: 4, sm: 8 },
          mb: { xs: 4, sm: 8 },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#efeeee',
            width: { xs: '90%', sm: '70%' },
            p: { xs: 2, sm: 4 },
          }}
        >
          <Typography variant="h4" component="h1" id="overview-heading" gutterBottom>
            Kostenübersicht
          </Typography>
          <Typography component="p">
            Die Kosten der Systemischen Therapie trägt der Klient/in auf Selbstzahlerbasis in Eigenleistung.
          </Typography>
          <Grid2
            container
            spacing={4}
            component="ul"
            sx={{ listStyle: 'none', p: 0, m: 0 , mt: 6, justifyContent: 'center' }}
          >
            {services.map((service, index) => (
              <Card sx={{ maxWidth: 345, backgroundColor: '#efeeee', border: '1px solid #85ab7f' }} key={index}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                      {service.head}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                      {service.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Grid2>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Pricing;