import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Content = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: { xs: 4, sm: 10 },
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
        <Typography mt={2} fontWeight={100}>
          - Søren Kierkegaard
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', mt: 4, mb: 4, width: '100%' }}>
        <Box
          component="img"
          src="/forest.jpg"
          alt="Logo"
          sx={{
            width: '100%',
            height: 'auto',
            filter: 'brightness(50%)',
            marginTop: '40px',
          }}
        />
        <Box
          sx={
            isSmallScreen
              ? {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'flex-start',
                backgroundColor: '#efeeee',
                width: '90%',
                p: 2,
              }
              : {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#efeeee',
                textAlign: 'center',
                p: 4,
                maxWidth: 'max-content',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }
          }
        >
          <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 5 }}>
            Systemische Therapie
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            Die systemische Therapie ist ein Ansatz, der den Menschen nicht isoliert, sondern als Teil eines größeren sozialen Kontexts betrachtet.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            Im Mittelpunkt stehen die Wechselwirkungen in Familien, Partnerschaften und anderen sozialen Gruppen, die oft den Kern individueller Probleme bilden.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            Durch gezielte Methoden wie zirkuläres Fragen, Reframing und Aufstellungstechniken werden Kommunikationsmuster und Interaktionsstrukturen analysiert und verändert.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            Dieser Ansatz betont, dass jeder Beteiligte sowohl Ursache als auch Wirkung sein kann – so werden Schuldzuweisungen vermieden und gemeinsame Lösungswege gefunden.
          </Typography>
          <Typography variant="body1">
            Insgesamt unterstützt die systemische Therapie dabei, Konflikte zu lösen, gesündere Beziehungsstrukturen zu entwickeln und nachhaltige Veränderungen im gesamten System zu bewirken.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;