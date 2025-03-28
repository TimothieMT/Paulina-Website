import { Helmet } from 'react-helmet';
import { Box, Typography, Link as MuiLink } from '@mui/material';

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum – Psychotherapie Praxis Lübeck | Paulina Tolk</title>
        <meta
          name="description"
          content="Impressum – Informationen zur Privatpraxis für Psychotherapie und Coaching von M.Sc. Psych., HP Psych. Paulina Tolk in Lübeck. Alle rechtlichen Angaben im Überblick."
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
          <Typography variant="h4" component="h1" gutterBottom>
            Impressum
          </Typography>

          <Typography component="p" sx={{ mb: 3 }}>
            Angaben gemäß § 5 TMG
          </Typography>

          <Typography component="p">
            Privatpraxis für Psychotherapie und Coaching, zugelassen zur Psychotherapie nach dem Heilpraktikergesetz
          </Typography>

          <Box component="address" sx={{ fontStyle: 'normal', mt: 2 }}>
            <Typography component="p">M.Sc. Psych., HP Psych. Paulina Tolk</Typography>
            <Typography component="p">Systemische Therapeutin und Beraterin (SG)</Typography>
            <Typography component="p">Praxis für Psychotherapie</Typography>
            <Typography component="p">Beckergrube 2</Typography>
            <Typography component="p">23552 Lübeck</Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography component="p">
              Mobil:{' '}
              <MuiLink
                href="tel:017643608599"
                underline="none"
                sx={{
                  backgroundColor: 'transparent',
                  color: '#383838',
                  '&:hover': { color: '#85ab7f' },
                }}
              >
                0176 43 60 85 99
              </MuiLink>
            </Typography>
            <Typography component="p">
              E-Mail:{' '}
              <MuiLink
                href="mailto:therapie.tolk@gmail.com"
                underline="none"
                sx={{
                  backgroundColor: 'transparent',
                  color: '#383838',
                  '&:hover': { color: '#85ab7f' },
                }}
              >
                therapie.tolk@gmail.com
              </MuiLink>
            </Typography>
          </Box>

          {/* Inhaltlich Verantwortlicher */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Inhaltlich Verantwortlich gemäß § 10 Absatz 3 MDStV:
            </Typography>
            <Box component="address">
              <Typography component="p">M.Sc. Psych., HP Psych. Paulina Tolk</Typography>
              <Typography component="p">Systemische Therapeutin und Beraterin (SG)</Typography>
              <Typography component="p">Praxis für Psychotherapie</Typography>
              <Typography component="p">Beckergrube 2</Typography>
              <Typography component="p">23552 Lübeck</Typography>
            </Box>
          </Box>

          {/* Aufsichtsbehörden */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Aufsichtsbehörden
            </Typography>
            <Typography component="p">
              Gesundheitsamt Lübeck, Sophienstraße 2-8, 23539 Lübeck
            </Typography>
            <Typography component="p">
              Gesundheitsamt Hamburg, Harburger Rathauspassage 2, 21073 Hamburg
            </Typography>
          </Box>

          {/* Gesetzliche Berufsbezeichnung */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Gesetzliche Berufsbezeichnung
            </Typography>
            <Typography component="p">
              Heilpraktikerin eingeschränkt auf das Gebiet der Psychotherapie, Erlaubniserteilung von der Behörde für
              Gesundheit und Verbraucherschutz der Freien und Hansestadt Hamburg am 23.09.2014
            </Typography>
          </Box>

          {/* Zuständiges Finanzamt */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Zuständiges Finanzamt
            </Typography>
            <Typography component="p">
              Finanzamt Lübeck, Possehlstraße 4, 23560 Lübeck
            </Typography>
          </Box>

          {/* Umsatzsteuer */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Umsatzsteuer
            </Typography>
            <Typography component="p">
              Heilkundliche Tätigkeit ist von der Umsatzsteuer gemäß § 4 Nr. 14 UStG befreit.
            </Typography>
          </Box>

          {/* Berufshaftpflicht */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Berufshaftpflicht
            </Typography>
            <Typography component="p">
              Die Continentale Landesdirektion, Zellerer GmbH, 81476 München
            </Typography>
          </Box>

          {/* Berufsverbände */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Berufsverbände
            </Typography>
            <Typography component="p">
              Verband Freier Psychotherapeuten, Heilpraktiker für Psychotherapie und psychologischer Berater e.V.{' '}
              <MuiLink href="https://www.vfp.de/" target="_blank" underline="none">
                www.vfp.de
              </MuiLink>
            </Typography>
          </Box>

          {/* Haftungsausschluss */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Haftungsausschluss
            </Typography>
            <Typography component="p">
              Die Inhalte meiner Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
              der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
              von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
              ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
            </Typography>
          </Box>

          {/* Haftung für Links */}
          <Box sx={{ mt: 5, mb: 10 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Haftung für Links
            </Typography>
            <Typography component="p">
              Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb
              kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
              der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren um Zeitpunkt der Verlinkung nicht
              erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Impressum;