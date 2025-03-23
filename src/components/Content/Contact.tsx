import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  Link as MuiLink,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid2 from '@mui/material/Grid2';

const CleanGrid = styled(Grid2, {
  shouldForwardProp: (prop) => prop !== 'item',
})({});

const FormBox = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

function MainContactFullWidth() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('http://localhost:5100/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      e.currentTarget.reset();
      if (result.success) {
        console.log('E-Mail wurde erfolgreich gesendet.');
      } else {
        console.error('Fehler beim Senden der E-Mail.');
      }
    } catch (error) {
      console.error('Netzwerkfehler oder Server nicht erreichbar:', error);
    }
  };

  const textFieldSx = {
    "&:hover label": {
      color: "#85ab7f",
    },
    "& label.Mui-focused": {
      color: "#85ab7f",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#85ab7f",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#85ab7f",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Kontakt – Psychotherapie Praxis Lübeck | Paulina Tolk</title>
        <meta
          name="description"
          content="Kontaktieren Sie M.Sc. Psych. Paulina Tolk, systemische Therapeutin und Beraterin in Lübeck. Vereinbaren Sie jetzt einen Termin für eine individuelle Psychotherapie."
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Psychotherapie Praxis Lübeck",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Beckergrube 2",
              "addressLocality": "Lübeck",
              "postalCode": "23552",
              "addressCountry": "DE"
            },
            "telephone": "0176 43 60 85 99",
            "email": "therapie.tolk@gmail.com"
          }
        `}</script>
      </Helmet>
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'left',
          backgroundColor: '#efeeee',
          p: { xs: 2, sm: 4 },
        }}
      >
        <Box
          component="section"
          sx={{
            px: { xs: 4, md: 4 },
            py: { xs: 4, md: 4 },
            color: '#383838',
            width: '80%',
            justifyContent: 'center',
          }}
        >
          <CleanGrid
            container
            spacing={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
            }}
          >
            <CleanGrid>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Kontakt
                </Typography>
                <Typography component="p">
                  Haben Sie auf meiner Seite das für Sie passende Angebot gefunden, dann kontaktieren Sie mich gerne.
                </Typography>
                <Box component="div" sx={{ my: 2 }}>
                  <Typography component="p">
                    Telefonisch erreichen Sie mich persönlich zu meinen Sprechzeiten. Diese sind wie folgt:
                  </Typography>
                  <Box component="ul" sx={{ listStyleType: 'none', pl: 0, m: 0 }}>
                    <Box component="li">
                      <Typography variant="subtitle1" component="span">
                        Montag: 12 - 13 Uhr
                      </Typography>
                    </Box>
                    <Box component="li">
                      <Typography variant="subtitle1" component="span">
                        Dienstag: 12 - 13 Uhr
                      </Typography>
                    </Box>
                    <Box component="li">
                      <Typography variant="subtitle1" component="span">
                        Freitag: 12 - 13 Uhr
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography component="p">Ich freue mich auf Sie.</Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <FormBox id="contactform" onSubmit={handleSubmit} noValidate>
                  <TextField
                    label="Ihr Name"
                    name="name"
                    required
                    fullWidth
                    sx={textFieldSx}
                  />
                  <TextField
                    label="Ihre E-Mail-Adresse"
                    name="email"
                    type="email"
                    required
                    fullWidth
                    sx={textFieldSx}
                  />
                  <TextField
                    label="Ihre Nachricht"
                    name="message"
                    required
                    multiline
                    rows={5}
                    fullWidth
                    sx={textFieldSx}
                  />

                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button
                      type="submit"
                      color="primary"
                      sx={{
                        backgroundColor: 'transparent',
                        color: '#383838',
                        '&:hover': { backgroundColor: '#85ab7f', color: '#fff' },
                      }}
                    >
                      Absenden
                    </Button>
                  </Stack>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption">
                      *Pflichtfelder. Bitte beachten Sie unsere Hinweise zum{' '}
                      <MuiLink href="/policy" target="_blank" underline="none">
                        Datenschutz
                      </MuiLink>.
                    </Typography>
                  </Box>
                </FormBox>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Box component="section" aria-labelledby="standort-heading">
                  <Typography variant="h6" component="h3" gutterBottom id="standort-heading">
                    Standort
                  </Typography>
                  <Typography component="p">
                    Meine Praxis befindet sich an der Ecke Beckergrube - Breite Straße in unmittelbarer Nachbarschaft der Fußgängerzone Lübeck.
                  </Typography>
                  <Typography variant="h6" component="h4" gutterBottom mt={2}>
                    Anreise mit dem Bus
                  </Typography>
                  <Typography component="p">
                    Für die Anreise mit dem öffentlichen Nahverkehr könnten folgende Informationen hilfreich sein. Da die Haltestelle Beckergrube wegen Bauarbeiten über einen längeren Zeitraum gesperrt ist, nutzen Sie die unten stehenden Haltestelleninformationen.
                  </Typography>
                  <Typography component="p">
                    Aus Richtung Bahnhof fahren Sie mit der Linie 5 bis zur Haltestelle Wahmstraße und durchqueren die Fußgängerzone Breite Straße bis zur Beckergrube, ca. 10 Minuten Fußweg.
                    Alternativ fahren Sie mit den Linien 3, 10, 11, 21, 30, 32, 39, 40 bis zur Haltestelle Katharineum und gelangen durch die Pfaffenstraße zur Beckergrube, ca. 5 Minuten Fußweg.
                    Aus Richtung Gustav-Radbruch-Platz nutzen Sie den eingerichteten Shuttle am Bussteig 3 und fahren bis zur Haltestelle Breitestraße, ca. 2 Minuten Fußweg.
                    Oder Sie fahren mit den Linien 3, 5, 10, 11, 12, 21, 30, 31, 32, 39, 40 bis zur Haltestelle Wahmstraße, den Linien 1, 2, 3, 5, 6, 7, 9, 10, 10, 12, 15, 16, 21, 30, 31, 32, 39, 40 bis zur Haltestelle Kohlmarkt oder den Linien 1, 2, 4, 6, 7, 9, 15, 16, 17 bis zur Haltestelle Sandstraße. Von der jeweiligen Haltestelle gehen Sie durch die Fußgängerzone Breite Straße bis zur Beckergrube, ca. 10 bis 12 Minuten Fußweg.
                  </Typography>

                  <Typography variant="h6" component="h4" gutterBottom mt={2}>
                    Anfahrt mit dem Auto
                  </Typography>
                  <Typography component="p">
                    Für die Anreise mit dem Auto gibt es an der Musik und Kongresshalle (MUK) Parkplätze, ca. 10 Minuten Fußweg.
                    Weitere Parkmöglichkeiten finden sich in den Parkhäusern der Innenstadt.
                    Es befinden sich Behindertenparkplätze gegenüber der Sparkasse in der Breite Straße, ca. 1 Minute Fußweg.
                  </Typography>
                </Box>
              </Box>
            </CleanGrid>

            <CleanGrid>
              <Box
                component="address"
                sx={{ borderRadius: 1, height: '100%', fontStyle: 'normal', mt: 4 }}
              >
                <Typography component="p">M.Sc. Psych., HP Psych. Paulina Tolk</Typography>
                <Typography component="p">Systemische Therapeutin und Beraterin (SG)</Typography>
                <Typography component="p">Praxis für Psychotherapie</Typography>
                <Typography component="p">Beckergrube 2</Typography>
                <Typography component="p">23552 Lübeck</Typography>
                <Box component="div" sx={{ mt: 2 }}>
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
              </Box>
            </CleanGrid>
          </CleanGrid>
        </Box>
      </Container>
    </>
  );
}

export default MainContactFullWidth;