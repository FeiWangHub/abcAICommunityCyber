import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Alpha, IconButton } from '@mui/material';
import { AutoAwesome, Psychology, Description, Launch, MenuBook, Terminal, Memory, Hub, Shield } from '@mui/icons-material';
import { motion } from 'framer-motion';

const InternalResources: React.FC = () => {
  const aiPlatformItems = [
    {
      title: 'Model Garden',
      description: 'A comprehensive collection of pre-trained models including GPT-4, Claude 3, Llama 3, and more. Optimized for internal use cases.',
      icon: <AutoAwesome />,
      color: '#3B82F6',
      status: 'STABLE'
    },
    {
      title: 'RAG Studio',
      description: 'Build and deploy Retrieval-Augmented Generation pipelines with ease. Connect your internal data to powerful LLMs.',
      icon: <Psychology />,
      color: '#A78BFA',
      status: 'BETA'
    },
    {
      title: 'Document Wiki',
      description: 'The central hub for all AI-related documentation, best practices, and internal research papers.',
      icon: <Description />,
      color: '#F59E0B',
      status: 'UP-TO-DATE'
    }
  ];

  const tools = [
    { name: 'Prompt Book', category: 'Developer Tool', wiki: '#', web: '#', icon: <Terminal fontSize="small" /> },
    { name: 'MCP Hub', category: 'Infrastructure', wiki: '#', web: '#', icon: <Hub fontSize="small" /> },
    { name: 'Model Optimizer', category: 'Optimization', wiki: '#', web: '#', icon: <Memory fontSize="small" /> },
    { name: 'Evaluation Suite', category: 'Testing', wiki: '#', web: '#', icon: <Psychology fontSize="small" /> },
    { name: 'AI Proxy Gateway', category: 'Security', wiki: '#', web: '#', icon: <Shield fontSize="small" /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" gutterBottom className="glow-text" sx={{ mb: 2 }}>
            Internal AI Resources
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', fontWeight: 300 }}>
            Empowering our organization with state-of-the-art AI capabilities and distributed knowledge systems.
          </Typography>
        </Box>
      </motion.div>

      {/* AI Platform Section */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Terminal color="primary" /> AI Platform
        </Typography>
        <Grid container spacing={4}>
          {aiPlatformItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                      <Box sx={{ 
                        p: 1.5, 
                        borderRadius: 2, 
                        backgroundColor: `${item.color}15`, 
                        color: item.color,
                        display: 'flex'
                      }}>
                        {React.cloneElement(item.icon as React.ReactElement, { sx: { fontSize: 32 } })}
                      </Box>
                      <Chip 
                        label={item.status} 
                        size="small" 
                        sx={{ 
                          fontSize: '0.65rem', 
                          fontWeight: 700,
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: 'text.secondary'
                        }} 
                      />
                    </Box>
                    <Typography variant="h5" component="div" sx={{ mb: 2, fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button 
                      fullWidth
                      variant="outlined" 
                      size="medium" 
                      endIcon={<Launch />}
                      sx={{ borderColor: 'rgba(59, 130, 246, 0.2)' }}
                    >
                      Access Module
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Tooling Table Section */}
      <Box>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Memory color="primary" /> Available Tooling
        </Typography>
        <TableContainer 
          component={Paper} 
          sx={{ 
            borderRadius: 4, 
            background: 'rgba(17, 17, 24, 0.4)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ borderBottom: '2px solid rgba(59, 130, 246, 0.1)' }}>
                <TableCell sx={{ fontWeight: 700, color: 'primary.main', py: 3 }}>RESOURCE NAME</TableCell>
                <TableCell sx={{ fontWeight: 700, color: 'primary.main' }}>CATEGORY</TableCell>
                <TableCell sx={{ fontWeight: 700, color: 'primary.main' }} align="right">INTERFACES</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tools.map((tool, idx) => (
                <TableRow 
                  key={tool.name} 
                  sx={{ 
                    '&:hover': { backgroundColor: 'rgba(59, 130, 246, 0.03)' },
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ color: 'text.secondary', display: 'flex' }}>{tool.icon}</Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{tool.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={tool.category} 
                      size="small" 
                      variant="outlined" 
                      sx={{ 
                        borderRadius: 1, 
                        fontSize: '0.7rem',
                        borderColor: 'rgba(148, 163, 184, 0.2)',
                        color: 'text.secondary'
                      }} 
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button size="small" variant="text" startIcon={<MenuBook />} sx={{ mr: 1, color: 'text.secondary' }}>Wiki</Button>
                    <IconButton size="small" color="primary">
                      <Launch fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default InternalResources;
