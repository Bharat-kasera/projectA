// import { Box, Grid, Typography, IconButton } from "@mui/material";
// import { PRIMARY_COLORS } from "../../utils/colors";
// import { useState } from "react";
// import {
//   PRIMARY_TEXT_STYLES,
//   SECONDARY_TEXT_STYLES,
// } from "../../utils/textStyles";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import logo from "../../assets/logo.svg";
// import map from "../../assets/worldMapl3.svg";

// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import * as React from "react";
// import "./Map.css";
// import { Link, useNavigate } from "react-router-dom";

// const landingPage = () => {
//   const navigate = useNavigate();

//   const [isRegionHovered, setRegionHovered] = useState(false);
//   const [isLanguageHovered, setLanguageHovered] = useState(false);
//   const [selectedRegion, setSelectedRegion] = useState("Region");
//   const [selectedLanguage, setSelectedLanguage] = useState("Language");
//   const handleRegionClick = (region) => {
//     setSelectedRegion(region);
//     setRegionHovered(false);
//   };

//   // ... (rest of your code)

//   const handleLanguageClick = (language) => {
//     setSelectedLanguage(language);
//     setLanguageHovered(false);

//     if (language === "English") {
//       navigate("./home");
//     }
//   };

//   const menuStyle = {
//     width: "100px",
//     height: "100px",
//     backgroundColor: isRegionHovered ? "#1580AA" : "#FFFFFF",
//     fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//     fontWeight: "400",
//     color: "#93C6DB",
//     position: "relative",
//     marginBottom: "10px",
//     cursor: "pointer",
//     transition: "background-color 0.3s, color 0.3s",
//   };
//   const menuStyle2 = {
//     width: "100px",
//     height: "100px",
//     backgroundColor: isLanguageHovered ? "#1580AA" : "#BFDDE8",
//     fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//     fontWeight: "400",
//     color: "#ffffff",
//     position: "relative",
//     marginBottom: "10px",
//     cursor: "pointer",
//     transition: "background-color 0.3s, color 0.3s",
//   };
//   const menuTextStyle = {
//     position: "absolute",
//     bottom: "10px", // Adjust the distance from the bottom
//     left: "50%",
//     transform: "translateX(-50%)",
//     fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//     fontWeight: "400",
//     color: "#93C6DB",
//     fontStyle: "italic",
//   };
//   const menuTextStyle2 = {
//     position: "absolute",
//     bottom: "10px", // Adjust the distance from the bottom
//     left: "50%",
//     transform: "translateX(-50%)",
//     fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//     fontWeight: "400",
//     color: "#ffffff",
//     fontStyle: "italic",
//   };

//   const subMenuStyle = {
//     width: "100px",
//     position: "absolute",
//     top: "100px", // Adjust the distance from the main menu
//     left: "0",
//     display: isRegionHovered ? "block" : "none",
//     transition: "display 0.3s", // Smooth transition effect
//   };
//   const subMenuStyle2 = {
//     width: "100px",
//     position: "absolute",
//     top: "100px", // Adjust the distance from the main menu
//     left: "0",
//     display: isLanguageHovered ? "block" : "none",
//     transition: "display 0.3s", // Smooth transition effect
//   };

//   const menuItemStyle = {
//     width: "100px",
//     height: "30px",
//     backgroundColor: "black",
//     color: "white",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//   };

//   return (
//     <Box
//       style={{
//         backgroundColor: "#93C6DB",
//         height: "100vh",
//         width: "100vw",
//         position: "relative",
//         display: "flex",
//         alignItems: "flex-start",
//         justifyContent: "center",
//         flexDirection: "column",
//         overflow: "hidden",
//       }}
//     > <div style={{
//       position:"absolute",
//       display: "flex",
//           width: "520px",
//           height: "120vh",
//           flexDirection:"column",
//           justifyContent:"center",
//           backgroundColor: "#93C6DB",
//           filter: "blur(40px)", 
//           marginLeft:"-80px",
//           zIndex: 2,
//           overflow:"hidden",
//     }}>

