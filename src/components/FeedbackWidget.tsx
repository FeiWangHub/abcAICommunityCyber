import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Fab, 
  Modal, 
  Typography, 
  TextField, 
  Button, 
  Stack, 
  IconButton, 
  Snackbar, 
  Alert,
  Paper,
  Divider,
  Avatar,
  CircularProgress
} from '@mui/material';
import { ChatBubble, Close, Send, AccountCircle } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface Feedback {
  id: string;
  name: string;
  email: string;
  comment: string;
  created_at: string;
}

const API_BASE_URL = 'http://localhost:8000';

const FeedbackWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/feedback`);
      if (response.ok) {
        const data = await response.json();
        setFeedbacks(data);
      }
    } catch (error) {
      console.error('Failed to fetch feedbacks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      fetchFeedbacks();
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, comment }),
      });

      if (response.ok) {
        setSnackbar({ open: true, message: 'Feedback submitted successfully!', severity: 'success' });
        setName('');
        setEmail('');
        setComment('');
        fetchFeedbacks();
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to submit feedback. Please try again.', severity: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Fab 
        color="primary" 
        aria-label="feedback"
        onClick={() => setOpen(true)}
        sx={{ 
          position: 'fixed', 
          bottom: 32, 
          right: 32,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
          '&:hover': { transform: 'scale(1.1)' },
          transition: 'all 0.3s ease'
        }}
      >
        <ChatBubble />
      </Fab>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="feedback-modal-title"
        closeAfterTransition
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 500 },
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: 4,
          boxShadow: 24,
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          backdropFilter: 'blur(20px)',
        }}>
          {/* Header */}
          <Box sx={{ p: 3, borderBottom: '1px solid rgba(148, 163, 184, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'rgba(59, 130, 246, 0.05)' }}>
            <Typography id="feedback-modal-title" variant="h6" sx={{ fontFamily: '"Orbitron", sans-serif', color: 'primary.main' }}>
              COMMUNITY FEEDBACK
            </Typography>
            <IconButton onClick={() => setOpen(false)} size="small">
              <Close />
            </IconButton>
          </Box>

          <Box sx={{ p: 3, overflowY: 'auto', flexGrow: 1 }}>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <Stack spacing={2} sx={{ mb: 4 }}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  size="small"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Comment"
                  multiline
                  rows={3}
                  variant="outlined"
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  disabled={submitting}
                  endIcon={submitting ? <CircularProgress size={20} /> : <Send />}
                >
                  Broadcast Message
                </Button>
              </Stack>
            </form>

            <Divider sx={{ mb: 3 }}>
              <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.1em' }}>
                RECENT BROADCASTS
              </Typography>
            </Divider>

            {/* Feedback List */}
            <Stack spacing={2}>
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                  <CircularProgress size={24} />
                </Box>
              ) : feedbacks.length === 0 ? (
                <Typography variant="body2" color="text.secondary" align="center" sx={{ py: 4 }}>
                  No feedback yet. Be the first to broadcast!
                </Typography>
              ) : (
                feedbacks.map((fb) => (
                  <Paper key={fb.id} sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(148, 163, 184, 0.05)' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.main', fontSize: '0.75rem' }}>
                        {fb.name[0].toUpperCase()}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1 }}>
                          {fb.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.65rem' }}>
                          {new Date(fb.created_at).toLocaleString()}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                      {fb.comment}
                    </Typography>
                  </Paper>
                ))
              )}
            </Stack>
          </Box>
        </Box>
      </Modal>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FeedbackWidget;
