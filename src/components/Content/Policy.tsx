import { Helmet } from 'react-helmet';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
  typography: {
    h4: {
      fontFamily: 'medium, sans-serif',
      fontSize: '2rem',
    },
    h1: {
      fontFamily: 'medium, sans-serif',
      fontSize: '2rem',

    },
    h2: {
      fontFamily: 'regular, sans-serif',
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: 'regular, sans-serif',
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: 'medium, sans-serif',
      fontSize: '1.5rem',
    },
    p: {
      fontFamily: 'thin, sans-serif',
      fontSize: '0.8rem',
      color: '#737373',
    },
    body1: {
      fontFamily: 'regular, sans-serif',
      fontSize: '1rem',
      color: '#737373',
    },
    subtitle1: {
      fontFamily: 'light, sans-serif',
      fontSize: '1.1rem',
      color: '#737373',
    },
    body2: {
      fontFamily: 'light, sans-serif',
      fontSize: '1rem',
      color: '#737373',
    }
  },
});

const Policy = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ThemeProvider theme={customTheme}>
    <Helmet>
        <title>Datenschutzerklärung – Psychotherapie Praxis Lübeck | Paulina Tolk</title>
        <meta
          name="description"
          content="Lesen Sie die Datenschutzerklärung der Psychotherapie Praxis in Lübeck von M.Sc. Psych., HP Psych. Paulina Tolk. Alle Informationen zum Datenschutz und zur Datenverarbeitung finden Sie hier."
        />
      </Helmet>
      <Box
        ref={ref}
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          p: { xs: 2, sm: 4 },
        }}
      >
        {inView && (
          <Box
            component="section"
            aria-labelledby="services-heading"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              p: { xs: 2, sm: 4 },
            }}
          >
            <Box
              sx={{
                backgroundColor: '#efeeee',
                width: '100%',
                maxWidth: { xs: '100%', sm: '70%' },
                p: { xs: 2, sm: 4 },
              }}
            >
              <Typography variant="h4" component="h1" gutterBottom>
                Datenschutzerklärung
              </Typography>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  1. Datenschutz auf einen Blick – Allgemeine Hinweise
                </Typography>
                <Typography component="p" paragraph>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen entnehmen Sie dieser Datenschutzerklärung.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  2. Hosting
                </Typography>
                <Typography component="p" paragraph>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                  <br />
                  <strong>Hetzner</strong>
                  <br />
                  Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen
                  <br />
                  Details entnehmen Sie der Datenschutzerklärung von Hetzner:{' '}
                  <MuiLink href="https://www.hetzner.com/de/legal/privacy-policy/" target="_blank">
                    https://www.hetzner.com/de/legal/privacy-policy/
                  </MuiLink>
                  <br />
                  Die Nutzung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Sofern Sie eine entsprechende Einwilligung erteilt haben, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Auftragsverarbeitung
                </Typography>
                <Typography component="p" paragraph>
                  Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Dadurch wird sichergestellt, dass die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet werden.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  3. Allgemeine Hinweise und Pflichtinformationen Datenschutz
                </Typography>
                <Typography component="p" paragraph>
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln diese vertraulich und gemäß den gesetzlichen Datenschutzvorschriften. Bei der Nutzung unserer Website werden verschiedene personenbezogene Daten erhoben, die in dieser Datenschutzerklärung erläutert werden. Bitte beachten Sie, dass bei der Datenübertragung im Internet Sicherheitslücken bestehen können, sodass ein vollständiger Schutz nicht gewährleistet werden kann.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Besondere Kategorien personenbezogener Daten (Gesundheitsdaten)
                </Typography>
                <Typography component="p" paragraph>
                  Da es sich um eine psychotherapeutische Praxis handelt, verarbeiten wir im Rahmen der Terminvereinbarung und Behandlung auch sensible Gesundheitsdaten. Diese Daten unterliegen einem besonderen Schutz und werden ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung oder gesetzlicher Vorgaben verarbeitet.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Hinweis zur verantwortlichen Stelle
                </Typography>
                <Typography component="p" paragraph>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </Typography>
                <Typography component="p" paragraph>
                  M.Sc. Psych., HP Psych. Paulina Tolk
                  <br />
                  Systemische Therapeutin und Beraterin (SG)
                  <br />
                  Praxis für Psychotherapie
                  <br />
                  Beckergrube 2
                  <br />
                  23552 Lübeck
                  <br />
                  Mobil:{' '}
                  <MuiLink href="tel:017643608599" underline="none" color={"#737373"}>
                    0176 43 60 85 99
                  </MuiLink>
                  <br />
                  E-Mail:{' '}
                  <MuiLink href="mailto:therapie.tolk@gmail.com" underline="none" color={"#737373"}>
                    therapie.tolk@gmail.com
                  </MuiLink>
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Speicherdauer
                </Typography>
                <Typography component="p" paragraph>
                  Sofern in dieser Datenschutzerklärung nichts anderes angegeben wird, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck der Datenverarbeitung entfällt. Sollten Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten gelöscht, sofern keine anderen rechtlich zulässigen Gründe einer weiteren Speicherung entgegenstehen.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
                </Typography>
                <Typography component="p" paragraph>
                  Erfolgt die Verarbeitung Ihrer Daten auf Grundlage Ihrer Einwilligung, geschieht dies auf Basis von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO (bei besonderen Datenkategorien). Bei ausdrücklicher Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Verarbeitung zudem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Für die Speicherung von Cookies oder den Zugriff auf Endgeräte (z. B. via Device-Fingerprinting) greifen wir auf § 25 Abs. 1 TDDDG zurück. Wird die Verarbeitung zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen benötigt, erfolgt diese auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Ebenso verarbeiten wir Daten zur Erfüllung gesetzlicher Verpflichtungen auf Basis von Art. 6 Abs. 1 lit. c DSGVO. Darüber hinaus kann die Verarbeitung auch auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) erfolgen.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Empfänger von personenbezogenen Daten
                </Typography>
                <Typography component="p" paragraph>
                  Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen, an die personenbezogene Daten – sofern erforderlich – weitergegeben werden. Dies geschieht z. B. im Rahmen von Vertragserfüllungen oder gesetzlicher Verpflichtungen.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Widerruf Ihrer Einwilligung zur Datenverarbeitung
                </Typography>
                <Typography component="p" paragraph>
                  Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die bis zum Widerruf erfolgte Datenverarbeitung bleibt hiervon unberührt.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                </Typography>
                <Typography component="p" paragraph>
                  Erfolgt die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO, haben Sie das Recht, aus Gründen Ihrer besonderen Situation Widerspruch einzulegen – auch hinsichtlich eines darauf basierenden Profilings. Werden Ihre Daten zur Direktwerbung verarbeitet, können Sie dieser Verarbeitung jederzeit widersprechen.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde
                </Typography>
                <Typography component="p" paragraph>
                  Im Falle von Verstößen gegen die DSGVO haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren – insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Recht auf Datenübertragbarkeit
                </Typography>
                <Typography component="p" paragraph>
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder zur Vertragserfüllung automatisiert verarbeiten, in einem gängigen, maschinenlesbaren Format zu erhalten oder direkt an einen anderen Verantwortlichen übermitteln zu lassen.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Auskunft, Berichtigung und Löschung
                </Typography>
                <Typography component="p" paragraph>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und Zweck der Verarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Recht auf Einschränkung der Verarbeitung
                </Typography>
                <Typography component="p" paragraph>
                  Sie haben das Recht, die Verarbeitung Ihrer personenbezogenen Daten einzuschränken – etwa wenn Sie die Richtigkeit der bei uns gespeicherten Daten bestreiten, die Verarbeitung unrechtmäßig erfolgte oder wenn Sie die Daten zur Geltendmachung von Rechtsansprüchen benötigen.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Datensicherheit
                </Typography>
                <Typography component="p" paragraph>
                  Wir treffen alle notwendigen technischen und organisatorischen Maßnahmen, um Ihre personenbezogenen Daten gegen Verlust, Missbrauch, unberechtigten Zugriff, Weitergabe, Veränderung oder Zerstörung zu schützen.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  4. Plugins und Tools – Google Fonts
                </Typography>
                <Typography component="p" paragraph>
                  Diese Seite nutzt Google Fonts zur einheitlichen Darstellung von Schriftarten. Beim Aufruf werden die Fonts in den Cache Ihres Browsers geladen und es wird eine Verbindung zu den Servern von Google hergestellt, wodurch Google Ihre IP-Adresse erfährt. Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Sollte Ihr Browser Google Fonts nicht unterstützen, wird eine Standardschrift verwendet.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  EU-US Data Privacy Framework (DPF)
                </Typography>
                <Typography component="p" paragraph sx={{ mb: 10 }}>
                  Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Dieses Abkommen zwischen der Europäischen Union und den USA gewährleistet die Einhaltung europäischer Datenschutzstandards bei der Datenverarbeitung in den USA. Weitere Informationen erhalten Sie unter{' '}
                  <MuiLink href="https://www.dataprivacyframework.gov/participant/5780" target="_blank">
                    https://www.dataprivacyframework.gov/participant/5780
                  </MuiLink>.
                </Typography>
              </section>

              <section>
                <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
                  Änderungen dieser Datenschutzerklärung
                </Typography>
                <Typography component="p" paragraph>
                  Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen. Bitte informieren Sie sich regelmäßig über den aktuellen Stand der Datenschutzerklärung.
                </Typography>
              </section>
            </Box>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Policy;