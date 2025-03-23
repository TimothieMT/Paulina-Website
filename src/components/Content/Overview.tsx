import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

const Overview = () => {
  return (
    <>
      <Helmet>
        <title>Kostenübersicht – Psychotherapie in Lübeck | Paulina Tolk</title>
        <meta
          name="description"
          content="Detaillierte Kostenübersicht zur systemischen Therapie. Erfahren Sie mehr über Honorar, Terminwahrnehmung, Zahlungsziel, Absagefristen und Ausfallhonorare in der Psychotherapie Praxis in Lübeck."
        />
      </Helmet>
      <Box
        component="section"
        aria-labelledby="overview-heading"
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
          <Typography variant="h4" component="h1" id="overview-heading" gutterBottom>
            Kostenübersicht
          </Typography>
          <Typography component="p">
            Die Kosten der Systemischen Therapie trägt der Klient/in auf Selbstzahlerbasis in Eigenleistung.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 5 }}>
            Honorar für eine Therapiestunde (50 Min.):
          </Typography>
          <Box component="ul" sx={{ pl: 3, m: 0 }}>
            <Box component="li">
              <Typography component="p" sx={{ mt: 2 }}>
                Einzelsetting: 167 €
              </Typography>
            </Box>
            <Box component="li">
              <Typography component="p" sx={{ mt: 2 }}>
                Multi-Personen-Setting: 196 €
              </Typography>
            </Box>
          </Box>
          <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 3 }}>
            Verpflichtung zur Terminwahrnehmung
          </Typography>
          <Typography component="p" sx={{ mt: 2 }}>
            Der/die Klient/in verpflichtet sich, die fest vereinbarten Behandlungstermine pünktlich wahrzunehmen und im Verhinderungsfall rechtzeitig, d.h. 48 Stunden vor dem vereinbarten Termin abzusagen bzw. absagen zu lassen.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 3 }}>
            Zahlungsziel
          </Typography>
          <Typography component="p" sx={{ mt: 2 }}>
            Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum zu begleichen.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 3 }}>
            Absagefristen & Ausfallhonorar
          </Typography>
          <Typography component="p" sx={{ mt: 2 }}>
            Der/die Klient/in verpflichtet sich, bei Verhinderung einen vereinbarten Behandlungstermin spätestens 48 Stunden vorher abzusagen. Dazu genügt eine schriftliche oder eine telefonische Absage.
          </Typography>
          <Typography component="p" sx={{ mt: 2 }}>
            Erfolgt die Terminabsage nicht rechtzeitig, wird dem/der Klient/in ein Ausfallhonorar in Höhe von 80 € durch die Therapeutin in Rechnung gestellt. Dieses Ausfallhonorar hat der/die Klient/in selbst zu zahlen.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Overview;