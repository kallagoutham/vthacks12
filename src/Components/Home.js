import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css'; // Import the theme CSS

const Home = () => {
  const navigate = useNavigate();

  const handleSurveyRedirect = () => {
    navigate('/survey');
  };

  return (
    <Box
      className="home-container"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--background-color)',
        padding: '40px 20px',
      }}
    >
      {/* Left Section - Text Content */}
      <Container
        maxWidth="md"
        sx={{
          textAlign: 'left',
          flex: 1,
          paddingRight: '40px',
          color: 'var(--text-color)',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            marginBottom: '30px',
            color: 'var(--text-color)',
          }}
        >
          Welcome to BetterYou for a Better Tomorrow
        </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{
            marginBottom: '20px',
            lineHeight: 1.8,
            fontSize: '1.2rem',
            color: 'var(--text-color)',
          }}
        >
          BetterYou offers a personalized approach to improving your health and well-being. 
          By using our AI-powered LLama model, we analyze key factors like your age, lifestyle, 
          habits, and health status to create a weekly plan for food and exercise that perfectly fits you.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={handleSurveyRedirect}
          sx={{
            backgroundColor: 'var(--button-background)',
            color: '#ffffff',
            fontWeight: 'bold',
            padding: '14px 28px',
            borderRadius: '50px',
            fontSize: '1.1rem',
            ':hover': {
              backgroundColor: 'var(--button-hover-background)',
            },
          }}
        >
          Take Survey
        </Button>
      </Container>

      {/* Right Section - Images */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '40px',
        }}
      >
        <Box
          component="img"
          src="path/to/your/image1.jpg"
          alt="Image 1"
          sx={{
            width: '40%',
            height: 'auto',
            marginRight: '20px',
          }}
        />
        <Box
          component="img"
          src="path/to/your/image2.jpg"
          alt="Image 2"
          sx={{
            width: '40%',
            height: 'auto',
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
