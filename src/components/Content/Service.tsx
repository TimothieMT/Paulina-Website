import { Helmet } from 'react-helmet';
import { Box, Typography, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid2';
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

const services = [
  {
    title: 'Psychotherapie',
    description:
      'In der Psychotherapie lernen Sie, effektive Bewältigungsstrategien zu entwickeln, um mit Stress und emotionalen Belastungen umzugehen. Unsere Ansätze helfen Ihnen, tief verwurzelte Verhaltensmuster zu erkennen und langfristig mehr innere Ruhe sowie Stabilität zu erreichen.',
    image: '/psychotherapie.jpg',
  },
  {
    title: 'Paartherapie',
    description:
      'Die Paartherapie bietet Ihnen einen sicheren Raum, um Kommunikationsprobleme zu identifizieren und gemeinsam nachhaltige Lösungen zu erarbeiten. Durch professionelle Unterstützung können Sie Ihre Beziehung stärken und langfristige Harmonie erreichen.',
    image: '/couple.jpg',
  },
  {
    title: 'Persönlichkeits-' +
      'entwicklung',
    description:
      'Unsere Angebote zur Persönlichkeitsentwicklung fördern Ihre individuelle Entfaltung und unterstützen Sie dabei, Ihr Selbstbewusstsein nachhaltig zu stärken. Entdecken Sie Ihre Potenziale und lernen Sie, diese gezielt für Ihre persönliche Weiterentwicklung einzusetzen.',
    image: '/persoenlichkeitsentwicklung.jpg',
  },
  {
    title: 'Angstbewältigung',
    description:
      'In unseren Sitzungen zur Angstbewältigung unterstützen wir Sie dabei, Ängste systematisch zu verstehen und zu reduzieren. Erfahren Sie, wie Sie Unsicherheiten überwinden und wieder mehr Lebensfreude sowie Selbstvertrauen gewinnen können.',
    image: '/angstbewältigung.jpg',
  },
  {
    title: 'Familientherapie',
    description:
      'Die Familientherapie unterstützt Familien dabei, bestehende Konflikte offen anzusprechen und gemeinsam konstruktive Lösungsansätze zu entwickeln. Fördern Sie eine harmonische Kommunikation und ein respektvolles Miteinander in Ihrem familiären Umfeld.',
    image: '/familientherapie.jpg',
  },
];

const Service = () => {
  return (
    <ThemeProvider theme={customTheme}>
    <Helmet>
        <title>Meine Leistungen – Psychotherapie in Lübeck | Paulina Tolk</title>
        <meta
          name="description"
          content="Entdecken Sie unsere individuellen psychotherapeutischen Leistungen: Psychotherapie, Paartherapie, Persönlichkeitsentwicklung, Angstbewältigung und Familientherapie in Lübeck."
        />
      </Helmet>
      <Box
        component="section"
        aria-labelledby="services-heading"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: { xs: 4, sm: 8 },
          mb: { xs: 4, sm: 8 },
          px: { xs: 2, sm: 4 },
        }}
        minHeight={{ xs: 'auto', md: '100vh' }}
      >
        <Box
          sx={{
            backgroundColor: '#efeeee',
            width: { xs: '90%', sm: '70%' },
            p: { xs: 2, sm: 4 },
            textAlign: 'left',
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            id="services-heading"
            textAlign="center"
          >
            Meine angebotenen Leistungen
          </Typography>
          <Typography variant="subtitle1" component="p" color="textSecondary" mb={4} textAlign={'center'}>
            Individuelle psychologische Beratung für Ihr Wohlbefinden – von Therapie bis Persönlichkeitsentwicklung.
          </Typography>

          <Grid
            size={{ xs: 12, md: 5 }}
            container
            spacing={4}
            component="ul"
            sx={{ listStyle: 'none', p: 0, m: 0, justifyContent: 'center' }}
          >
            {services.map((service, index) => (
                <Card sx={{ maxWidth: 380, backgroundColor: '#efeeee', border: '1px solid #737373', height: 'auto' }} key={index}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="body3" component="div">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Service;