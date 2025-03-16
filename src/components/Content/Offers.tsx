import { Box, Typography, Container } from '@mui/material';

const Offers = () => {
  return (
    <Box sx={{ backgroundColor: '#fbfbfb', padding: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Angebote
        </Typography>

        {/* Psychotherapeutische Leistungen */}
        <Typography variant="h4" marginTop={4} gutterBottom>
          1. Psychotherapeutische Leistungen
        </Typography>

        <Typography variant="h5" marginTop={2} gutterBottom>
          Verhaltenstherapie (VT)
        </Typography>
        <Typography>
          - Problemanalyse & Diagnostik zur gezielten Behandlung.
          - Störungsspezifische Interventionen für Depressionen, Angststörungen, Schizophrenie & bipolare Störungen.
          - Unterstützung bei Abhängigkeitserkrankungen.
        </Typography>

        <Typography variant="h5" marginTop={2} gutterBottom>
          Klinische Hypnose & Hypnotherapie
        </Typography>
        <Typography>
          - Hypnotherapie bei Depressionen & Angststörungen.
          - Schmerztherapie durch Hypnose.
          - Nutzung therapeutischer Metaphern & Trancezustände.
        </Typography>

        <Typography variant="h5" marginTop={2} gutterBottom>
          Systemische Therapie & Paartherapie
        </Typography>
        <Typography>
          - Unterstützung in Paar- und Familientherapie.
          - Förderung der Kommunikation und Lösungsorientierung.
        </Typography>

        <Typography variant="h5" marginTop={2} gutterBottom>
          Ego-State-Therapie
        </Typography>
        <Typography>
          - Arbeit mit verschiedenen Persönlichkeitsanteilen zur Traumabearbeitung.
          - Bearbeitung von destruktiven Ego-States.
        </Typography>

        {/* Beratung & Betreuung */}
        <Typography variant="h4" marginTop={4} gutterBottom>
          2. Beratung & Betreuung
        </Typography>
        <Typography>
          - Unterstützung psychisch kranker Erwachsener in Wohngruppen.
          - Digitale 1:1-Familien- und Paarberatung.
        </Typography>

        {/* Forschung & Wissenschaft */}
        <Typography variant="h4" marginTop={4} gutterBottom>
          3. Forschung & Wissenschaft
        </Typography>
        <Typography>
          - Forschung zur Schmerzreduktion durch Hypnose.
          - Untersuchung von psychometrischen Tests zur Diagnostik.
        </Typography>

        {/* Weitere Qualifikationen */}
        <Typography variant="h4" marginTop={4} gutterBottom>
          4. Weitere Qualifikationen
        </Typography>
        <Typography>
          - Mehrsprachigkeit: Deutsch & Polnisch (Muttersprache), Englisch (fließend), Französisch (Grundkenntnisse).
          - IT-Kenntnisse: SPSS, R Studio, MS Office.
          - Erfahrung mit Sehbehinderung und technologischen Hilfsmitteln.
        </Typography>
      </Container>
    </Box>
  );
};

export default Offers;
