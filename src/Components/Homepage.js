import React, { useState, useEffect } from "react";
import "../css/Homepage.css";

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollY(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTextScale = () => {
    if (scrollY < 400) return 1 - scrollY / 800; // Adjusted zoom for better visibility
    return 0; // Text disappears
  };

  const getTextOpacity = () => {
    return 1 - scrollY / 400; // Fade out effect for text
  };

  const getImageZoom = () => {
    if (scrollY < 400) return 1 + scrollY / 1200; // Image zooms slowly
    return 1.1; // Final zoom level
  };

  return (
    <div>
      <div className="image-container">
        <img
          src="https://via.placeholder.com/1500x1000"
          alt="Background"
          className="background-image"
          style={{
            transform: `scale(${getImageZoom()})`,
          }}
        />
        <div
          className="text-over-image"
          style={{
            transform: `scale(${getTextScale()})`,
            opacity: getTextOpacity(),
          }}
        >
          <h1>Scroll Down</h1>
        </div>
      </div>

      <div className="lower-content">
        <h2>Lower Component</h2>
        <p>
          Once the text disappears and the image becomes fully zoomed, you can
          scroll down to see this lower section. You can add any additional
          content here.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
