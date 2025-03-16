import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Content = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={{ px: isSmallScreen ? 2 : 10, py: 5, maxWidth: isSmallScreen ? '900px' : 'none', mx: isSmallScreen ? 'auto' : 'none' }}>
        <Typography variant="h4" gutterBottom mt={4}>
          Schwerpunkte
        </Typography>
        <Typography variant="h6" paragraph>
          • <strong>Verhaltenstherapie:</strong> Durchführung von Einzel- und Gruppentherapien mit Fokus auf kognitive Verhaltenstherapie.
        </Typography>
        <Typography variant="h6" paragraph>
          • <strong>Klinische Hypnose:</strong> Anwendung von Hypnotherapie zur Schmerzreduktion, Angstbewältigung und Verhaltensänderung.
        </Typography>
        <Typography variant="h6" paragraph>
          • <strong>Systemische Therapie & Beratung:</strong> Arbeit mit Paaren und Familien, lösungsorientierte Ansätze.
        </Typography>
        <Typography variant="h6" paragraph>
          • <strong>Psychologische Forschung:</strong> Beteiligung an wissenschaftlichen Studien, insbesondere im Bereich Schmerzreduktion durch Hypnose.
        </Typography>
        <Typography variant="h6" paragraph>
          • <strong>Psychosoziale Betreuung:</strong> Unterstützung psychisch kranker Menschen in Wohngruppen.
        </Typography>
        <Typography variant="h6" paragraph>
          • <strong>Multikulturelle Kompetenz:</strong> Dreisprachige Betreuung (Deutsch, Polnisch, Englisch), interkulturelle Sensibilität.
        </Typography>
        <Typography variant="h6" paragraph>
          • <strong>Inklusion & Barrierefreiheit:</strong> Förderung der Integration und Gleichstellung im therapeutischen Umfeld.
        </Typography>
      </Box>
    </>
  );
};

export default Content;
