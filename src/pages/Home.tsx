import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, AutoAwesome, Storage, Public, Security, Speed, Psychology } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <AutoAwesome fontSize="large" />,
      title: "Model Garden",
      desc: "Curated collection of state-of-the-art AI models for deployment.",
      color: "#3B82F6"
    },
    {
      icon: <Psychology fontSize="large" />,
      title: "RAG Studio",
      desc: "Advanced Retrieval-Augmented Generation workflows and testing.",
      color: "#A78BFA"
    },
    {
      icon: <Storage fontSize="large" />,
      title: "Knowledge Wiki",
      desc: "Deep technical documentation and community shared knowledge.",
      color: "#F59E0B"
    }
  ];

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 20 }, pb: { xs: 8, md: 15 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.5, borderRadius: 10, border: '1px solid rgba(59, 130, 246, 0.3)', mb: 3, background: 'rgba(59, 130, 246, 0.05)' }}>
                <Security sx={{ fontSize: 16, color: 'primary.main' }} />
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em' }}>
                  SYSTEM STATUS: OPERATIONAL
                </Typography>
              </Box>
              
              <Typography variant="h1" sx={{ 
                fontSize: { xs: '2.5rem', md: '4.5rem' }, 
                mb: 2,
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, #F8FAFC 0%, #94A3B8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                NEURAL <br /> INTERFACE <br /> 
                <Box component="span" sx={{ color: 'primary.main', WebkitTextFillColor: 'initial' }}>
                  COMMUNITY
                </Box>
              </Typography>
              
              <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', maxWidth: '600px', fontWeight: 300, lineHeight: 1.6 }}>
                The central hub for the department's AI initiatives. Deploy, learn, and stay at the bleeding edge of machine intelligence.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  endIcon={<ArrowForward />}
                  onClick={() => navigate('/internal')}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Enter Platform
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => navigate('/external')}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Global Trends
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Box sx={{ 
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-20%',
                  left: '-20%',
                  width: '140%',
                  height: '140%',
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                  zIndex: -1
                }
              }}>
                <Box 
                  component="img"
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=futuristic%20cyber%20AI%20core%20glowing%20blue%20circuit%20spherical&image_size=square_hd"
                  alt="AI Core"
                  sx={{ 
                    width: '100%', 
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
                    animation: 'morph 10s ease-in-out infinite',
                    '@keyframes morph': {
                      '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
                      '50%': { borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%' }
                    }
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Features Grid */}
      <Box sx={{ py: 12, background: 'rgba(59, 130, 246, 0.02)' }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {features.map((feature, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <motion.div variants={itemVariants}>
                    <Paper 
                      sx={{ 
                        p: 4, 
                        height: '100%', 
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover .icon-glow': { opacity: 1 }
                      }}
                    >
                      <Box 
                        className="icon-glow"
                        sx={{ 
                          position: 'absolute', 
                          top: -20, 
                          right: -20, 
                          width: 100, 
                          height: 100, 
                          background: `radial-gradient(circle, ${feature.color}33 0%, transparent 70%)`,
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        }} 
                      />
                      <Box sx={{ color: feature.color, mb: 3 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                        {feature.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {feature.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Stats/Metrics Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={4} justifyContent="center">
          {[
            { label: 'MODELS DEPLOYED', value: '150+' },
            { label: 'DAILY INFERENCES', value: '1.2M' },
            { label: 'ACTIVE PROJECTS', value: '45' }
          ].map((stat, idx) => (
            <Grid item xs={6} md={4} key={idx} sx={{ textAlign: 'center' }}>
              <Typography variant="h2" color="primary" sx={{ mb: 1, textShadow: '0 0 15px rgba(59, 130, 246, 0.4)' }}>
                {stat.value}
              </Typography>
              <Typography variant="caption" sx={{ letterSpacing: '0.2em', color: 'text.secondary' }}>
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
