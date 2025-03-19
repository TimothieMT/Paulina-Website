import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
} from '@mui/material';

const Policy = () => {
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
          Datenschutzerklärung
        </Typography>
        <Typography>
          Diese Datenschutzerklärung informiert Sie über unseren Umgang mit Ihren Daten. Damit die Verarbeitungen Ihrer Daten für Sie nachvollziehbar sind, möchten wir  Ihnen mit den folgenden Informationen einen Überblick zu diesen Verarbeitungen verschaffen. Um eine faire Verarbeitung zu gewährleisten, beinhaltet diese Datenschutzerklärung allgemeinen Angaben zu unserem Umgang mit Ihren Daten sowie Informationen über Ihre Rechte nach der Europäischen Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG). Verantwortlich für die Datenverarbeitung ist Christine Steffen (nachfolgend als »wir« oder »uns« bezeichnet).        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          I. Allgemeine Angaben
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          1. Kontakt
        </Typography>
        <Box sx={{ borderRadius: 1, height: '100%' }}>
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
        </Box>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          2. Rechtsgrundlagen
        </Typography>
        <Typography>
          Der datenschutzrechtliche Begriff »personenbezogene Daten« bezeichnet  alle Informationen, die sich auf einen bestimmten oder bestimmbaren  Menschen beziehen. Wir verarbeiten personenbezogene Daten unter Beachtung der  einschlägigen Datenschutzvorschriften, insbesondere der DSGVO und des BDSG. Eine Datenverarbeitung durch uns findet nur auf der Grundlage einer gesetzlichen Erlaubnis statt. Wir verarbeiten personenbezogene Daten nur mit Ihrer Einwilligung (Art. 6 Abs. 1 Buchst. a) DSGVO), zur Erfüllung eines Vertrags, dessen Vertragspartei Sie sind, oder auf Ihre  Anfrage zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1  Buchst. b) DSGVO), zur Erfüllung einer rechtlichen Verpflichtung (Art. 6  Abs.1 Buchst. c) DSGVO) oder wenn die Verarbeitung zu Wahrung unserer berechtigten Interessen oder den berechtigten Interessen eines Dritten erforderlich ist, sofern nicht Ihre Interessen oder Grundrechte und Grundfreiheiten, die den Schutz personenbezogener Daten erfordern, überwiegen (Art. 6 Abs. 1 Buchst. f) DSGVO).        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          3. Dauer der Speicherung
        </Typography>
        <Typography>
          Sofern sich aus den folgenden Hinweisen nichts anderes ergibt, speichern wir die Daten nur solange, wie es zur Erreichung des Verarbeitungszwecks oder für die Erfüllung unserer vertraglichen oder gesetzlichen Pflichten erforderlich ist. Solche gesetzlichen Aufbewahrungspflichten können sich insbesondere aus handels- oder steuerrechtlichen Vorschriften ergeben.        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          4. Empfänger der Daten
        </Typography>
        <Typography>
          Wir bedienen uns beauftragter Dienstleister für einzelne Verarbeitungen. Dazu gehören z.B. Hosting, Wartung und Support von IT-Systemen, Marketingmaßnahmen oder Akten- und Datenträgervernichtung. Diese Dienstleister verarbeiten die Daten nur nach ausdrücklicher Weisung und sind vertraglich zur Gewährleistung geeigneter technischer  und organisatorischer Maßnahmen zum Datenschutz verpflichtet.        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          5. Verarbeitung bei der Ausübung Ihrer Rechte gem. Art. 12 bis 22 DSGVO
        </Typography>
        <Typography>
          Wenn Sie Ihre Rechte gemäß den Art. 12 bis 22 DSGVO ausüben, verarbeiten wir die übermittelten personenbezogenen Daten zum Zweck der Umsetzung dieser Rechte durch uns und um den Nachweis hierüber erbringen zu können. Zum Zweck der Auskunftserteilung und deren Vorbereitung gespeicherte Daten werden wir nur für diesen Zweck sowie für Zwecke der Datenschutzkontrolle verarbeiten und im Übrigen die Verarbeitung nach  Maßgabe des Art. 18 DSGVO einschränken. Diese Verarbeitungen beruhen auf der Rechtsgrundlage des Art. 6 Abs. 1 Buchst. c) DSGVO i.V.m. Art. 12 bis 22 DSGVO und § 34 Abs. 2 BDSG.        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          6. Ihre Rechte
        </Typography>
        <Typography>
          Als betroffene Person haben Sie das Recht, uns gegenüber Ihre Betroffenenrechte geltend zu machen. Dabei haben Sie insbesondere die  folgenden Rechte:

          Sie haben nach Maßgabe des Art. 15 DSGVO und § 34 BDSG das Recht,  Auskunft darüber zu verlangen, ob und gegebenenfalls in welchen Umfang wir personenbezogene Daten zu Ihrer Person verarbeiten oder nicht.

          Sie haben das Recht, nach Maßgabe des Art. 16 DSGVO von uns die Berichtigung Ihrer Daten zu verlangen.

          Sie haben das Recht, nach Maßgabe des Art. 17 DSGVO und § 35 BDSG von uns die Löschung Ihrer personenbezogenen Daten zu verlangen.

          Sie haben das Recht, nach Maßgabe des Art. 18 DSGVO die Verarbeitung Ihrer personenbezogenen Daten einschränken zu lassen.

          Sie haben das Recht, nach Maßgabe des Art. 20 DSGVO die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und diese Daten einem anderen Verantwortlichen zu übermitteln.

          Sofern Sie uns eine gesonderte Einwilligung in die Datenverarbeitung erteilt haben, können Sie diese Einwilligung nach Maßgabe des Art. 7 Abs. 3 DSGVO jederzeit widerrufen. Durch einen solchen Widerruf wird die Rechtmäßigkeit der Verarbeitung, die bis zum Widerruf aufgrund der Einwilligung erfolgt ist, nicht berührt.

          Wenn Sie der Ansicht sind, dass eine Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Bestimmungen der DSGVO verstößt, haben Sie nach Maßgabe des Art. 77 DSGVO das Recht auf  Beschwerde bei einer Aufsichtsbehörde.        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          7. Widerspruchsrecht
        </Typography>
        <Typography>
          Sie haben nach Maßgabe des Art. 21 Abs. 1 DSGVO das Recht, gegen  Verarbeitungen, die auf der Rechtsgrundlage des Art. 6 Abs. 1 Buchst. e)  oder f) DSGVO beruht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch einzulegen. Sofern durch uns personenbezogene Daten über Sie zum Zweck der Direktwerbung verarbeitet werden, können Sie gegen diese Verarbeitung gem. Art. 21 Abs. 2 und Abs. 3 DSGVO Widerspruch einlegen.        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          8. Datenschutzbeauftragte
        </Typography>
        <Typography>
          Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an unsere Datenschutzbeauftragte: Paulina Tolk, therapie.tolk@gmail.com        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          II. Datenverarbeitungen auf unserer Website
        </Typography>
        <Typography>
          Bei der Nutzung der Website erfassen wir Informationen, die Sie selbst bereitstellen. Außerdem werden während Ihres Besuchs auf der Website automatisch bestimmte Informationen über Ihre Nutzung der Website durch uns erfasst. Im Datenschutzrecht gilt grundsätzlich auch die IP-Adresse als ein personenbezogenes Datum. Eine IP-Adresse wird jedem mit dem Internet verbundenen Gerät durch den Internetprovider  zugewiesen, damit es Daten senden und empfangen kann.        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          1. Verarbeitung von Server-Log-Files
        </Typography>

        <Typography>
          Bei der rein informativen Nutzung unserer Website werden zunächst automatisiert (also nicht über eine Registrierung) allgemeine Informationen gespeichert, die Ihr Browser an unseren Server übermittelt. Hierzu zählen standardmäßig: Browsertyp/ -version,  verwendetes Betriebssystem, aufgerufene Seite, die zuvor besuchte Seite  (Referrer URL), IP-Adresse, Datum und Uhrzeit der Serveranfrage und HTTP-Statuscode. Die Verarbeitung erfolgt zur Wahrung unserer  berechtigten Interessen und beruht auf der Rechtsgrundlage des Art. 6  Abs. 1 Buchst. f) DSGVO. Diese Verarbeitung dient der technischen  Verwaltung und der Sicherheit der Website. Die gespeicherten Daten  werden direkt nach der Erhebung anonymisiert, sodass keine  personenbezogenen Daten gespeichert werden. Wir sind nicht in der Lage, Sie anhand der gespeicherten Informationen als betroffene Person zu identifizieren. Die Art. 15 bis 22 DSGVO finden daher gem. Art. 11 Abs. 2 DSGVO keine Anwendung, es sei denn, Sie stellen zur Ausübung Ihrer in diesen Artikeln niedergelegten Rechte zusätzliche Informationen bereit, die Ihre Identifizierung ermöglichen.</Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>2. Kontaktmöglichkeiten und Anfragen</Typography>
        <Typography>Wenn Sie uns über die angegebene Kontakt-E-Mail eine Nachricht schicken, werden wir die übermittelten Daten zu dem Zweck verarbeiten, Ihre Anfrage zu beantworten. Sofern sich Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertrags mit uns richtet, ist Art. 6 Abs. 1 Buchst. b) DSGVO Rechtsgrundlage für die  Datenverarbeitung. Ansonsten verarbeiten wir die Daten aufgrund unseres  berechtigten Interesses, mit anfragenden Personen in Kontakt zu treten. Rechtsgrundlage für die Datenverarbeitung ist dann Art. 6 Abs. 1 Buchst. f) DSGVO.</Typography>

        <Typography>3. Eingebundene Dienste und Inhalte Dritter</Typography>

