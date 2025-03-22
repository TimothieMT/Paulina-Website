import { Box, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
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



const CleanGrid = styled(Grid2, {
  shouldForwardProp: (prop) => prop !== 'item',
})({});

const Service = () => {

  return (
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
          alignItems: 'flex-start',
          textAlign: 'flex-start',
          backgroundColor: '#efeeee',
          width: { xs: '90%', sm: '70%' },
          p: { xs: 2, sm: 4 },
        }}
      >
      <Typography variant="h4" fontWeight={400} gutterBottom>
        Meine Leistungen
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" mb={4} fontWeight={200}>
        Individuelle psychologische Beratung für Ihr Wohlbefinden – von Therapie bis Persönlichkeitsentwicklung.
      </Typography>

      <Grid2>
        {services.map((service, index) => (
          <CleanGrid key={index}>
            <Box>
              <Box sx={{ flex: '1', textAlign: 'flex-start' }}>
                <Typography variant="h6" fontWeight={400}>{service.title}</Typography>
              </Box>
              <Box sx={{ flex: '2', textAlign: 'flex-start', marginBottom: '40px' }}>
                <Typography variant="body1" fontWeight={200}>{service.description}</Typography>
              </Box>
            </Box>
          </CleanGrid>
        ))}
      </Grid2>
    </Box>
    </Box>
  );
};

export default Service;