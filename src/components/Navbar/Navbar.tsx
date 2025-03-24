import * as React from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

function Navbar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Helmet>
        <title>Therapie Paulina Tolk – Psychotherapie in Lübeck</title>
        <meta
          name="description"
          content="Individuelle psychotherapeutische Beratung und maßgeschneiderte Behandlung in Lübeck – Therapie Paulina Tolk."
        />
      </Helmet>
      <AppBar
        position="static"
        sx={{
          background: '#efeeee',
          boxShadow: 'none',
          borderBottom: 'none',
          marginBottom: '40px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          {/* Desktop-Navigation */}
          <Box
            component="nav"
            sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}
            aria-label="Primäre Navigation"
          >
            {[
              { name: 'Kostenübersicht', path: '/overview' },
              { name: 'Werdegang', path: '/vita' },
              { name: 'Leistungen', path: '/service' },
            ].map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  backgroundColor: 'transparent',
                  color: '#737373',
                  '&:hover': { backgroundColor: '#85ab7f', color: '#efeeee' },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Link to="/" aria-label="Zur Startseite">
              <Box
                component="img"
                src="/Logo.png"
                alt="Das Logo zeigt mittig die Silhouette eines menschlichen Kopfes im Seitenprofil, der aus stilisierten grünen Blättern und Zweigen geformt ist und Wachstum, Gesundheit und Lebenskraft symbolisiert. Links neben der Silhouette steht das Wort „THERAPIE“ und rechts daneben „TOLK“, beide Wörter in klaren, grauen Großbuchstaben. Unterhalb des Logos befindet sich der Zusatz „SYSTEMISCHE THERAPIE“ in kleinerer, ebenfalls grauer Schrift, was auf die therapeutische Fachrichtung hinweist."
                sx={{ width: isSmallScreen ? '300px' : '400px', height: 'auto' }}
              />
            </Link>
          </Box>

          {/* Desktop: Button "Termin vereinbaren" */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={Link}
              to="/contact"
              sx={{
                backgroundColor: 'transparent',
                color: '#737373',
                '&:hover': { backgroundColor: '#85ab7f', color: '#efeeee' },
              }}
            >
              Termin vereinbaren
            </Button>
          </Box>

          {/* Mobile-Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              aria-label="Navigation Menü öffnen"
              aria-controls="nav-menu"
              aria-haspopup="true"
              aria-expanded={anchorElNav ? 'true' : 'false'}
            >
              <MenuIcon sx={{ color: '#85ab7f' }} />
            </IconButton>
            <Menu
              id="nav-menu"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ '& .MuiPaper-root': { backgroundColor: '#efeeee' } }}
            >
              {[
                { name: 'Kostenübersicht', path: '/overview' },
                { name: 'Werdegang', path: '/vita' },
                { name: 'Leistungen', path: '/service' },
              ].map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/contact">
                <Typography textAlign="center" sx={{ fontWeight: 'bold', color: '#383838' }}>
                  Termin vereinbaren
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;