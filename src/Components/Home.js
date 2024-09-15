import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/Home.css"; // Import the theme CSS

const Home = () => {
  const navigate = useNavigate();

  const handleSurveyRedirect = () => {
    navigate("/survey");
  };

  return (
    <Box
      className="home-container"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--background-color)",
        padding: "40px 20px",
      }}
    >
      {/* Left Section - Text Content */}
      <Container
        maxWidth="md"
        sx={{
          textAlign: "left",
          flex: 1,
          paddingRight: "40px",
          color: "var(--text-color)",
        }}
      >
        <Typography
  variant="h2"
  component="h1"
  sx={{
    fontWeight: 400, 
    marginBottom: "30px",
    color: "rgba(255, 255, 255, 0.1)", 
    WebkitTextStroke: "2px var(--text-color)", 
    textShadow: "0 10px 10px rgba(0, 0, 0, 0.4)", 
    letterSpacing: "2px", 
  }}
>
  Welcome to BetterYou for a Better Tomorrow
</Typography>


        <Typography
          variant="body1"
          component="p"
          sx={{
            marginBottom: "20px",
            lineHeight: 1.8,
            fontSize: "1.2rem",
            color: "var(--text-color)",
          }}
        >
          BetterYou provides a personalized approach to enhancing your health
          and well-being. Using advanced Generative AI, we analyze key factors
          such as your age, lifestyle, habits, and health status to create a
          tailored weekly plan for your diet and exercise, designed just for
          you.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={handleSurveyRedirect}
          sx={{
            backgroundColor: "var(--button-background)",
            color: "#ffffff",
            fontWeight: "bold",
            padding: "14px 28px",
            borderRadius: "50px",
            fontSize: "1.1rem",
            ":hover": {
              backgroundColor: "var(--button-hover-background)",
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "40px",
        }}
      >
        <Box
          component="img"
          src={require("../assets/MealPrepContainer.webp")}
          alt="Image 1"
          sx={{
            width: "100%",
            height: "auto",
            // marginRight: '-20px',
            marginLeft: "-50%",
          }}
        />
        <Box
          component="img"
          src={require("../assets/BarBellRod.webp")}
          alt="Image 2"
          sx={{
            width: "40%",
            height: "auto",
            position: "absolute",
            right: "-5%",
            top: "13%",
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