//     </div>
//       <Box
//         sx={{
//           color: PRIMARY_COLORS.white,
//           fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//           position: "relative",
//           zIndex: 2,
//         }}
//         paddingLeft={8}
//       >
//         <Box>
//           <img
//             src={logo}
//             style={{ width: "300px", height: "auto", paddingBottom: "20px" }}
//           />
//           <Typography
//             variant="h5"
//             style={{ fontFamily: PRIMARY_TEXT_STYLES.lucidaSans }}
//             fontWeight={400}
//             fontStyle={"italic"}
//           >
//             Perfected to
//           </Typography>
//           <Typography
//             variant="h5"
//             style={{ fontFamily: PRIMARY_TEXT_STYLES.lucidaSans }}
//             fontWeight={600}
//             fontStyle={"italic"}
//           >
//             global standards
//           </Typography>
//         </Box>

//         <Box sx={{ display: "flex", gap: "2px", paddingTop: "25px" }}>
//           <div
//             style={menuStyle}
//             onMouseEnter={() => setRegionHovered(true)}
//             onMouseLeave={() => setRegionHovered(false)}
//           >
//             <div style={menuTextStyle}>{selectedRegion}</div>
//             <div style={subMenuStyle}>
//               <div
//                 style={{
//                   "&:hover": {
//                     backgroundColor: "#2E8EB4", // Keep the same color on hover
//                   },
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#2E8EB4",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#1C607F")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#2E8EB4")}
//                 onClick={() => handleRegionClick("North America")}
//               >
//                 North America
//               </div>
//               <div
//                 style={{
//                   "&:hover": {
//                     backgroundColor: "#489CC0", // Keep the same color on hover
//                   },
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#489CC0",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#2E7FA3")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#489CC0")}
//                 onClick={() => handleRegionClick("Latin America")}
//               >
//                 Latin America
//               </div>
//               <div
//                 style={{
//                   "&:hover": {
//                     backgroundColor: "#2E8EB4", // Keep the same color on hover
//                   },
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#61ABC8",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#428daa")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#61ABC8")}
//                 onClick={() => handleRegionClick("Europe")}
//               >
//                 Europe
//               </div>
//               <div
//                 style={{
//                   "&:hover": {
//                     backgroundColor: "#2E8EB4", // Keep the same color on hover
//                   },
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#7BB9D2",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#5a99b3")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
//                 onClick={() => handleRegionClick("Middle East")}
//               >
//                 Middle East
//               </div>
//               <div
//                 style={{
//                   "&:hover": {
//                     backgroundColor: "#2E8EB4", // Keep the same color on hover
//                   },
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#a3ccdb",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#8ab8c7")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#a3ccdb")}
//                 onClick={() => handleRegionClick("Asia")}
//               >
//                 Asia
//               </div>
//               <div
//                 style={{
//                   "&:hover": {
//                     backgroundColor: "#2E8EB4", // Keep the same color on hover
//                   },
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#c8e0ea",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#aecdd8")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#c8e0ea")}
//                 onClick={() => handleRegionClick("Oceania")}
//               >
//                 Oceania
//               </div>
              
//             </div>
//           </div>

//           <div
//             style={menuStyle2}
//             onMouseEnter={() => setLanguageHovered(true)}
//             onMouseLeave={() => setLanguageHovered(false)}
//           >
//             <div style={menuTextStyle2}> {selectedLanguage}</div>
//             <div style={subMenuStyle2}>
//               <div
//                 style={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#2E8EB4",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#1C607F")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#2E8EB4")}
//                 onClick={() => handleLanguageClick("Arabic")}
//               >
//                 Arabic
//               </div>
//               <div
//                 style={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#489CC0",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#2E7FA3")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#489CC0")}
//                 onClick={() => handleLanguageClick("English")}
//               >
//                 English
//               </div>
//               <div
//                 style={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#61ABC8",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#428daa")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#61ABC8")}
//                 onClick={() => handleLanguageClick("France")}
//               >
//                 France
//               </div>
//               <div
//                 style={{
//                   "&:hover": {
//                     backgroundColor: "#2E8EB4", // Keep the same color on hover
//                   },
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#7BB9D2",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#5a99b3")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#7BB9D2")}
//                 onClick={() => handleLanguageClick("Spanish")}
//               >
//                 Spanish
//               </div>
//             </div>
//           </div>
//         </Box>
//       </Box>

//       <Box
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           marginRight: "0px",
//           marginTop: "-50px",
//           zIndex: 1,
//           display:"flex",
//         }}
//       >
//         <div
//           className="earth"
//           style={{ position: "relative", maxWidth: "1240px" }}
//         >
//           <img
//             src={map}
//             alt="map"
//             style={{ width: "100%", height: "100%", objectFit: "contain" }}
//           />

