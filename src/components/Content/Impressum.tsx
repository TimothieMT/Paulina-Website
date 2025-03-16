import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
} from '@mui/material';

const Impressum = () => {
  return (
    <Container maxWidth="xl">
      {/* Äußere Box als Wrapper */}
      <Box>
        <Typography variant="h4" gutterBottom>
          Impressum
        </Typography>

        {/* § 5 TMG */}
        <Typography variant="h6" gutterBottom>
          Angaben gemäß § 5 TMG
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Ostseetherapie Denise Fittkau</strong>
        </Typography>
        <Typography >
          Privatpraxis für Verhaltenstherapie<br />
          Denise Fittkau<br />
          Beckergrube 2<br />
          23552 Lübeck
        </Typography>

        {/* Kontakt */}
        <Typography variant="h6" gutterBottom>
          Kontakt
        </Typography>
        <Typography >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              <strong>Mobil:</strong>{' '}
              <MuiLink
                href="tel:0175 60 04 02 8"
                underline="none"
                title="Privatpraxis für Verhaltenstherapie anrufen"
              >
                0175 60 04 02 8
              </MuiLink>
            </Box>
            <Box>
              <strong>E-Mail:</strong>{' '}
              <MuiLink
                href="mailto:info@ostseetherapie.de"
                underline="none"
                title="Eine E-Mail an Privatpraxis für Verhaltenstherapie senden"
              >
                info@ostseetherapie.de
              </MuiLink>
            </Box>
          </Box>
        </Typography>

        {/* Redaktionell Verantwortlicher */}
        <Typography variant="h6" gutterBottom>
          Redaktionell Verantwortlicher
        </Typography>
        <Typography >
          <strong>Ostseetherapie Denise Fittkau</strong><br />
          Privatpraxis für Verhaltenstherapie<br />
          Denise Fittkau
        </Typography>

        {/* Gesetzliche Vertreter */}
        <Typography variant="h6" gutterBottom>
          Gesetzliche Vertreter
        </Typography>
        <Typography >
          Denise Fittkau
        </Typography>

        {/* Umsatzsteuer */}
        <Typography variant="h6" gutterBottom>
          Umsatzsteuer
        </Typography>
        <Typography >
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz entfällt, da nach § 4 Nr. 14 UStG
          psychotherapeutische Leistungen als heilberufliche Leistungen mehrwertsteuerbefreit sind.
        </Typography>

        {/* Steuernummer */}
        <Typography variant="h6" gutterBottom>
          Steuernummer
        </Typography>
        <Typography >22/118/62195</Typography>

        {/* Arztregisternummer */}
        <Typography variant="h6" gutterBottom>
          Arztregisternummer:
        </Typography>
        <Typography >18578</Typography>

        {/* Gesetzliche Berufsbezeichnung */}
        <Typography variant="h6" gutterBottom>
          Gesetzliche Berufsbezeichnung:
        </Typography>
        <Typography >
          approbierte, psychologische Psychotherapeutin für Verhaltenstherapie
        </Typography>

        {/* Berufsbezeichnung wurde verliehen in */}
        <Typography variant="h6" gutterBottom>
          Berufsbezeichnung wurde verliehen in:
        </Typography>
        <Typography >
          Bundesrepublik Deutschland
        </Typography>

        {/* Berufsrechtliche Regelungen */}
        <Typography variant="h6" gutterBottom>
          Berufsrechtliche Regelungen:
        </Typography>
        <Typography >
          Gesetz über die Berufe der Psychologischen Psychotherapeuten (Psychotherapeutengesetz PsychThG) vom 16.06.1998
          (BGBL, S.1311) zuletzt geändert am 20.06.2002 (BGBL 1, S.1946,1996).<br />
          Die berufsrechtlichen Regelungen können über die vom Bundesministerium der Justiz und von der juris GmbH
          betriebene Homepage:{' '}
          <MuiLink
            href="http://www.gesetze-im-internet.de"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            title="Zur Webseite gesetze-im-internet.de"
          >
            http://www.gesetze-im-internet.de
          </MuiLink>{' '}
          eingesehen werden.
        </Typography>

        {/* Zuständige Aufsichtsbehörde */}
        <Typography variant="h6" gutterBottom>
          Zuständige Aufsichtsbehörde
        </Typography>
        <Typography >
          <strong>Psychotherapeutenkammer Schleswig-Holstein</strong><br />
          Sophienblatt 92-94<br />
          24114 Kiel
          <br /><br />
          <strong>Kontakt:</strong><br />
          Tel.: 0431-6611990<br />
          E-Mail:{' '}
          <MuiLink
            href="mailto:info@pksh.de"
            underline="none"
            title="E-Mail an Psychotherapeutenkammer SH"
          >
            info@pksh.de
          </MuiLink>
        </Typography>

        {/* Angaben zur Berufshaftpflichtversicherung */}
        <Typography variant="h6" gutterBottom>
          Angaben zur Berufshaftpflichtversicherung
        </Typography>
        <Typography >
          <strong>mailo Versicherung AG</strong><br />
          Riehler Str. 1<br />
          50668 Köln
        </Typography>

        {/* Streitschlichtung */}
        <Typography variant="h6" gutterBottom>
          Streitschlichtung
        </Typography>
        <Typography >
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <MuiLink
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            title="Plattform zur Online-Streitbeilegung (OS)"
          >
            https://ec.europa.eu/consumers/odr
          </MuiLink>.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /><br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </Typography>

        {/* Haftung für Inhalte */}
        <Typography variant="h6" gutterBottom>
          Haftung für Inhalte
        </Typography>
        <Typography >
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen.
        </Typography>
        <Typography >
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
          konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </Typography>

        {/* Haftung für Links */}
        <Typography variant="h6" gutterBottom>
          Haftung für Links
        </Typography>
        <Typography >
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
          können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
          stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar.
        </Typography>
        <Typography >
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </Typography>

        {/* Urheberrecht */}
        <Typography variant="h6" gutterBottom>
          Urheberrecht
        </Typography>
        <Typography >
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </Typography>
        <Typography >
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
          von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </Typography>
      </Box>
    </Container>
  );
};

export default Impressum;