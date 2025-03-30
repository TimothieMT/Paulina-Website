import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid2 from '@mui/material/Grid2';
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
    <ThemeProvider theme={customTheme}>
    <Helmet>
        <title>Kontakt – Psychotherapie Lübeck | Paulina Tolk, systemische Therapeutin</title>
        <meta
          name="description"
          content="Kontaktieren Sie die Psychotherapie-Praxis Lübeck von M.Sc. Psych. Paulina Tolk, systemische Therapeutin (SG). Vereinbaren Sie unkompliziert Ihren Termin für Beratung und Therapie."
        />
        <meta
          name="keywords"
          content="Psychotherapie Lübeck, systemische Therapeutin Lübeck, Paulina Tolk, Kontakt Psychotherapie, Therapie Lübeck, Beratung Lübeck"
        />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Psychotherapie Praxis Lübeck – Paulina Tolk",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Beckergrube 2",
          "addressLocality": "Lübeck",
          "postalCode": "23552",
          "addressCountry": "DE"
        },
        "telephone": "+4917643608599",
        "email": "therapie.tolk@gmail.com",
        "openingHours": [
          "Mo 11:00-12:00",
          "Tu 11:00-12:00",
          "Do 11:00-12:00"
        ],
        "sameAs": [
          "https://www.facebook.com/your-profile",
          "https://www.instagram.com/your-profile"
        ]
      }
    `}
        </script>
      </Helmet>
      <Box
        component="section"
        aria-labelledby="services-heading"
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
                  <Box component="ul" p={3} sx={{ listStyleType: 'none', pl: 0, m: 0 }}>
                    <Box component="li">
                      <Typography variant="subtitle1" component="span" fontFamily={'medium'}>Montag: 11 - 12 Uhr</Typography>
                    </Box>
                    <Box component="li">
                      <Typography variant="subtitle1" component="span" fontFamily={'medium'}>Dienstag: 11 - 12 Uhr</Typography>
                    </Box>
                    <Box component="li">
                      <Typography variant="subtitle1" component="span" fontFamily={'medium'}>Donerstag: 11 - 12 Uhr</Typography>
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

              <Box>
                <Box component="section" aria-labelledby="standort-heading">
                  <Typography variant="h6" component="h3" gutterBottom id="standort-heading">
                    Standort
                  </Typography>
                  <Typography component="p">
                    Meine Praxis befindet sich an der Ecke Beckergrube - Breite Straße in unmittelbarer Nachbarschaft
                    der Fußgängerzone Lübeck und des Stadttheaters im dritten Stockwerk mit Blick auf die Lübecker
                    Marienkirche. Die Praxis ist barrierearm, Sie müssen 5 Stufen im Eingangsbereich überwinden und
                    können dann den Aufzug hinter der Glastür auf der rechten Seite im Treppenhaus nehmen. </Typography>
                </Box>
              </Box>
            </CleanGrid>

            <CleanGrid>
              <Box
                component="address"
                sx={{ borderRadius: 1, height: '100%', fontStyle: 'normal' }}
              >
                <Typography component="p">M.Sc. Psych., HP Psych. Paulina Tolk</Typography>
                <Typography component="p">Systemische Therapeutin und Beraterin (SG)</Typography>
                <Typography component="p">Praxis für Psychotherapie</Typography>
                <Typography component="p">Beckergrube 2</Typography>
                <Typography component="p">23552 Lübeck</Typography>
                <Box component="div">
                  <Typography component="p">
                    Mobil:{' '}
                    <MuiLink
                      href="tel:017643608599"
                      underline="none"
                      sx={{
                        backgroundColor: 'transparent',
                        color: '#737373',
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
                        color: '#737373',
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
        <MuiLink
          href="https://www.google.de/maps/place/Beckergrube+2,+23552+L%C3%BCbeck/@53.8697364,10.684798,17z/data=!3m1!4b1!4m6!3m5!1s0x47b209581b127343:0xb81bac90197179cb!8m2!3d53.8697364!4d10.6873729!16s%2Fg%2F11bw3xn3lb?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
          underline="none"
          target={'_blank'}
        >
          <Box
            component="img"
            src="/place.png"
            alt="Ein schmaler, geschwungener Sandweg führt durch einen lichten Wald mit hohen, schlanken Bäumen entlang einer sanften, grasbewachsenen Böschung direkt am Meer."
            sx={{
              width: '100%',
              height: '600px',
              objectFit: 'cover',
              borderRadius: 4,
              border: '1px solid #85ab7f',
            }}
          />
        </MuiLink>
      </Box>
    </ThemeProvider>
  );
}

export default MainContactFullWidth;