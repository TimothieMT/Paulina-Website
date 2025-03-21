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
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

const pages = [
  { name: 'Kostenübersicht', path: '/overview' },
  { name: 'Vita', path: '/vita' },
];

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
    <AppBar
      position="static"
      sx={{
        background: '#efeeee',
        boxShadow: 'none',
        borderBottom: 'none',
        marginBottom: '80px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: isSmallScreen ? 'column' : 'row',
        }}
      >
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              sx={{
                backgroundColor: 'transparent',
                color: '#737373',
                '&:hover': { backgroundColor: '#85ab7f', color: '#fff' },
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Link to="/">
            <Box
              component="img"
              src="src/assets/Logo.png"
              alt="Logo"
              sx={{ width: isSmallScreen ? '200px' : '400px', height: 'auto' }}
            />
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            component={Link}
            to="/contact"
            sx={{
              backgroundColor: 'transparent',
              color: '#737373',
              '&:hover': { backgroundColor: '#85ab7f', color: '#fff' },
            }}
          >
            Termin vereinbaren
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={handleOpenNavMenu}>
            <MenuIcon sx={{ color: '#383838' }} />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ '& .MuiPaper-root': { backgroundColor: '#fbfbfb' } }}
          >
            {pages.map((page) => (
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
  );
}

export default Navbar;