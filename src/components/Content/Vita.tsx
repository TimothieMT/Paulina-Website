import { Box, Typography } from '@mui/material';

const Vita = () => {
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
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 500, textTransform: 'uppercase' }}>
          Werdegang und Qualifikationen
        </Typography>

        <Typography sx={{ mt: 5 , fontWeight: 300 }}>Seit 2023: Ausbildung zur Verhaltenstherapeutin (BFA Berlin) mit Schwerpunkt auf Einzel- und Gruppentherapie.</Typography>

        <Typography sx={{ mt: 2 , fontWeight: 300 }}>2019-2023: Master of Science in Klinischer- und Gesundheitspsychologie Freie Universität Berlin Masterarbeit zum Thema Schmerzbewältigung bei Kindern.</Typography>

        <Typography sx={{ mt: 2 , fontWeight: 300 }}>2011-2019: Bachelor of Science in Psychologie Freie Universität Berlin Schwerpunkt: Gesundheitspsychologie und zwischenmenschliche Beziehungen.</Typography>

        <Typography variant="h6" sx={{ mt: 5, fontWeight: 500 }}>
          Weiterbildungen & Zusatzausbildungen
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: 300 }}>
          Neben meiner akademischen Laufbahn habe ich mich in verschiedenen therapeutischen Methoden weitergebildet:
        </Typography>

        <Typography sx={{ mt: 2 , fontWeight: 300 }}>Systemische Therapie – mit Fokus auf Familien- und Paartherapie</Typography>
        <Typography sx={{ mt: 2 , fontWeight: 300 }}>Klinische Hypnose – Einsatz von Trance und Suggestion in der Psychotherapie</Typography>
        <Typography sx={{ mt: 2 , fontWeight: 300 }}>Ego-State-Therapie – Arbeit mit Persönlichkeitsanteilen zur Traumabewältigung</Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 500 }}>
          Berufliche Erfahrung
        </Typography>


          <Typography sx={{ mt: 2 , fontWeight: 300 }}>Psychotherapeutische Praxis Dipl.-Psych. Maria Schnell</Typography>
          <Typography sx={{ mt: 2 , fontWeight: 300 }}>Verhaltenstherapeutische Einzel- und Gruppensitzungen</Typography>
          <Typography sx={{ mt: 2 , fontWeight: 300 }}>Anwendung klinischer Hypnose bei Angst- und Belastungsstörungen</Typography>
          <Typography sx={{ mt: 2 , fontWeight: 300 }}>Systemische Beratung für Paare und Familien</Typography>

        <Typography sx={{ mt: 2 , fontWeight: 300 }}> Ambulante Betreuung (Pinel Berlin)</Typography>
        <Typography sx={{ mt: 2 , fontWeight: 300 }}> Unterstützung psychisch erkrankter Menschen im Alltag</Typography>
        <Typography sx={{ mt: 2 , fontWeight: 300 }}> Entwicklung von Bewältigungsstrategien und Krisenintervention</Typography>
        <Typography sx={{ mt: 2 , fontWeight: 300 }}> Forschungspraktikum – Humboldt Universität</Typography>
        <Typography sx={{ mt: 2 , fontWeight: 300 }}> Wissenschaftliche Untersuchungen zur Wirkung von Hypnose auf Schmerzempfinden</Typography>
        <Typography sx={{ mt: 2 , fontWeight: 300 }}> Mitarbeit an klinischen Studien und Datenauswertungen</Typography>

        <Typography variant="h6" sx={{ mt: 5, fontWeight: 500 }}>
          Mein therapeutischer Ansatz
        </Typography>
        <Typography sx={{ mt: 2 , fontWeight: 300 }}>
          In meiner Arbeit lege ich großen Wert auf eine individuelle und wertschätzende Begleitung. Mein Ansatz kombiniert wissenschaftlich fundierte Methoden der Verhaltenstherapie mit Elementen der systemischen Beratung und Hypnotherapie. Ich glaube daran, dass jeder Mensch über Ressourcen verfügt, die ihm helfen können, schwierige Lebensphasen zu bewältigen. Gemeinsam erarbeiten wir nachhaltige Lösungen, die Ihre persönliche Entwicklung und psychische Gesundheit stärken.
        </Typography>
      </Box>
    </Box>
  );
};

export default Vita;
