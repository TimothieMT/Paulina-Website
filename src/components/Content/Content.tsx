import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Psychology, Favorite, SelfImprovement, SupportAgent, Pages } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Grid2 from '@mui/material/Grid2';

const services = [
  {
    title: 'Psychotherapie',
    description:
      'In der Psychotherapie lernen Sie, effektive Bewältigungsstrategien zu entwickeln, um mit Stress und emotionalen Belastungen umzugehen. Unsere Ansätze helfen Ihnen, tief verwurzelte Verhaltensmuster zu erkennen und langfristig mehr innere Ruhe sowie Stabilität zu erreichen.',
    icon: <Psychology fontSize="large" color="primary" />,
  },
  {
    title: 'Paartherapie',
    description:
      'Die Paartherapie bietet Ihnen einen sicheren Raum, um Kommunikationsprobleme zu identifizieren und gemeinsam nachhaltige Lösungen zu erarbeiten. Durch professionelle Unterstützung können Sie Ihre Beziehung stärken und langfristige Harmonie erreichen.',
    icon: <Favorite fontSize="large" color="secondary" />,
  },
  {
    title: 'Persönlichkeitsentwicklung',
    description:
      'Unsere Angebote zur Persönlichkeitsentwicklung fördern Ihre individuelle Entfaltung und unterstützen Sie dabei, Ihr Selbstbewusstsein nachhaltig zu stärken. Entdecken Sie Ihre Potenziale und lernen Sie, diese gezielt für Ihre persönliche Weiterentwicklung einzusetzen.',
    icon: <SelfImprovement fontSize="large" color="success" />,
  },
  {
    title: 'Angstbewältigung',
    description:
      'In unseren Sitzungen zur Angstbewältigung unterstützen wir Sie dabei, Ängste systematisch zu verstehen und zu reduzieren. Erfahren Sie, wie Sie Unsicherheiten überwinden und wieder mehr Lebensfreude sowie Selbstvertrauen gewinnen können.',
    icon: <SupportAgent fontSize="large" color="warning" />,
  },
  {
    title: 'Familientherapie',
    description:
      'Die Familientherapie unterstützt Familien dabei, bestehende Konflikte offen anzusprechen und gemeinsam konstruktive Lösungsansätze zu entwickeln. Fördern Sie eine harmonische Kommunikation und ein respektvolles Miteinander in Ihrem familiären Umfeld.',
    icon: <Pages fontSize="large" color="warning" />,
  },
];

const ServiceBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '300px',
  width: '80%',
  padding: '20px',
  boxSizing: 'border-box',
  margin: '0 auto',
});

const CleanGrid = styled(Grid2, {
  shouldForwardProp: (prop) => prop !== 'item',
})({});

const Content = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
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
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#efeeee',
          width: { xs: '90%', sm: '70%' },
          p: { xs: 2, sm: 4 },
        }}
      >
        <Typography variant={isSmallScreen ? 'h5' : 'h3'} fontWeight={300}>
          „Verstehen kann man das Leben nur rückwärts. Leben muss man es vorwärts.“
        </Typography>
        <Typography variant="h6" mt={2} fontWeight={100}>
          - Søren Kierkegaard
        </Typography>
      </Box>
      </Box>
      <Box sx={{ py: { xs: 4, sm: 8 }, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={400} gutterBottom>
          Meine Leistungen
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mb={4} fontWeight={200}>
          Individuelle psychologische Beratung für Ihr Wohlbefinden – von Therapie bis Persönlichkeitsentwicklung.
        </Typography>

        <Grid2 container spacing={2} sx={{ margin: 0, width: '100%', justifyContent: 'center' }}>
          {services.map((service, index) => (
            <CleanGrid key={index}>
              <ServiceBox sx={{ height: isSmallScreen ? '300px' : '200px' }}>
                <Box sx={{ flex: '1', textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={400}>{service.title}</Typography>
                </Box>
                <Box sx={{ flex: '2', textAlign: 'start' }}>
                  <Typography variant="body1" fontWeight={200}>{service.description}</Typography>
                </Box>
              </ServiceBox>
            </CleanGrid>
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default Content;