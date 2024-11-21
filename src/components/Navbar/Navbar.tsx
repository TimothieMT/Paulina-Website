// ResponsiveAppBar.tsx
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Schwerpunkte', path: '/mainPoints' },
  { name: 'Angebot', path: '/offers' },
  { name: 'Über Mich', path: '/aboutMe' },
  { name: 'Kontakt', path: '/contact' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none', // Entfernt den Schatten
        borderBottom: 'none', // Entfernt die untere Rahmenlinie
      }}
      elevation={0} // Entfernt jegliche Elevation
    >
      <Box margin={5}>
        <Toolbar disableGutters>
          {/* Logo und Titel für Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', flexGrow: 1 }}>
            <IconButton
              component={Link}
              to="/content"
              sx={{ mr: 1 }}
              color="inherit"
            >
              <HomeIcon sx={{ color: '#383838' }} />
            </IconButton>
            <Box>
              <Typography variant="h6" sx={{ color: '#383838', fontWeight: 'bold' }}>Paulina Tolk</Typography>
              <Typography variant="subtitle1" sx={{ color: '#383838' }}>Privatpraxis für Systemische Therapie</Typography>
            </Box>
          </Box>
          {/* Menü-Button für Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="Menü öffnen"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: '#383838' }} />
            </IconButton>
            {/* Mobiles Menü */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: '#addda7',
                  boxShadow: 'none',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#dddddd',
                    },
                  }}
                >
                  <Typography textAlign="center" sx={{ color: '#383838' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Logo und Titel für Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexGrow: 1 }}>
            <IconButton
              component={Link}
              to="/content"
              sx={{ mr: 1 }}
              color="inherit"
            >
              <HomeIcon sx={{ color: '#383838' }} />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                fontWeight: 'bold',
                color: '#383838',
                textDecoration: 'none',
              }}
            >
              Paulina Tolk
            </Typography>
          </Box>
          {/* Desktop-Menü */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: '#383838',
                  display: 'block',
                  margin: '0 1rem',
                  '&:hover': {
                    backgroundColor: '#dddddd',
                  },
                }}
                component={Link}
                to={page.path}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;