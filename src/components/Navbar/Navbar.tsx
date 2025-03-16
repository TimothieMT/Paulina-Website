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
  { name: 'Kontakt', path: '/contact' },
];

function Navbar() {
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
        boxShadow: 'none',
        borderBottom: 'none',
      }}
      elevation={0}
    >
      {/*
        Mit 'margin' als responsive Objekt kannst du Abstände für unterschiedliche Breakpoints festlegen:
        xs (Mobile), sm, md, lg, xl.
      */}
      <Box sx={{ margin: { xs: '16px 10px', md: '48px 10px' } }}>
        <Toolbar disableGutters>
          {/* Desktop-Ansicht (md aufwärts): Logo, Titel links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <a href="/#"> <img src={'src/assets/logos/Bildschirmfoto 2025-03-15 um 21.56.57.png'} width={400} height={100} /></a>
          </Box>

          {/* Mobile-Ansicht (xs, sm): Logo, Titel links */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <IconButton component={Link} to="/content" color="inherit">
              <HomeIcon sx={{ color: '#383838' }} />
            </IconButton>
            <Box sx={{ ml: 1 }}>
              <Typography variant="h6" sx={{ color: '#383838', fontWeight: 'bold', lineHeight: 1.2 }}>
                Paulina Tolk
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#383838', lineHeight: 1.2 }}>
                Privatpraxis für Systemische Therapie
              </Typography>
            </Box>
          </Box>

          {/* Mobiles Burger-Menü (Rechts) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="Menü öffnen"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: '#383838' }} />
            </IconButton>
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
                  backgroundColor: '#fbfbfb',
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
                  <Typography textAlign="center" sx={{ color: '#737373' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop-Menü (Rechts) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
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

export default Navbar;