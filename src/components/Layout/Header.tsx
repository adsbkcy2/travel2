import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PhoneIcon from '@mui/icons-material/Phone';

const pages = [
  { title: 'الرئيسية', path: '/' },
  { title: 'الرحلات', path: '/tours' },
  { title: 'الوجهات', path: '/destinations' },
  { title: 'عن الشركة', path: '/about' },
  { title: 'المدونة', path: '/blog' },
  { title: 'معرض الصور', path: '/gallery' },
  { title: 'تواصل معنا', path: '/contact' },
];

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: scrolled ? 'white' : 'transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <FlightTakeoffIcon 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              mr: 1, 
              color: scrolled ? 'primary.main' : 'white' 
            }} 
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Cairo, Tajawal, sans-serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: scrolled ? 'primary.main' : 'white',
              textDecoration: 'none',
            }}
          >
            رحلات العالم
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: scrolled ? 'primary.main' : 'white' }}
            >
              <MenuIcon />
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
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.title} 
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  <Typography textAlign="center" sx={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <FlightTakeoffIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: scrolled ? 'primary.main' : 'white' }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Cairo, Tajawal, sans-serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: scrolled ? 'primary.main' : 'white',
              textDecoration: 'none',
            }}
          >
            رحلات العالم
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  mx: 1,
                  color: scrolled ? 'text.primary' : 'white', 
                  display: 'block',
                  fontFamily: 'Cairo, Tajawal, sans-serif',
                  fontWeight: 600,
                  '&:hover': {
                    color: scrolled ? 'primary.main' : 'rgba(255, 255, 255, 0.8)',
                  }
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Contact button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button 
              variant="contained" 
              startIcon={<PhoneIcon />}
              component={Link}
              to="/contact"
              sx={{ 
                backgroundColor: 'secondary.main',
                fontFamily: 'Cairo, Tajawal, sans-serif',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                }
              }}
            >
              اتصل بنا
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
