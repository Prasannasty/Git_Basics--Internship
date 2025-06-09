import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress, Breadcrumbs, Paper } from '@mui/material';

import { Skeleton } from '@mui/material';



const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const[view,setView]=useState('All');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return(()=>{
      clearInterval(timer);
    })
  }, []);

  const fetchQuote = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://favqs.com/api/qotd');
      if (!response.ok) {
        throw new Error('Failed to fetch quote'); 
      }
      const data = await response.json();
      setQuote(data.quote.body);
      setAuthor(data.quote.author);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);



  return (
    <Box
      component={Paper}
      elevation={4}
      sx={{  maxWidth: 800,  width: '90vw',  height: 500,  p: 4,  borderRadius: 2,mx: 'auto',  position: 'absolute',  top: '57%',left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#f0f4f8', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', overflow: 'hidden', textAlign: 'center',
      }}
    >

          
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333' }}>
        Live Clock and Quotes
      </Typography>



      <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#222' }}>
        {time}
      </Typography>

      <Box  sx={{ minHeight: 120, maxHeight: 120, mb: 2, px: 2, overflowY: 'auto', wordWrap: 'break-word', fontStyle: 'italic', color: '#222',
        }}
      >
        {loading ? (
           <>
    <Skeleton variant="text" width="80%" height={30} sx={{ mb: 1 }} />
    <Skeleton variant="text" width="40%" height={25} />
  </>
        ) : error ? (
          <Typography color="error">Error: {error}</Typography>
        ) : (
          <>
            <Typography variant="body1">"{quote}"</Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, color: '#666' }}>
              — {author}
            </Typography>
          </>
        )}
      </Box>

      <Button
        variant="contained"
        onClick={fetchQuote}
        sx={{ mt: 2, bgcolor: '#007bff', '&:hover': { bgcolor: '#0056b3' } }}
      >
        New Quote
      </Button>
    </Box>
  );
};

export default Clock;
