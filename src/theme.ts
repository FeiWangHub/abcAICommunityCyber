import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3B82F6', // Tech Blue
      light: '#60A5FA',
      dark: '#2563EB',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#A78BFA', // Purple Glow
      light: '#C4B5FD',
      dark: '#7C3AED',
    },
    background: {
      default: '#0B0B10', // Deep Space Black
      paper: 'rgba(17, 17, 24, 0.8)', // Glassmorphism base
    },
    text: {
      primary: '#F8FAFC', // Star White
      secondary: '#94A3B8', // Metallic Gray
    },
    divider: 'rgba(148, 163, 184, 0.1)',
  },
  typography: {
    fontFamily: '"Exo 2", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h4: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
    },
    button: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#3B82F6 #0B0B10',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#0B0B10',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#1E293B',
            borderRadius: '10px',
            '&:hover': {
              background: '#3B82F6',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4, // More geometric/tech feel
          padding: '10px 28px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #2563EB 30%, #3B82F6 90%)',
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(17, 17, 24, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17, 17, 24, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            border: '1px solid rgba(59, 130, 246, 0.4)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
  },
});

export default theme;