//           <div className="pin Saudi">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Saudi Arabia
//             </span>
//           </div>
//           <div className="pin uk">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               United Kingdom
//             </span>
//           </div>
//           <div className="pin France">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               France
//             </span>
//           </div>
//           <div className="pin Spain">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Spain
//             </span>
//           </div>
//           <div className="pin NorthAmerica">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               North America
//             </span>
//           </div>
//           <div
//             className="pin LatinAmerica
// "
//           >
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Latin America
//             </span>
//           </div>
//           <div className="pin Europe ">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Europe
//             </span>
//           </div>
//           <div
//             className="pin MiddleEast
//  "
//           >
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Middle East
//             </span>
//           </div>
//           <div className="pin Asia ">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Asia
//             </span>
//           </div>
//           <div className="pin Oceania ">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Oceania
//             </span>
//           </div>
//         </div>

//         <div
//           className="earth"
//           style={{ position: "relative", maxWidth: "1240px" }}
//         >
//           <img
//             src={map}
//             alt="map"
//             style={{ width: "100%", height: "100%", objectFit: "contain" }}
//           />

//           <div className="pin Saudi">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Saudi Arabia
//             </span>
//           </div>
//           <div className="pin uk">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               United Kingdom
//             </span>
//           </div>
//           <div className="pin France">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               France
//             </span>
//           </div>
//           <div className="pin Spain">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Spain
//             </span>
//           </div>
//           <div className="pin NorthAmerica">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               North America
//             </span>
//           </div>
//           <div className="pin LatinAmerica">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Latin America
//             </span>
//           </div>
//           <div className="pin Europe ">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Europe
//             </span>
//           </div>
//           <div
//             className="pin MiddleEast
//  "
//           >
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Middle East
//             </span>
//           </div>
//           <div className="pin Asia ">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//             Asia
//             </span>
//           </div>
//           <div className="pin Oceania ">
//             <span
//               style={{
//                 fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                 fontWeight: "300",
//                 fontStyle: "italic",
//               }}
//             >
//               Oceania
//             </span>
//           </div>
//         </div>
//       </Box>

//     </Box>
//   );
// };

// export default landingPage;



