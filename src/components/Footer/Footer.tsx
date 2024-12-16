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
        sx={{
          backgroundColor: '#fbfbfb',
          py: { xs: 2, md: 4 },
          px: { xs: 2, md: 8 },
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Grid item xs={12} md="auto">
            <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <img src="/vite.svg" alt="Logo" style={{ height: 40, marginBottom: 20 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Paulina Tolk</Typography>
                <Typography variant="h6">Heilpraktikerin für Psychotherapie</Typography>
                <Typography variant="h6">Systemische Therapie und Beratung</Typography>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} md="auto">
            <Stack
              direction={{ xs: 'row', sm: 'row' }}
              spacing={1}
              divider={<Divider orientation="vertical" flexItem />}
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-end' }}
            >
              <Link href="/mainPoints" color="inherit" underline="none">
                Schwerpunkte
              </Link>
              <Link href="/offers" color="inherit" underline="none">
                Angebote
              </Link>
              <Link href="/aboutMe" color="inherit" underline="none">
                Über mich
              </Link>
              <Link href="/contact" color="inherit" underline="none">
                Kontakt
              </Link>
              <Link href="/impressum" color="inherit" underline="none">
                Impressum
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 4 }}
        >
          © {currentYear} Psychotherapie Paulina Tolk. Alle Rechte vorbehalten.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;