<Typography>Wir nutzen auf unserer Website durch Drittanbieter bereitgestellte Dienste, Services und Inhalte (nachfolgend zusammenfassend als »Inhalte«  bezeichnet). Für eine solche Einbindung ist eine Verarbeitung Ihrer IP-Adresse technisch notwendig, damit die Inhalte an Ihren Browser gesendet werden können. Ihre IP-Adresse wird daher an die jeweiligen Drittanbieter übermittelt. Diese Datenverarbeitungen erfolgen jeweils  zur Wahrung unserer berechtigten Interessen an der Optimierung und dem  wirtschaftlichen Betrieb unserer Website und beruhen auf der Rechtsgrundlage des Art. 6 Abs. 1 Buchst. f) DSGVO. Sie können diese Datenverarbeitung jederzeit über die Einstellungen des verwendeten Browsers oder bestimmter Browser-Erweiterungen verhindern.

  Wir haben in unsere Website Inhalte der folgenden, durch Drittanbieter bereitgestellten Dienste eingebunden:

  Dienste der Google Ireland Limited (Irland/EU): »Google Web Fonts« zur Darstellung von Schriften. Bei der Nutzung von Google-Diensten kann eine Übermittlung der  verarbeiteten Daten an die in den USA ansässige Google LLC (USA) durch uns nicht ausgeschlossen werden.

  Adobe Fonts (Typekit): Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von der Adobe Systems Incorporated, 345 Park Avenue, San Jose, CA 95110-2704, USA („Adobe“) bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web-Fonts in ihren Browser-Cache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Adobe aufnehmen. Hierbei kann es auch zu einer Übermittlung von personenbezogenen Daten an die Server von Adobe in den USA kommen. Auf diese Weise erlangt Adobe Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Adobe Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt. Weitere Informationen zu Adobe Fonts finden Sie unter https://fonts.adobe.com/ und in der Datenschutzerklärung von Adobe: https://www.adobe.com/de/privacy.html</Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>III. Weitere Datenverarbeitungen
        </Typography>
        <Typography sx={{ mb: 10 }}>
          Zur Begründung oder Durchführung der Vertragsbeziehung mit unseren Kunden ist regelmäßig die Verarbeitung der uns übermittelten Kontaktdaten der entsprechenden Ansprechpartner erforderlich. Die Verarbeitung dient unserem berechtigten Interesse an einem reibungslosen Geschäftsablauf. Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 Buchst. f) DSGVO. Außerdem verarbeiten wir Kunden- und  Interessentendaten zu Auswertungs- und zu Marketingzwecken. Diese  Verarbeitungen erfolgen auf der Rechtsgrundlage des Art. 6 Abs. 1 Buchst. f) DSGVO und dienen unserem Interesse, unser Angebot weiterzuentwickeln und Sie gezielt über Angebote zu  informieren. Weitere Datenverarbeitungen können erfolgen, wenn Sie eingewilligt haben (Art. 6 Abs. 1 Buchst. a) DSGVO) oder wenn dies der Erfüllung einer rechtlichen Verpflichtung dient (Art. 6 Abs. 1 Buchst. c) DSGVO).        </Typography>
      </Box>
    </Container>
  );
};

export default Policy;