import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, useTheme } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal } from '@mui/icons-material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const theme = useTheme();

  const navItems = [
    { label: 'Internal AI Resources', path: '/internal' },
    { label: 'External AI Resources', path: '/external' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <AppBar 
        position="sticky" 
        elevation={0} 
        sx={{ 
          backgroundColor: 'rgba(11, 11, 16, 0.7)', 
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(59, 130, 246, 0.1)',
          top: 0,
          zIndex: 1100
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                fontFamily: '"Orbitron", sans-serif',
                letterSpacing: '0.1em',
                '&:hover': {
                  color: 'primary.light',
                  textShadow: '0 0 12px rgba(59, 130, 246, 0.5)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              <Terminal fontSize="medium" />
              ABC AI Community
            </Typography>

            <Box sx={{ display: 'flex', gap: { xs: 1, md: 3 } }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'primary.main',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: theme.palette.primary.main,
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)',
                      }}
                    />
                  )}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Box 
        component="footer" 
        sx={{ 
          py: 6, 
          mt: 'auto', 
          borderTop: '1px solid rgba(59, 130, 246, 0.1)',
          background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.02))'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
            <Box>
              <Typography variant="h6" sx={{ color: 'primary.main', mb: 1, fontFamily: '"Orbitron", sans-serif' }}>
                ABC AI COMMUNITY
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Empowering innovation through distributed intelligence.
              </Typography>
            </Box>
            
            <Typography variant="caption" color="text.secondary" align="center">
              {'© '}
              {new Date().getFullYear()}
              {' ABC AI Community. [ACCESS_GRANTED]'}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
