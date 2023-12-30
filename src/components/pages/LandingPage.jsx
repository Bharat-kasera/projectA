
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { PRIMARY_COLORS } from "../../utils/colors";
import { useState } from "react";
import {
  PRIMARY_TEXT_STYLES,
  SECONDARY_TEXT_STYLES,
} from "../../utils/textStyles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../../assets/logo.svg";
import map from "../../assets/worldMapl3.svg";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import "./Map.css";
import { Link, useNavigate } from "react-router-dom";



const landingPage = () => {
  const navigate = useNavigate();




  const [isRegionHovered, setRegionHovered] = useState(false);
  const [isLanguageHovered, setLanguageHovered] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Region");
  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setRegionHovered(false);
  };


  // ... (rest of your code)

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setLanguageHovered(false);

    if (language === "English") {
      navigate("./home");
    }
  };

  const menuStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: isRegionHovered ? "#1580AA" : "#FFFFFF",
    fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
    fontWeight: "400",
    color: "#93C6DB",
    position: "relative",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };
  const menuStyle2 = {
    width: "100px",
    height: "100px",
    backgroundColor: isLanguageHovered ? "#1580AA" : "#BFDDE8",
    fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
    fontWeight: "400",
    color: "#ffffff",
    position: "relative",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };
  const menuTextStyle = {
    position: "absolute",
    bottom: "10px", // Adjust the distance from the bottom
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
    fontWeight: "400",
    color: "#93C6DB",
    fontStyle: "italic",
  };
  const menuTextStyle2 = {
    position: "absolute",
    bottom: "10px", // Adjust the distance from the bottom
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
    fontWeight: "400",
    color: "#ffffff",
    fontStyle: "italic",
  };

  const subMenuStyle = {
    width: "100px",
    position: "absolute",
    height:"160px",
    overflowY:"scroll",
    top: "100px", // Adjust the distance from the main menu
    left: "0",
    display: isRegionHovered ? "block" : "none",
    transition: "display 0.3s", // Smooth transition effect

  };
  const subMenuStyle2 = {
    width: "100px",
    position: "absolute",
    top: "100px", // Adjust the distance from the main menu
    left: "0",
    display: isLanguageHovered ? "block" : "none",
    transition: "display 0.3s", // Smooth transition effect
  };

  const menuItemStyle = {
    width: "100px",
    height: "30px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <Box
      style={{
        backgroundColor: "#93C6DB",
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          color: PRIMARY_COLORS.white,
          fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
          position: "relative",
          zIndex: 2,
        }}
        paddingLeft={8}
      >
        <Box>
          <img
            src={logo}
            style={{ width: "300px", height: "auto", paddingBottom: "20px" }}
          />
          <Typography
            variant="h5"
            style={{ fontFamily: PRIMARY_TEXT_STYLES.lucidaSans }}
            fontWeight={400}
            fontStyle={"italic"}
          >
            Perfected to
          </Typography>
          <Typography
            variant="h5"
            style={{ fontFamily: PRIMARY_TEXT_STYLES.lucidaSans }}
            fontWeight={600}
            fontStyle={"italic"}
          >
            global standards
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "2px", paddingTop: "25px" }}>
          <div
            style={menuStyle}
            onMouseEnter={() => setRegionHovered(true)}
            onMouseLeave={() => setRegionHovered(false)}

          >
            <div style={menuTextStyle}>{selectedRegion}</div>
            <div style={subMenuStyle}>
              <div
                style={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#2E8EB4",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1C607F")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2E8EB4")}
                onClick={() => handleRegionClick("Saudi Arabia")}
              >
                Saudi Arabia
              </div>
              <div
                style={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#489CC0",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#2E7FA3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#489CC0")}
                onClick={() => handleRegionClick("UK")}
              >
                UK
              </div>
              <div
                style={{

                  width: "100px",
                  height: "30px",
                  backgroundColor: "#61ABC8",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#428daa")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#61ABC8")}
                onClick={() => handleRegionClick("France")}
              >
                France
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a99b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
                onClick={() => handleRegionClick("Spain")}

                
              >
                Spain
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a99b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
                onClick={() => handleRegionClick("North America")}

                
              >
                North America
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a99b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
                onClick={() => handleRegionClick("Spain")}

                
              >
                South America
              </div><div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a99b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
                onClick={() => handleRegionClick("Spain")}

                
              >
                Europe
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a99b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
                onClick={() => handleRegionClick("Spain")}

                
              >
                MiddleEast
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a99b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
                onClick={() => handleRegionClick("Spain")}

                
              >
                China
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a99b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
                onClick={() => handleRegionClick("Spain")}

                
              >
                Malaysia
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a99b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
                onClick={() => handleRegionClick("Spain")}

                
              >
                Australia
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a99b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
                onClick={() => handleRegionClick("Spain")}

                
              >
                New Zealand
              </div>
              
            </div>
          </div>

          <div
            style={menuStyle2}
            onMouseEnter={() => setLanguageHovered(true)}
            onMouseLeave={() => setLanguageHovered(false)}
          >
            <div style={menuTextStyle2} > {selectedLanguage}</div>
            <div style={subMenuStyle2}>
              <div
                style={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#2E8EB4",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1C607F")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2E8EB4")}
                onClick={() => handleLanguageClick("Arabic")}
              >
                Arabic
              </div>
              <div
                style={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#489CC0",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#2E7FA3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#489CC0")}
                onClick={() => handleLanguageClick("English")}
              >
                English
              </div>
              <div
                style={{

                  width: "100px",
                  height: "30px",
                  backgroundColor: "#61ABC8",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#428daa")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#61ABC8")}
                onClick={() => handleLanguageClick("France")}
              >
                France
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a99b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
                onClick={() => handleLanguageClick("Spanish")}
              >
                Spanish
              </div>
            </div>
          </div>


        </Box>
      </Box>

      <Box
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          marginRight: "0px",
          marginTop: "-50px",
          zIndex: 1,
        }}
      >
        <div
          className="earth"
          style={{ position: "relative", maxWidth: "1240px" }}
        >
          <img
            src={map}
            alt="map"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />

          <div className="pin Saudi">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Saudi Arabia
            </span>
          </div>
          <div className="pin uk">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              United Kingdom
            </span>
          </div>
          <div className="pin France">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              France
            </span>
          </div>
          <div className="pin Spain">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Spain
            </span>
          </div>
          <div className="pin NorthAmerica">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              North America
            </span>
          </div>
          <div className="pin SouthAmerica
">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              South America

            </span>
          </div>
          <div className="pin Europe ">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Europe 
            </span>
          </div>
          <div className="pin MiddleEast
 ">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Middle East
 
            </span>
          </div>
          <div className="pin China ">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              China 
            </span>
          </div>
          <div className="pin Malaysia ">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Malaysia 
            </span>
          </div>
          <div className="pin Australia  ">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Australia
            </span>
          </div>
          <div className="pin NewZealand ">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              New Zealand
            </span>
          </div>
        </div>
      </Box>
      {/* <Link
        to="./home"
        style={{ position: "absolute", bottom: 16, right: 16, zIndex: 3 }}
      >
        <IconButton
          aria-label="delete"
          size="large"
          sx={{ backgroundColor: "white" }}
        >
          <ArrowForwardIcon fontSize="inherit" />
        </IconButton>
      </Link> */}
    </Box>
  );
};

export default landingPage;
