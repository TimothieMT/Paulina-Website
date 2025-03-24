import { Helmet } from 'react-helmet';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Content = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Helmet>
        <title>Systemische Therapie – Psychotherapie in Lübeck | Paulina Tolk</title>
        <meta
          name="description"
          content="Erfahren Sie mehr über den Ansatz der systemischen Therapie, bei der der Mensch als Teil eines größeren sozialen Kontexts betrachtet wird. Optimieren Sie Ihre Beziehungen und Kommunikationsmuster."
        />
      </Helmet>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: { xs: 4, sm: 10 },
          mb: { xs: 4, sm: 8 },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Box
          component="section"
          sx={{
            backgroundColor: '#efeeee',
            width: { xs: '90%', sm: '70%' },
            p: { xs: 2, sm: 4 },
            textAlign: 'center',
            marginTop: '100px',
            marginBottom: '130px',
            justifyItems: 'end',
            letterSpacing: 0.9,
            lineHeight: 2,
          }}
        >
          <Typography variant={isSmallScreen ? 'h5' : 'h3'} fontWeight={200} component="blockquote" sx={{ letterSpacing: 0.9, lineHeight: 2 }}>
            „Verstehen kann man das Leben nur rückwärts. Leben muss man es vorwärts.“
          </Typography>
          <Typography mt={2} fontWeight={100} component="cite">
            - Søren Kierkegaard -
          </Typography>
        </Box>
        {/* Layout-Bereich: Bei Desktop: Text links, Bild rechts (Bild nimmt mehr Platz) */}
        <Box
          component="section"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            mt: 4,
            mb: 4,
          }}
        >
          {/* Text: Bei Desktop links, bei Smartphone unten */}
          <Box
            sx={{
              flex: { xs: 'unset', md: 1 },
              order: { xs: 2, md: 1 },
              p: 2
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ letterSpacing: 0.9, lineHeight: 2, marginBottom: 3 }}>
              Systemische Therapie
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ letterSpacing: 0.9, lineHeight: 2, marginBottom: 3 }}>
              Die systemische Therapie ist ein Ansatz, der den Menschen nicht isoliert, sondern als Teil eines größeren sozialen Kontexts betrachtet.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ letterSpacing: 0.9, lineHeight: 2, marginBottom: 3 }}>
              Im Mittelpunkt stehen die Wechselwirkungen in Familien, Partnerschaften und anderen sozialen Gruppen, die oft den Kern individueller Probleme bilden.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ letterSpacing: 0.9, lineHeight: 2, marginBottom: 3 }}>
              Durch gezielte Methoden wie zirkuläres Fragen, Reframing und Aufstellungstechniken werden Kommunikationsmuster und Interaktionsstrukturen analysiert und verändert.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ letterSpacing: 0.9, lineHeight: 2, marginBottom: 3 }}>
              Dieser Ansatz betont, dass jeder Beteiligte sowohl Ursache als auch Wirkung sein kann – so werden Schuldzuweisungen vermieden und gemeinsame Lösungswege gefunden.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ letterSpacing: 0.9, lineHeight: 2, marginBottom: 3 }}>
              Insgesamt unterstützt die systemische Therapie dabei, Konflikte zu lösen, gesündere Beziehungsstrukturen zu entwickeln und nachhaltige Veränderungen im gesamten System zu bewirken.
            </Typography>
          </Box>

          {/* Bild: Bei Desktop rechts, bei Smartphone oben */}
          <Box
            sx={{
              flex: { xs: 'unset', md: 2 },
              order: { xs: 1, md: 2 },
              p: 2,
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <Box
              component="img"
              src="/forestBeach.jpg"
              alt="Ein schmaler, geschwungener Sandweg führt durch einen lichten Wald mit hohen, schlanken Bäumen entlang einer sanften, grasbewachsenen Böschung direkt am Meer. Links erstreckt sich die ruhige, blau-türkise See bis zum Horizont, während rechts die Baumstämme und ein leicht hügeliges, mit trockenem Gras bewachsenes Gelände eine ruhige, naturbelassene Atmosphäre schaffen. Sonnenlicht fällt stellenweise zwischen den Baumkronen hindurch und erzeugt ein sanftes Lichtspiel auf dem Boden."
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Content;