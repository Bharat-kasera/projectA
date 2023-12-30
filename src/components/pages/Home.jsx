import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { PRIMARY_COLORS } from "../../utils/colors";
import { PRIMARY_TEXT_STYLES } from "../../utils/textStyles";

// Traditional imports for card data
import imageUrl1 from "../../assets/modern-dining-room-living-room-with-luxury-decor.jpg";
import imageUrl2 from "../../assets/yarnHeaderImage.jpg";
import imageUrl3 from "../../assets/legs-soccer-football-player.jpg";
import imageUrl4 from "../../assets/day-ends-we-see-wake-lights-cars-highway.jpg";

const Home = () => {
  // Card data with traditional imports
  const cardsData = [
    {
      imageUrl: imageUrl1,
      link: "/fabrics",
      title: "Fabrics",
    },
    {
      imageUrl: imageUrl2,
      link: "/yarns",
      title: "Yarns",
    },
    {
      imageUrl: imageUrl3,
      link: "/fibers",
      title: "Fibers",
    },
    {
      imageUrl: imageUrl4,
      link: "/geotextile",
      title: "Geotextile",
    },
  ];

  return (
    <Box
      style={{
        backgroundColor: "#93C6DB",
        width: "100vw",
        position: "relative",
      }}
    >
      <Navbar />

      {/* Images */}
      <Box
        sx={{
          display: "flex",
          paddingBottom: "10px",
          transition: "width 0.2s",
          height: "59.5vh",
        }}
        className="card-grid"
      >
        {cardsData.map((card, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: "60vh",
              transition: "width 0.3s ease",
            }}
            className="card"
          >
            <div className="hoverWrapper">
              {/* Your image and existing code */}
              <img
                src={card.imageUrl}
                alt={`Grid Image ${index + 1}`}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  transition: "width 0.4s ease",
                }}
                className="imgHover"
              />
              {/* Square Box with Text */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  padding: "10px",
                  textAlign: "left",
                  width: "200px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1.5,
                  cursor: "pointer",
                  transition: "width 0.4s ease, background-color 0.2s",
                  ":hover": {
                    backgroundColor: PRIMARY_COLORS.royalBlue,
                  },
                }}
                className="textBox"
              >
                {card.link && (
                  <Link
                    to={card.link}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Typography
                      fontSize={30}
                      fontWeight="500"
                      style={{
                        fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                        fontStyle: "italic",
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Link>
                )}
              </Box>
            </div>
          </Box>
        ))}
      </Box>

      <Box padding={8}>
        <Typography
          sx={{
            color: PRIMARY_COLORS.royalBlue,
            fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "400",
          }}
        >
          {/* Your text content */}
        </Typography>
      </Box>

      <Link to="/" style={{ position: "absolute", bottom: 16, left: 16 }}>
        <IconButton
          aria-label="delete"
          size="large"
          sx={{ backgroundColor: "white" }}
        >
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
      </Link>
      <Footer />
    </Box>
  );
};

export default Home;
