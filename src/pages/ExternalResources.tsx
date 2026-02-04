import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Chip, LinearProgress } from '@mui/material';
import { Code, Terminal, Cloud, BarChart, TrendingUp, Stars, AutoAwesome, Security } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ExternalResources: React.FC = () => {
  const modelChart = [
    { name: 'Claude 3.5 Sonnet', score: 49.0, provider: 'Anthropic', rank: 1 },
    { name: 'GPT-4o', score: 43.4, provider: 'OpenAI', rank: 2 },
    { name: 'DeepSeek-V3', score: 41.2, provider: 'DeepSeek', rank: 3 },
    { name: 'Llama 3.1 405B', score: 38.5, provider: 'Meta', rank: 4 },
    { name: 'Gemini 1.5 Pro', score: 36.8, provider: 'Google', rank: 5 },
  ];

  const ideChart = [
    { name: 'Cursor', description: 'The AI-first code editor built on VS Code.', tags: ['Popular', 'Agentic'], icon: <Stars fontSize="small" color="primary" /> },
    { name: 'VS Code + Copilot', description: 'The industry standard with deep integration.', tags: ['Standard'], icon: <Code fontSize="small" /> },
    { name: 'Trae', description: 'Adaptive AI IDE for seamless development.', tags: ['New', 'Fast'], icon: <AutoAwesome fontSize="small" color="secondary" /> },
    { name: 'Windsurf', description: 'The first agentic IDE by Codeium.', tags: ['Agentic'], icon: <TrendingUp fontSize="small" /> },
    { name: 'Zed', description: 'High-performance editor with built-in AI.', tags: ['Speed'], icon: <Security fontSize="small" /> },
  ];

  const providerChart = [
    { name: 'OpenRouter', type: 'Aggregator', description: 'Unified API for all major LLMs.' },
    { name: 'Hugging Face', type: 'Platform', description: 'The home of open-source AI models.' },
    { name: 'Groq', type: 'Inference', description: 'Ultra-fast LPU inference engine.' },
    { name: 'Together AI', type: 'Inference', description: 'Cloud platform for open-source models.' },
    { name: 'Anthropic', type: 'Lab', description: 'Safety-focused AI research and models.' },
  ];

  const cliChart = [
    { name: 'Aider', type: 'Coding', description: 'Pair program with AI in your terminal.' },
    { name: 'Open Interpreter', type: 'Agent', description: 'Let LLMs run code on your computer.' },
    { name: 'Claude Engineer', type: 'Agent', description: 'Interactive CLI for software engineering.' },
    { name: 'ShellGPT', type: 'Utility', description: 'Bring GPT capabilities to your shell.' },
    { name: 'Fabric', type: 'Framework', description: 'Crowdsourced AI prompts for the CLI.' },
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
            External AI Resources
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', fontWeight: 300 }}>
            Global benchmarking and industry-leading tooling. Track the evolution of intelligence.
          </Typography>
        </Box>
      </motion.div>

      <Grid container spacing={4}>
        {/* AI Models Chart */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
                  <BarChart color="primary" />
                  <Typography variant="h5" fontWeight={700}>TOP MODELS [SWE-BENCH]</Typography>
                </Box>
                <List sx={{ p: 0 }}>
                  {modelChart.map((model, index) => (
                    <Box key={model.name} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Typography variant="h6" sx={{ color: 'primary.main', opacity: 0.5, minWidth: 24, fontFamily: '"Orbitron", sans-serif' }}>
                            {String(model.rank).padStart(2, '0')}
                          </Typography>
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>{model.name}</Typography>
                            <Typography variant="caption" color="text.secondary">{model.provider}</Typography>
                          </Box>
                        </Box>
                        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>{model.score}%</Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={model.score * 1.5} 
                        sx={{ 
                          height: 4, 
                          borderRadius: 2,
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(90deg, #2563EB, #60A5FA)',
                            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                          }
                        }} 
                      />
                    </Box>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* AI IDEs Chart */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
                  <Code color="secondary" />
                  <Typography variant="h5" fontWeight={700}>AGENTIC IDE RANKING</Typography>
                </Box>
                <List sx={{ p: 0 }}>
                  {ideChart.map((ide, index) => (
                    <React.Fragment key={ide.name}>
                      <ListItem sx={{ px: 0, py: 2 }}>
                        <ListItemAvatar sx={{ minWidth: 48 }}>
                          <Avatar sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', border: '1px solid rgba(167, 139, 250, 0.2)' }}>
                            {ide.icon}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{ide.name}</Typography>
                              {ide.tags.map(tag => (
                                <Chip 
                                  key={tag} 
                                  label={tag} 
                                  size="small" 
                                  sx={{ 
                                    height: 18, 
                                    fontSize: '0.6rem', 
                                    fontWeight: 700,
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    color: 'text.secondary'
                                  }} 
                                />
                              ))}
                            </Box>
                          }
                          secondary={<Typography variant="body2" color="text.secondary">{ide.description}</Typography>}
                        />
                      </ListItem>
                      {index < ideChart.length - 1 && <Divider sx={{ borderColor: 'rgba(148, 163, 184, 0.05)' }} />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Model Providers */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
                  <Cloud sx={{ color: '#F59E0B' }} />
                  <Typography variant="h5" fontWeight={700}>MODEL PROVIDERS</Typography>
                </Box>
                <Grid container spacing={2}>
                  {providerChart.map((provider) => (
                    <Grid item xs={12} key={provider.name}>
                      <Box sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        border: '1px solid rgba(148, 163, 184, 0.1)',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(59, 130, 246, 0.2)' },
                        transition: 'all 0.2s ease'
                      }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{provider.name}</Typography>
                          <Chip label={provider.type} size="small" variant="outlined" sx={{ fontSize: '0.6rem', height: 18 }} />
                        </Box>
                        <Typography variant="body2" color="text.secondary">{provider.description}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* CLI AI Tools */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
                  <Terminal color="primary" />
                  <Typography variant="h5" fontWeight={700}>CLI INTELLIGENCE</Typography>
                </Box>
                <Grid container spacing={2}>
                  {cliChart.map((tool) => (
                    <Grid item xs={12} key={tool.name}>
                      <Box sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        border: '1px solid rgba(148, 163, 184, 0.1)',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        '&:hover': { borderColor: 'rgba(59, 130, 246, 0.2)' }
                      }}>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{tool.name}</Typography>
                          <Typography variant="body2" color="text.secondary">{tool.description}</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right', minWidth: 80 }}>
                          <Typography variant="caption" sx={{ 
                            px: 1, py: 0.5, 
                            borderRadius: 1, 
                            backgroundColor: 'primary.main', 
                            color: 'white',
                            fontSize: '0.6rem',
                            fontWeight: 700
                          }}>
                            {tool.type.toUpperCase()}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExternalResources;
