import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
} from '@mui/material';

const Impressum = () => {
  return (
    <Container maxWidth="xl" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'start',
      backgroundColor: '#efeeee',
      p: { xs: 2, sm: 4 },
    }}>
      <Box
        sx={{
          px: { xs: 4, md: 4 },
          py: { xs: 4, md: 4 },
          color: '#383838',
          width: '80%',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Impressum
        </Typography>
        <Typography>
          Privatpraxis für Psychotherapie und Coaching, zugelassen zur Psychotherapie nach dem Heilpraktikergesetz
        </Typography>
              <Typography>M.Sc. Psych., HP Psych. Paulina Tolk</Typography>
              <Typography>Systemische Therapeutin und Beraterin (SG)</Typography>
              <Typography>Praxis für Psychotherapie</Typography>
              <Typography>Heilpraktikerin für Psychotherapie</Typography>
              <Typography>Beckergrube 2</Typography>
              <Typography>23552 Lübeck</Typography>
              <Box></Box>
              <Typography>
                Mobil:{" "}
                <MuiLink
                  href="tel:017643608599"
                  underline="none"
                  sx={{
                    backgroundColor: 'transparent',
                    color: '#383838',
                    fontWeight: 300,
                    '&:hover': { color: '#85ab7f' },
                  }}
                >
                  0176 43 60 85 99
                </MuiLink>
              </Typography>
              <Typography>
                E-Mail{" "}
                <MuiLink
                  href="mailto:info@paulinatolk.de"
                  underline="none"
                  sx={{
                    backgroundColor: 'transparent',
                    color: '#383838',
                    fontWeight: 300,
                    '&:hover': { color: '#85ab7f' },
                  }}
                >
                  therapie.tolk@gmail.com
                </MuiLink>
              </Typography>
        <Box height={20}></Box>
        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          Inhaltlich Verantwortlich gemäß § 10 Absatz 3 MDStV:
        </Typography>
          <Typography>M.Sc. Psych., HP Psych. Paulina Tolk</Typography>
          <Typography>Systemische Therapeutin und Beraterin (SG)</Typography>
          <Typography>Praxis für Psychotherapie</Typography>
          <Typography>Heilpraktikerin für Psychotherapie</Typography>
          <Typography>Beckergrube 2</Typography>
          <Typography>23552 Lübeck</Typography>
        <Box height={20}></Box>
        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          Aufsichtsbehörden
        </Typography>
        <Typography>
          Gesundheitsamt Lübeck, Sophienstraße 2-8, 23539 Lübeck
        </Typography>
        <Typography>
          Gesundheitsamt Hamburg, Harburger Rathauspassage 2, 21073 Hamburg
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          Gesetzliche Berufsbezeichnung
        </Typography>

        <Typography>
          Heilpraktikerin eingeschränkt auf das Gebiet der Psychotherapie, Erlaubniserteilung von der Behörde für Gesundheit und Verbraucherschutz der Freien und Hansestadt Hamburg am 23.09.2014
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          Zuständiges Finanzamt
        </Typography>
        <Typography>
          Finanzamt Lübeck, Possehlstraße 4, 23560 Lübeck
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          Umsatzsteuer
        </Typography>
        <Typography>
          Heilkundliche Tätigkeit ist von der Umsatzsteuer gemäß § 4 Nr. 14 UStG befreit.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          Berufshaftpflicht
        </Typography>
        <Typography>
          Die Continentale Landesdirektion, Zellerer GmbH, 81476 München
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          Berufsverbände
        </Typography>

        <Typography>
          Verband Freier Psychotherapeuten, Heilpraktiker für Psychotherapie und psychologischer Berater e.V.
          <MuiLink href="https://www.vfp.de/" target="_blank" underline="none">
            www.vfp.de
          </MuiLink>
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          Haftungsausschluss
        </Typography>
        <Typography>
          Die Inhalte meiner Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
        </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          Haftung für Links
        </Typography>
        <Typography sx={{ mb: 10 }}>
          Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren um Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
        </Typography>

      </Box>
    </Container>
  );
};

export default Impressum;