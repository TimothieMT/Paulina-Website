import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Stack,
  Link as MuiLink, Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const FormBox = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

function MainContactFullWidth() {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hier kann deine Form-Submit-Logik rein (z.B. Ajax-Call o.Ä.)
  };

  return (
    <Container maxWidth={"xl"}>
      <Box
        sx={{
          px: { xs: 4, md: 4 },
          py: { xs: 4, md: 4 },
        }}
      >
        <Grid container spacing={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
              }}>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                Kontakt
              </Typography>
              <Typography>
                Haben Sie auf meiner Seite das für Sie passende Angebot gefunden, dann kontaktieren Sie mich gerne.
              </Typography>
              <Typography sx={{ display: 'flex', flexDirection: 'column', marginBottom: '8px', marginTop: '8px' }}>
                Telefonisch erreichen Sie mich persönlich zu meinen Sprechzeiten.<br />
                Diese sind wie folgt:
                <Box
                  component="span"
                  sx={{ display: 'inline-block' , marginTop: '8px' }}
                >
                  <Box><strong>Montag:</strong> 12 - 13 Uhr</Box>
                  <Box><strong>Dienstag:</strong> 12 - 13 Uhr</Box>
                  <Box><strong>Freitag:</strong> 12 - 13 Uhr</Box>
                </Box>
                <br />
                Hinterlassen Sie mir anderenfalls gerne eine Nachricht auf meiner Mailbox, ich rufe Sie dann zeitnah
                zurück.
              </Typography>
              <Typography>Ich freue mich auf Sie.</Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <FormBox
                action="/form/submit.php"
                method="post"
                id="contactform"
                onSubmit={handleSubmit}
              >
                <TextField
                  label="Ihr Name*"
                  name="name"
                  required
                  fullWidth
                />
                <TextField
                  label="Ihre E-Mail-Adresse*"
                  name="email"
                  type="email"
                  required
                  fullWidth
                />
                <TextField
                  label="Ihre Nachricht*"
                  name="message"
                  required
                  multiline
                  rows={5}
                  fullWidth
                />

                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <Button type="reset" variant="outlined">
                    Zurücksetzen
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Absenden
                  </Button>
                </Stack>

                <Box>
                  <Typography variant="caption">
                    *Pflichtfelder<br />
                    Bitte beachten Sie unsere Hinweise zum{' '}
                    <MuiLink href="/datenschutz" target="_blank" underline="none">
                      Datenschutz
                    </MuiLink>.
                  </Typography>
                </Box>

                <input name="date" type="hidden" value={currentYear} />
              </FormBox>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Standort
              </Typography>
              <Typography>
                Meine Praxis befindet sich an der Ecke Beckergrube - Breite Straße in unmittelbarer Nachbarschaft der
                Fußgängerzone Lübeck ...
              </Typography>
              <Typography variant="h6" gutterBottom mt={2}>
                Anreise mit dem Bus
              </Typography>
              <Typography>
                <strong>
                  Für die Anreise mit dem öffentlichen Nahverkehr könnten folgende Informationen hilfreich sein...
                </strong>
                <br /><br />
                Aus Richtung Bahnhof fahren Sie mit der Linie 5 bis zur Haltestelle Wahmstraße ...
                <br /><br />
                Alternativ fahren Sie mit den Linien 3, 10, 11, 21, 30, 32, 39, 40 bis zur Haltestelle Katharineum ...
                <br /><br />
                Aus Richtung Gustav-Radbruch-Platz nutzen Sie den eingerichteten Shuttle ...
              </Typography>

              <Typography variant="h6" gutterBottom mt={2}>
                Anfahrt mit dem Auto
              </Typography>
              <Typography>
                Für die Anreise mit dem Auto gibt es an der Musik und Kongresshalle (MUK) Parkplätze ...
                <br />
                Weitere Parkmöglichkeiten finden sich in den Parkhäusern der Innenstadt.
                <br />
                Es befinden sich Behindertenparkplätze gegenüber der Sparkasse in der Breite Straße, ca. 1 Minute
                Fußweg.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                borderRadius: 1,
                height: '100%',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Paulina Tolk
              </Typography>
              <Typography>
                Heilpraktikerin für Psychotherapie
                Systemische Therapie und Beratung<br />
                Paulina Tolk<br />
                Beckergrube 2<br />
                23552 Lübeck
              </Typography>

              <Typography>
                <Box>
                  <Box>
                    <strong>Mobil: </strong>
                    <MuiLink href="tel:017643608599" underline="none">
                      0176 43 60 85 99
                    </MuiLink>
                  </Box>
                  <Box>
                    <strong>E-Mail: </strong>
                    <MuiLink href="mailto:info@paulinatolk.de" underline="none">
                      info@paulinatolk.de
                    </MuiLink>
                  </Box>
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default MainContactFullWidth;