import { Box, Grid, Typography, IconButton } from "@mui/material";
import { PRIMARY_COLORS } from "../../utils/colors";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState,useEffect, useRef } from "react";
import {
  PRIMARY_TEXT_STYLES,
  SECONDARY_TEXT_STYLES,
} from "../../utils/textStyles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../../assets/logo.png";
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

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setLanguageHovered(false);

    if (language === "English") {
      navigate("./home");
    }
  };

  const menuStyle = {
    width: "125px",
    height: "40px",
    backgroundColor: isRegionHovered ? "#3c7ea6" : "",
    fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
    fontWeight: "400",
    color: "#93C6DB",
    position: "relative",
    marginBottom: "10px",
    cursor: "pointer",
    borderRadius:"4px",
    transition: "background-color 0.3s, color 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const menuStyle2 = {
    width: "125px",
    borderRadius:"4px",
    height: "40px",
    backgroundColor: isLanguageHovered ? "#3c7ea6" : "",
    fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
    fontWeight: "400",
    color: "#ffffff",
    position: "relative",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const menuTextStyle = {
    overflow:"hidden",
    fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
    fontWeight: "400",
    color: "#ffffff",
    fontStyle: "italic",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap:"1px",
    fontSize: "13px",
    textOverflow: "ellipsis",
  };
  const menuTextStyle2 = {
    position: "absolute",
    bottom: "8px", // Adjust the distance from the bottom
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
    fontWeight: "400",
    color: "#ffffff",
    fontStyle: "italic",
    display:"flex",
    alignItems:"center",
    gap:"1px",
    fontSize: "13px",
  };

  const subMenuStyle = {
    width: "120px",
    position: "absolute",
    top: "41px", // Adjust the distance from the main menu
    left: "0",
    display: isRegionHovered ? "block" : "none",
    transition: "display 0.3s", // Smooth transition effect

  };
  const subMenuStyle2 = {
    width: "100px",
    position: "absolute",
    top: "41px", // Adjust the distance from the main menu
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
    > <div style={{
      position:"absolute",
      display: "flex",
          width: "520px",
          height: "120vh",
          flexDirection:"column",
          justifyContent:"center",
          backgroundColor: "#93C6DB",
          filter: "blur(40px)", 
          marginLeft:"-80px",
          zIndex: 2,
          overflow:"hidden",
    }}>

    </div>
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
            <div style={menuTextStyle}>{selectedRegion}<ArrowDropDownIcon/> </div>
            <div style={subMenuStyle}>
              <div
                style={{
                  width: "125px",
                  borderRadius:"4px",
                  height: "30px",
                  backgroundColor: "#4785AC",
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
                  marginBottom: "1px",
                  textOverflow: "ellipsis",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0B1744")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4785AC")}
                onClick={() => handleRegionClick("North America")}
              >
                North America
              </div>
              <div
                style={{
                  width: "125px",
                  borderRadius:"4px",
                  height: "30px",
                  backgroundColor: "#508CB0",
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
                  marginBottom: "1px",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0B1744")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#508CB0")}
                onClick={() => handleRegionClick("Latin America")}
              >
                Latin America
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "125px",
                  borderRadius:"4px",
                  height: "30px",
                  backgroundColor: "#5994B6",
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
                  marginBottom: "1px",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0B1744")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#5994B6")}
                onClick={() => handleRegionClick("Europe")}
              >
                Europe
              </div>
              <div
                style={{
                  width: "125px",
                  borderRadius:"4px",
                  height: "30px",
                  backgroundColor: "#6399BB",
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
                  marginBottom: "1px",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0B1744")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#6399BB")}
                onClick={() => handleRegionClick("Middle East")}
              >
                Middle East
              </div>
              <div
                style={{
                  width: "125px",
                  borderRadius:"4px",
                  height: "30px",
                  backgroundColor: "#6EA1C0",
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
                  marginBottom: "1px",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0B1744")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#6EA1C0")}
                onClick={() => handleRegionClick("Asia")}
              >
                Asia
              </div>
              <div
                style={{
                  width: "125px",
                  borderRadius:"4px",
                  height: "30px",
                  backgroundColor: "#77A8C6",
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
                  marginBottom: "1px",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0B1744")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#77A8C6")}
                onClick={() => handleRegionClick("Oceania")}
              >
                Oceania
              </div>
              
            </div>
          </div>

          <div
            style={menuStyle2}
            onMouseEnter={() => setLanguageHovered(true)}
            onMouseLeave={() => setLanguageHovered(false)}
          >
            <div style={menuTextStyle2}> {selectedLanguage} <ArrowDropDownIcon/></div>
            <div style={subMenuStyle2}>
              <div
                style={{
                  width: "125px",
                  borderRadius:"4px",
                  height: "30px",
                  backgroundColor: "#4785AC",
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
                  marginBottom: "1px",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0B1744")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4785AC")}
                onClick={() => handleLanguageClick("Arabic")}
              >
                Arabic
              </div>
              <div
                style={{
                  width: "125px",
                  borderRadius:"4px",
                  height: "30px",
                  backgroundColor: "#508CB0",
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
                  marginBottom: "1px",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0B1744")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#508CB0")}
                onClick={() => handleLanguageClick("English")}
              >
                English
              </div>
              <div
                style={{
                  width: "125px",
                  borderRadius:"4px",
                  height: "30px",
                  backgroundColor: "#5994B6",
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
                  marginBottom: "1px",

                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0B1744")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#5994B6")}
                onClick={() => handleLanguageClick("France")}
              >
                France
              </div>
              <div
                style={{
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  width: "125px",
                  borderRadius:"4px",
                  height: "30px",
                  backgroundColor: "#6399BB",
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
                  (e.target.style.backgroundColor = "#0B1744")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#6399BB")}
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
          display:"flex",
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
          <div
            className="pin LatinAmerica
"
          >
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Latin America
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
          <div
            className="pin MiddleEast
 "
          >
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
          <div className="pin Asia ">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Asia
            </span>
          </div>
          <div className="pin Oceania ">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Oceania
            </span>
          </div>
        </div>

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
          <div className="pin LatinAmerica">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Latin America
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
          <div
            className="pin MiddleEast
 "
          >
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
          <div className="pin Asia ">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
            Asia
            </span>
          </div>
          <div className="pin Oceania ">
            <span
              style={{
                fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Oceania
            </span>
          </div>
        </div>
      </Box>

    </Box>
  );
};

export default landingPage;



