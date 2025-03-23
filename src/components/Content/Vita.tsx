import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

const Vita = () => {
  return (
    <>
      <Helmet>
        <title>Vita – Werdegang und Qualifikationen | Psychotherapie Lübeck</title>
        <meta
          name="description"
          content="Ein Überblick über den Werdegang, Qualifikationen, Weiterbildungen und berufliche Erfahrung von M.Sc. Psych., HP Psych. Paulina Tolk – Ihre Expertin für Psychotherapie in Lübeck."
        />
      </Helmet>
      <Box
        component="main"
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
            alignItems: 'flex-start',
            textAlign: 'left',
            backgroundColor: '#efeeee',
            width: { xs: '90%', sm: '70%' },
            p: { xs: 2, sm: 4 },
          }}
        >
          <header>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 500, textTransform: 'uppercase' }}
            >
              Werdegang und Qualifikationen
            </Typography>
          </header>

          <section aria-labelledby="qualifications">
            <Typography
              id="qualifications"
              component="p"
              sx={{ mt: 5, fontWeight: 300 }}
            >
              Seit 2023: Ausbildung zur Verhaltenstherapeutin (BFA Berlin) mit Schwerpunkt auf Einzel- und Gruppentherapie.
            </Typography>
            <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
              2019-2023: Master of Science in Klinischer- und Gesundheitspsychologie Freie Universität Berlin – Masterarbeit zum Thema Schmerzbewältigung bei Kindern.
            </Typography>
            <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
              2011-2019: Bachelor of Science in Psychologie Freie Universität Berlin – Schwerpunkt: Gesundheitspsychologie und zwischenmenschliche Beziehungen.
            </Typography>
          </section>

          <section>
            <Typography variant="h6" component="h2" sx={{ mt: 5, fontWeight: 500 }}>
              Weiterbildungen & Zusatzausbildungen
            </Typography>
            <Typography component="p" sx={{ mt: 1, fontWeight: 300 }}>
              Neben meiner akademischen Laufbahn habe ich mich in verschiedenen therapeutischen Methoden weitergebildet:
            </Typography>
            <Box
              component="ul"
              sx={{ listStyle: 'none', pl: 0, m: 0 }}
            >
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Systemische Therapie – mit Fokus auf Familien- und Paartherapie
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Klinische Hypnose – Einsatz von Trance und Suggestion in der Psychotherapie
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Ego-State-Therapie – Arbeit mit Persönlichkeitsanteilen zur Traumabewältigung
                </Typography>
              </Box>
            </Box>
          </section>

          <section>
            <Typography variant="h6" component="h2" sx={{ mt: 3, fontWeight: 500 }}>
              Berufliche Erfahrung
            </Typography>
            <Box
              component="ul"
              sx={{ listStyle: 'none', pl: 0, m: 0 }}
            >
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Psychotherapeutische Praxis Dipl.-Psych. Maria Schnell
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Verhaltenstherapeutische Einzel- und Gruppensitzungen
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Anwendung klinischer Hypnose bei Angst- und Belastungsstörungen
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Systemische Beratung für Paare und Familien
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Ambulante Betreuung (Pinel Berlin)
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Unterstützung psychisch erkrankter Menschen im Alltag
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Entwicklung von Bewältigungsstrategien und Krisenintervention
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Forschungspraktikum – Humboldt Universität
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Wissenschaftliche Untersuchungen zur Wirkung von Hypnose auf Schmerzempfinden
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
                  Mitarbeit an klinischen Studien und Datenauswertungen
                </Typography>
              </Box>
            </Box>
          </section>

          <section>
            <Typography variant="h6" component="h2" sx={{ mt: 5, fontWeight: 500 }}>
              Mein therapeutischer Ansatz
            </Typography>
            <Typography component="p" sx={{ mt: 2, fontWeight: 300 }}>
              In meiner Arbeit lege ich großen Wert auf eine individuelle und wertschätzende Begleitung. Mein Ansatz kombiniert
              wissenschaftlich fundierte Methoden der Verhaltenstherapie mit Elementen der systemischen Beratung und Hypnotherapie.
              Ich glaube daran, dass jeder Mensch über Ressourcen verfügt, die ihm helfen können, schwierige Lebensphasen zu bewältigen.
              Gemeinsam erarbeiten wir nachhaltige Lösungen, die Ihre persönliche Entwicklung und psychische Gesundheit stärken.
            </Typography>
          </section>
        </Box>
      </Box>
    </>
  );
};

export default Vita;