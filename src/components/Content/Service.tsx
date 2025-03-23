import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

const services = [
  {
    title: 'Psychotherapie',
    description:
      'In der Psychotherapie lernen Sie, effektive Bewältigungsstrategien zu entwickeln, um mit Stress und emotionalen Belastungen umzugehen. Unsere Ansätze helfen Ihnen, tief verwurzelte Verhaltensmuster zu erkennen und langfristig mehr innere Ruhe sowie Stabilität zu erreichen.',
  },
  {
    title: 'Paartherapie',
    description:
      'Die Paartherapie bietet Ihnen einen sicheren Raum, um Kommunikationsprobleme zu identifizieren und gemeinsam nachhaltige Lösungen zu erarbeiten. Durch professionelle Unterstützung können Sie Ihre Beziehung stärken und langfristige Harmonie erreichen.',
  },
  {
    title: 'Persönlichkeitsentwicklung',
    description:
      'Unsere Angebote zur Persönlichkeitsentwicklung fördern Ihre individuelle Entfaltung und unterstützen Sie dabei, Ihr Selbstbewusstsein nachhaltig zu stärken. Entdecken Sie Ihre Potenziale und lernen Sie, diese gezielt für Ihre persönliche Weiterentwicklung einzusetzen.',
  },
  {
    title: 'Angstbewältigung',
    description:
      'In unseren Sitzungen zur Angstbewältigung unterstützen wir Sie dabei, Ängste systematisch zu verstehen und zu reduzieren. Erfahren Sie, wie Sie Unsicherheiten überwinden und wieder mehr Lebensfreude sowie Selbstvertrauen gewinnen können.',
  },
  {
    title: 'Familientherapie',
    description:
      'Die Familientherapie unterstützt Familien dabei, bestehende Konflikte offen anzusprechen und gemeinsam konstruktive Lösungsansätze zu entwickeln. Fördern Sie eine harmonische Kommunikation und ein respektvolles Miteinander in Ihrem familiären Umfeld.',
  },
];

const Service = () => {
  return (
    <>
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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            backgroundColor: '#efeeee',
            width: { xs: '90%', sm: '70%' },
            p: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            fontWeight={400}
            gutterBottom
            id="services-heading"
          >
            Meine Leistungen
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="textSecondary"
            mb={4}
            fontWeight={200}
          >
            Individuelle psychologische Beratung für Ihr Wohlbefinden – von Therapie bis Persönlichkeitsentwicklung.
          </Typography>

          <Grid2 component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {services.map((service, index) => (
              <Container component="li" key={index} sx={{ mb: 4 }}>
                <Box component="article">
                  <Typography variant="h6" component="h3" fontWeight={400}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" component="p" fontWeight={200} sx={{ mt: 1 }}>
                    {service.description}
                  </Typography>
                </Box>
              </Container>
            ))}
          </Grid2>
        </Box>
      </Box>
    </>
  );
};

export default Service;