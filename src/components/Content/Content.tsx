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
          textAlign: 'center',
        }}
      >
        {/* Bild volle Breite, Höhe automatisch */}
        <Box
          component="img"
          src="/forestBeach.jpg"
          alt="Ein schmaler, geschwungener Sandweg führt durch einen lichten Wald mit hohen, schlanken Bäumen entlang einer sanften, grasbewachsenen Böschung direkt am Meer."
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            mb: 4,
          }}
        />

        {/* Zitat zentriert */}
        <Box
          component="section"
          sx={{
            backgroundColor: '#efeeee',
            width: { xs: '90%', sm: '70%' },
            p: { xs: 2, sm: 4 },
            marginBottom: 8,
            marginTop: 8,
          }}
        >
          <Typography variant={isSmallScreen ? 'h5' : 'h3'} fontWeight={200} component="blockquote">
            „Verstehen kann man das Leben nur rückwärts. Leben muss man es vorwärts.“
          </Typography>
          <Typography mt={2} fontWeight={100} component="cite">
            - Søren Kierkegaard -
          </Typography>
        </Box>

        {/* Text systemische Therapie zentriert */}
        <Box
          component="section"
          sx={{
            maxWidth: '800px',
            px: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Systemische Therapie
          </Typography>
          <Typography variant="body1" gutterBottom>
            Die systemische Therapie ist ein Ansatz, der den Menschen nicht isoliert, sondern als Teil eines größeren sozialen Kontexts betrachtet.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Im Mittelpunkt stehen die Wechselwirkungen in Familien, Partnerschaften und anderen sozialen Gruppen, die oft den Kern individueller Probleme bilden.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Durch gezielte Methoden wie zirkuläres Fragen, Reframing und Aufstellungstechniken werden Kommunikationsmuster und Interaktionsstrukturen analysiert und verändert.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Dieser Ansatz betont, dass jeder Beteiligte sowohl Ursache als auch Wirkung sein kann – so werden Schuldzuweisungen vermieden und gemeinsame Lösungswege gefunden.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Insgesamt unterstützt die systemische Therapie dabei, Konflikte zu lösen, gesündere Beziehungsstrukturen zu entwickeln und nachhaltige Veränderungen im gesamten System zu bewirken.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Content;
