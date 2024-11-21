import { Box, Typography } from '@mui/material';

const Impressum = () => {
  return (
    <Box margin={10}>
      <Typography variant="h1" marginBottom={8}>Impressum</Typography>
      <Typography variant="h4" marginBottom={5}>Angaben gemäß § 5 TMG</Typography>
      <Typography variant="h6" marginBottom={2}>
        Lorem Ipsum Therapie
      </Typography>
      <Typography marginBottom={5}>
        Privatpraxis für Systemische therapie und Beratung<br />
        Paulina Tolk<br />
        Krummer Weg 30<br />
        23569 Lübeck
      </Typography>
      <Typography variant="h4" marginBottom={2}>Kontakt</Typography>
      <Typography variant="h6" marginBottom={2}>
        Telefon:  0451 12345678<br />
        E-Mail:   info@therapie.de
      </Typography>
    </Box>
  );
};

export default Impressum;