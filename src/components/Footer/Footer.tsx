import { Box, Typography, Link, Divider, Stack, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

const Item = styled(
  'div',
  { shouldForwardProp: (prop) => prop !== 'dark' },
)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    color: theme.palette.text.primary,
  }),
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container maxWidth={false} disableGutters>
      <Box
        component="footer"
        position="sticky"
        marginTop={4}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Grid item xs={12} md="auto">
            <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <a href="/mainPoints"> <img src={'src/assets/logos/Bildschirmfoto 2025-03-15 um 21.56.57.png'} width={400} height={100} /></a>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} md="auto">
            <Stack
              direction={{ xs: 'row', sm: 'row' }}
              spacing={1}
              marginRight={2}
              divider={<Divider orientation="vertical" flexItem />}
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-end' }}
              sx={{
                '& a': {
                  fontFamily: 'Roboto, sans-serif',
                  color: '#b1b1b1', // Farbe für alle Links setzen
                  textDecoration: 'none' // Entfernt Unterstreichung
                }
              }}
            >
              <Link href="/mainPoints">Schwerpunkte</Link>
              <Link href="/offers">Angebote</Link>
              <Link href="/contact">Kontakt</Link>
              <Link href="/impressum">Impressum</Link>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          align="center"
          fontSize={10}
          sx={{ color: '#737373'}}
        >
          © {currentYear} Therapie Paulina Tolk. Alle Rechte vorbehalten.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;