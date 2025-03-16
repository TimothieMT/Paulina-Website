import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Content = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(src/assets/logos/istockphoto-2158576842-1024x1024.jpg)',
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
      />
      <Box sx={{ px: isSmallScreen ? 2 : 10, py: 5, maxWidth: isSmallScreen ? '900px' : 'none', mx: isSmallScreen ? 'auto' : 'none' }}>
        <Typography variant="h3" gutterBottom align={isSmallScreen ? 'center' : 'left'}>
          Über mich
        </Typography>
        <Typography variant="h6">
          Mein Name ist Paulina Tolk und ich bin Psychologin mit einem Master of Science in Klinischer- und Gesundheitspsychologie
          der Freien Universität Berlin. Schon während meines Studiums habe ich mich intensiv mit der Erforschung psychologischer Prozesse beschäftigt,
          insbesondere mit der psychometrischen Überprüfung der Pain Catastrophizing Scale for Children (PCS-C), welche Thema meiner Masterarbeit war.
        </Typography>
        <Typography variant="h6">
          Meine berufliche Leidenschaft liegt in der psychotherapeutischen Arbeit, insbesondere in der Verhaltenstherapie, der Klinischen Hypnose und
          der Systemischen Therapie. Durch verschiedene Weiterbildungen und praktische Tätigkeiten habe ich meine therapeutischen Fähigkeiten
          stetig weiterentwickelt. Derzeit absolviere ich eine Ausbildung zur Verhaltenstherapeutin am BFA Berlin und arbeite in einer psychotherapeutischen Praxis,
          wo ich Verhaltenstherapie, Klinische Hypnose und Systemische Paartherapie anwende.
        </Typography>
        <Typography variant="h6">
          Neben meiner praktischen Tätigkeit habe ich wertvolle Erfahrungen in der psychologischen Betreuung psychisch kranker Menschen gesammelt,
          sowohl in ambulanten Wohngruppen als auch in der Forschungsarbeit zur Schmerzreduktion durch Klinische Hypnose. Meine Arbeit ist geprägt von Empathie,
          wissenschaftlicher Fundierung und einem ganzheitlichen Ansatz zur psychischen Gesundheit.
        </Typography>
        <Typography variant="h6">
          Ich bin dreisprachig aufgewachsen und spreche fließend Deutsch, Polnisch und Englisch, was mir ermöglicht, in verschiedenen kulturellen Kontexten zu arbeiten.
          Zudem nutze ich moderne technologische Hilfsmittel, um meine Arbeit effizient zu gestalten. Durch meine Sehbehinderung habe ich eine besondere Sensibilität für die Herausforderungen
          und Stärken von Menschen mit besonderen Bedürfnissen entwickelt und setze mich aktiv für Vielfalt und Inklusion ein.
        </Typography>
        <Typography variant="h6">
          Mein Ziel ist es, Menschen auf ihrem individuellen Weg zur psychischen Gesundheit zu begleiten und ihnen durch wissenschaftlich fundierte Methoden
          nachhaltige Unterstützung zu bieten.
        </Typography>
      </Box>
    </>
  );
};

export default Content;