import { Helmet } from 'react-helmet';
import { Box, Divider, Typography } from '@mui/material';
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

const Vita = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Helmet>
        <title>Über mich – Mein Werdegang & Qualifikationen | Psychotherapie Lübeck</title>
        <meta
          name="description"
          content="Ein persönlicher Einblick in meinen Werdegang, Qualifikationen und beruflichen Erfahrungen. Erfahren Sie, wie meine Leidenschaft für Psychotherapie mich geprägt hat."
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
        minHeight={{ xs: 'auto', md: '100vh' }}
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
            <Typography variant="h4" component="h2" gutterBottom>Über Mich</Typography>
          </header>

          <section aria-labelledby="qualifications">
            <Typography id="qualifications" component="p" sx={{ mt: 5 }}>
              Schon immer war es mir ein Herzensanliegen, den Menschen in schwierigen Lebenssituationen beizustehen.
              Dieser innere Antrieb führte mich 2023 in die Ausbildung zur Verhaltenstherapeutin am BFA Berlin, wo ich
              lerne, sowohl Einzel- als auch Gruppentherapien wirkungsvoll zu gestalten.
            </Typography>
            <Typography component="p" sx={{ mt: 2 }}>
              Von 2019 bis 2023 habe ich meinen Master of Science in Klinischer- und Gesundheitspsychologie an der
              Freien Universität Berlin absolviert. Meine Masterarbeit, in der ich mich intensiv mit der
              Schmerzbewältigung bei Kindern beschäftigte, war ein prägender Meilenstein, der meine fachliche und
              persönliche Entwicklung nachhaltig beeinflusste.
            </Typography>
            <Typography component="p" sx={{ mt: 2 }}>
              Bereits während meines Bachelorstudiums (2011-2019) an der Freien Universität Berlin entwickelte sich
              meine Leidenschaft für die Psychologie, insbesondere im Bereich der Gesundheitspsychologie und
              zwischenmenschlichen Beziehungen.
            </Typography>
          </section>
          <section>
            <Typography variant="h6" component="h2" sx={{ mt: 5 }}>
              Mein therapeutischer Ansatz
            </Typography>
            <Typography component="p" sx={{ mt: 2 }}>
              Ich bin fest davon überzeugt, dass in jedem Menschen einzigartige Ressourcen schlummern, die es
              ermöglichen, Herausforderungen zu meistern. Durch die Kombination fundierter verhaltenstherapeutischer
              Methoden mit systemischen und hypnotherapeutischen Ansätzen begleite ich meine Klient*innen auf ihrem
              individuellen Weg zu mehr Wohlbefinden. Dieser persönliche Ansatz spiegelt meine Leidenschaft und mein
              Engagement wider, Menschen in jeder Lebenslage einfühlsam zu unterstützen.
            </Typography>
            <Divider sx={{ mt: 5, mb: 2 }} />
          </section>

          <section>
            <Typography variant="h6" component="h2" sx={{ mt: 5 }}>
              Weiterbildungen & Zusatzausbildungen
            </Typography>
            <Typography component="p" sx={{ mt: 1 }}>
              Um meine fachliche Kompetenz zu erweitern und meinen persönlichen Ansatz zu vertiefen, habe ich mich in
              verschiedenen therapeutischen Methoden weitergebildet:
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0, m: 0 }}>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2 }}>
                  Systemische Therapie – mit Fokus auf die Dynamik in Familien- und Paarbeziehungen.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2 }}>
                  Klinische Hypnose – der Einsatz von Trance und Suggestion, um therapeutische Prozesse zu unterstützen.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2 }}>
                  Ego-State-Therapie – die Arbeit mit unterschiedlichen Persönlichkeitsanteilen zur Traumabewältigung.
                </Typography>
              </Box>
            </Box>
          </section>

          <section>
            <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
              Berufliche Erfahrung
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0, m: 0 }}>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2 }}>
                  In der psychotherapeutischen Praxis von Dipl.-Psych. Maria Schnell sammelte ich wertvolle
                  Praxiserfahrungen.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p">
                  Durchführung von verhaltenstherapeutischen Einzel- und Gruppensitzungen, die mir halfen, Theorie und
                  Praxis zu verbinden.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2 }}>
                  Einsatz klinischer Hypnose bei der Behandlung von Angst- und Belastungsstörungen – ein innovativer
                  Ansatz, den ich mit Begeisterung verfolge.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2 }}>
                  Systemische Beratung für Paare und Familien, bei der ich meine empathischen Fähigkeiten
                  weiterentwickeln konnte.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2 }}>
                  Ambulante Betreuung bei Pinel Berlin – hier lernte ich, wie wichtig ein ganzheitlicher Ansatz im
                  Alltag ist.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p">
                  Unterstützung psychisch erkrankter Menschen im Alltag, was mir zeigte, wie bedeutsam individuelle
                  Hilfe ist.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2 }}>
                  Entwicklung von Bewältigungsstrategien und Krisenintervention – Erfahrungen, die mich persönlich und
                  fachlich wachsen ließen.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2 }}>
                  Forschungspraktikum an der Humboldt Universität, wo ich die wissenschaftliche Basis meiner
                  therapeutischen Arbeit vertiefte.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p">
                  Wissenschaftliche Untersuchungen zur Wirkung von Hypnose auf das Schmerzempfinden – ein spannendes
                  Feld, das mein Interesse für alternative Therapieansätze weiter beflügelte.
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="p" sx={{ mt: 2 }}>
                  Mitarbeit an klinischen Studien und Datenauswertungen – hierbei konnte ich meine analytischen
                  Fähigkeiten und mein Engagement für evidenzbasierte Therapie unter Beweis stellen.
                </Typography>
              </Box>
            </Box>
          </section>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Vita;