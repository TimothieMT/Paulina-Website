import { Helmet } from 'react-helmet';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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

      {/* Bild volle Breite, Höhe automatisch */}
      <Box
        component="img"
        src="/forestBeach.jpg"
        alt="Ein schmaler, geschwungener Sandweg führt durch einen lichten Wald mit hohen, schlanken Bäumen entlang einer sanften, grasbewachsenen Böschung direkt am Meer."
        sx={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
        }}
      />

      {/* Zitat zentriert */}
      <Box
        component="section"
        sx={{
          backgroundColor: '#efeeee',
          color: '#737373',
          width: { xs: '90%', sm: '70%' },
          p: { xs: 2, sm: 4 },
          mx: 'auto',
          textAlign: 'center',
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
          maxWidth: '100%',
          px: 2,
          textAlign: 'center',
          marginTop: 5,
          color: '#737373',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Systemische Therapie
        </Typography>
      </Box>

      {/* Grid-Container mit nebeneinander angeordneten Items */}
      <Grid
        container
        spacing={3}
        wrap={isSmallScreen ? "wrap" : "nowrap"}
        marginBottom={10}
        marginTop={5}
        marginRight={3}
        marginLeft={3}
      >
        <Grid xs={12} md={4}>
          <Item sx={{ backgroundColor: '#efeeee', height: 'auto', width: '100%', boxShadow: 'none' }}>
            <Typography variant="body1" gutterBottom>
              Die systemische Therapie ist ein Ansatz, der den Menschen nicht isoliert, sondern als Teil eines größeren sozialen Kontexts betrachtet.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Im Mittelpunkt stehen die Wechselwirkungen in Familien, Partnerschaften und anderen sozialen Gruppen, die oft den Kern individueller Probleme bilden.
            </Typography>
          </Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item sx={{ backgroundColor: '#efeeee', height: 'auto', width: '100%', boxShadow: 'none' }}>
            <Typography variant="body1" gutterBottom>
              Durch gezielte Methoden wie zirkuläres Fragen, Reframing und Aufstellungstechniken werden Kommunikationsmuster und Interaktionsstrukturen analysiert und verändert.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Dieser Ansatz betont, dass jeder Beteiligte sowohl Ursache als auch Wirkung sein kann – so werden Schuldzuweisungen vermieden und gemeinsame Lösungswege gefunden.
            </Typography>
          </Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item sx={{ backgroundColor: '#efeeee', height: 'auto', width: '100%', boxShadow: 'none' }}>
            <Typography variant="body1" gutterBottom>
              Insgesamt unterstützt die systemische Therapie dabei, Konflikte zu lösen, gesündere Beziehungsstrukturen zu entwickeln und nachhaltige Veränderungen im gesamten System zu bewirken.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Content;