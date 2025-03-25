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
          }}
        >
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
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
                  color: '#737373',
                  '&:hover': { backgroundColor: '#85ab7f', color: '#efeeee' },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Link to="/">
              <Box
                component="img"
                src="/Logo.png"
                alt="Logo"
                sx={{ width: isSmallScreen ? '250px' : '400px', height: 'auto' }}
              />
            </Link>
          </Box>

          {/* Desktop Button */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={Link}
              to="/contact"
              sx={{
                color: '#737373',
                '&:hover': { backgroundColor: '#85ab7f', color: '#efeeee' },
              }}
            >
              Termin vereinbaren
            </Button>
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              aria-label="Navigation Menü öffnen"
            >
              <MenuIcon sx={{ color: '#85ab7f', fontSize: '2rem' }} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: '#85ab7f',
                  width: '93vw',
                  maxWidth: '93%',
                  left: 0,
                  right: 0,
                },
              }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              {[
                { name: 'Kostenübersicht', path: '/overview' },
                { name: 'Werdegang', path: '/vita' },
                { name: 'Leistungen', path: '/service' },
                { name: 'Termin vereinbaren', path: '/contact' },
              ].map((page, index, array) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                  sx={{ justifyContent: 'center', py: 2 }}
                >
                  <Typography
                    textAlign="center"
                    fontWeight={600}
                    sx={{
                      color: index === array.length - 1 ? '#000000' : '#efeeee',
                      fontSize: '1.2rem',
                      letterSpacing: 0.9,
                      lineHeight: 2,
                      marginTop: 2,
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;