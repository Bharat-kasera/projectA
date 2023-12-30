import { Box, Grid, Typography, IconButton } from "@mui/material";
import { PRIMARY_COLORS } from "../../utils/colors";
import { useState } from "react";
import {
  PRIMARY_TEXT_STYLES,
  SECONDARY_TEXT_STYLES,
} from "../../utils/textStyles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import map from "../../assets/worldMapl.svg";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import "./Map.css";


const landingPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLanguageBoxClicked, setLanguageBoxClicked] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Region");
  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const handleLanguageItemClick = (language) => {
    setSelectedLanguage(language);
    handleClose();
  };
  const handleRegionItemClick = (region) => {
    setSelectedRegion(region);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setLanguageBoxClicked(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setLanguageBoxClicked(false);
  };

  const [isLanguageBoxClicked1, setLanguageBoxClicked1] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const open1 = Boolean(anchorEl1);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
    setLanguageBoxClicked1(true);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
    setLanguageBoxClicked1(false);
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
          <Box>
            <Box
              sx={{
                cursor: "pointer",
                backgroundColor: isLanguageBoxClicked1 ? "#1580AA" : "#FFFFFF",
                padding: "10px",
                position: "relative",
                width: "100px", // Adjust the width as needed for a square
                height: "90px", // Adjust the height as needed for a square
              }}
              onClick={handleClick1}
            >
              <Typography
                variant="body1"
                fontStyle={"italic"}
                sx={{
                  position: "absolute",
                  bottom: "10px", // Adjust the distance from the bottom
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  color: "#93C6DB",
                }}
              >
                {selectedRegion}
              </Typography>
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl1}
              open={open1}
              onClose={handleClose1}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                style: {
                  borderRadius: "0px",
                  boxShadow: "none",
                },
              }}
              MenuListProps={{
                disablePadding: true,
              }}
            >
              <MenuItem
                onClick={() => {
                  handleRegionItemClick("Saudi Arabia");
                  handleClose1(); // Close the menu after handling the click
                }}
                sx={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#2E8EB4",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  "&.MuiMenuItem-root": {
                    backgroundColor: "#2E8EB4",
                    paddingLeft: "10px",
                  },
                }}
              >
                Saudi Arabia
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleRegionItemClick("UK");
                  handleClose1(); // Close the menu after handling the click
                }}
                sx={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#489CC0",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#489CC0", // Keep the same color on hover
                  },
                  "&.MuiMenuItem-root": {
                    backgroundColor: "#489CC0",
                    paddingLeft: "10px",
                  },
                }}
              >
                UK
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleRegionItemClick("France");
                  handleClose1(); // Close the menu after handling the click
                }}
                sx={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#61ABC8",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#61ABC8", // Keep the same color on hover
                  },
                  "&.MuiMenuItem-root": {
                    paddingLeft: "10px",
                  },
                }}
              >
                France
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleRegionItemClick("Spain");
                  handleClose1(); // Close the menu after handling the click
                }}
                sx={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#7BB9D2", // Keep the same color on hover
                  },
                  "&.MuiMenuItem-root": {
                    paddingLeft: "10px",
                  },
                }}
              >
                Spain
              </MenuItem>
            </Menu>
          </Box>

          <Box>
            <Box
              sx={{
                cursor: "pointer",
                backgroundColor: isLanguageBoxClicked ? "#1580AA" : "#BFDDE8",
                padding: "10px",
                position: "relative",
                width: "100px", // Adjust the width as needed for a square
                height: "90px", // Adjust the height as needed for a square
              }}
              onClick={handleClick}
            >
              <Typography
                variant="body1"
                fontStyle={"italic"}
                sx={{
                  position: "absolute",
                  bottom: "10px", // Adjust the distance from the bottom
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                }}
              >
                {selectedLanguage}
              </Typography>
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                style: {
                  borderRadius: "0px",
                  boxShadow: "none",
                },
              }}
              MenuListProps={{
                disablePadding: true,
              }}
            >
              <MenuItem
                onClick={() => {
                  handleLanguageItemClick("Arabic");
                  handleClose();
                }}
                sx={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#2E8EB4",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#2E8EB4", // Keep the same color on hover
                  },
                  "&.MuiMenuItem-root": {
                    backgroundColor: "#2E8EB4",
                    paddingLeft: "10px",
                  },
                }}
              >
                Arabic
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLanguageItemClick("English");
                  handleClose();
                }}
                sx={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#489CC0",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#489CC0", // Keep the same color on hover
                  },
                  "&.MuiMenuItem-root": {
                    paddingLeft: "10px",
                  },
                }}
              >
                English
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLanguageItemClick("French");
                  handleClose();
                }}
                sx={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#61ABC8",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#61ABC8", // Keep the same color on hover
                  },
                  "&.MuiMenuItem-root": {
                    paddingLeft: "10px",
                  },
                }}
              >
                French
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLanguageItemClick("Spanish");
                  handleClose();
                }}
                sx={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#7BB9D2",
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "white",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#7BB9D2", // Keep the same color on hover
                  },
                  "&.MuiMenuItem-root": {
                    paddingLeft: "10px",
                  },
                }}
              >
                Spanish
              </MenuItem>
            </Menu>
          </Box>
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
        </div>
      </Box>
      <Link
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
      </Link>
    </Box>
  );
};

export default landingPage;



// import { Box, Grid, Typography, IconButton } from "@mui/material";
// import { PRIMARY_COLORS } from "../../utils/colors";
// import { useState } from "react";
// import {
//   PRIMARY_TEXT_STYLES,
//   SECONDARY_TEXT_STYLES,
// } from "../../utils/textStyles";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.svg";
// import map from "../../assets/worldMapl.svg";

// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import * as React from "react";
// import "./Map.css";


// const landingPage = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [isLanguageBoxClicked, setLanguageBoxClicked] = useState(false);
//   const [selectedRegion, setSelectedRegion] = useState("Region");
//   const [selectedLanguage, setSelectedLanguage] = useState("Language");
//   const handleLanguageItemClick = (language) => {
//     setSelectedLanguage(language);
//     handleClose();
//   };
//   const handleRegionItemClick = (region) => {
//     setSelectedRegion(region);
//     handleClose();
//   };

//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     setLanguageBoxClicked(true);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//     setLanguageBoxClicked(false);
//   };

//   const [isLanguageBoxClicked1, setLanguageBoxClicked1] = useState(false);
//   const [anchorEl1, setAnchorEl1] = useState(null);
//   const open1 = Boolean(anchorEl1);

//   const handleClick1 = (event) => {
//     setAnchorEl1(event.currentTarget);
//     setLanguageBoxClicked1(true);
//   };
//   const handleClose1 = () => {
//     setAnchorEl1(null);
//     setLanguageBoxClicked1(false);
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
//     >
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
//           <Box>
//             <Box
//               sx={{
//                 cursor: "pointer",
//                 backgroundColor: isLanguageBoxClicked1 ? "#1580AA" : "#FFFFFF",
//                 padding: "10px",
//                 position: "relative",
//                 width: "100px", // Adjust the width as needed for a square
//                 height: "90px", // Adjust the height as needed for a square
//               }}
//               onClick={handleClick1}
//             >
//               <Typography
//                 variant="body1"
//                 fontStyle={"italic"}
//                 sx={{
//                   position: "absolute",
//                   bottom: "10px", // Adjust the distance from the bottom
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   color: "#93C6DB",
//                 }}
//               >
//                 {selectedRegion}
//               </Typography>
//             </Box>
//             <Menu
//               id="basic-menu"
//               anchorEl={anchorEl1}
//               open={open1}
//               onClose={handleClose1}
//               MenuListProps={{
//                 "aria-labelledby": "basic-button",
//               }}
//               PaperProps={{
//                 style: {
//                   borderRadius: "0px",
//                   boxShadow: "none",
//                 },
//               }}
//               MenuListProps={{
//                 disablePadding: true,
//               }}
//             >
//               <MenuItem
//                 onClick={() => {
//                   handleRegionItemClick("Saudi Arabia");
//                   handleClose1(); // Close the menu after handling the click
//                 }}
//                 sx={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#2E8EB4",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   "&:hover": {
//                     backgroundColor: "#2E8EB4", // Keep the same color on hover
//                   },
//                   "&.MuiMenuItem-root": {
//                     backgroundColor: "#2E8EB4",
//                     paddingLeft: "10px",
//                   },
//                 }}
//               >
//                 Saudi Arabia
//               </MenuItem>
//               <MenuItem
//                 onClick={() => {
//                   handleRegionItemClick("UK");
//                   handleClose1(); // Close the menu after handling the click
//                 }}
//                 sx={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#489CC0",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   "&:hover": {
//                     backgroundColor: "#489CC0", // Keep the same color on hover
//                   },
//                   "&.MuiMenuItem-root": {
//                     backgroundColor: "#489CC0",
//                     paddingLeft: "10px",
//                   },
//                 }}
//               >
//                 UK
//               </MenuItem>
//               <MenuItem
//                 onClick={() => {
//                   handleRegionItemClick("France");
//                   handleClose1(); // Close the menu after handling the click
//                 }}
//                 sx={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#61ABC8",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   "&:hover": {
//                     backgroundColor: "#61ABC8", // Keep the same color on hover
//                   },
//                   "&.MuiMenuItem-root": {
//                     paddingLeft: "10px",
//                   },
//                 }}
//               >
//                 France
//               </MenuItem>
//               <MenuItem
//                 onClick={() => {
//                   handleRegionItemClick("Spain");
//                   handleClose1(); // Close the menu after handling the click
//                 }}
//                 sx={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#7BB9D2",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   "&:hover": {
//                     backgroundColor: "#7BB9D2", // Keep the same color on hover
//                   },
//                   "&.MuiMenuItem-root": {
//                     paddingLeft: "10px",
//                   },
//                 }}
//               >
//                 Spain
//               </MenuItem>
//             </Menu>
//           </Box>

//           <Box>
//             <Box
//               sx={{
//                 cursor: "pointer",
//                 backgroundColor: isLanguageBoxClicked ? "#1580AA" : "#BFDDE8",
//                 padding: "10px",
//                 position: "relative",
//                 width: "100px", // Adjust the width as needed for a square
//                 height: "90px", // Adjust the height as needed for a square
//               }}
//               onClick={handleClick}
//             >
//               <Typography
//                 variant="body1"
//                 fontStyle={"italic"}
//                 sx={{
//                   position: "absolute",
//                   bottom: "10px", // Adjust the distance from the bottom
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                 }}
//               >
//                 {selectedLanguage}
//               </Typography>
//             </Box>
//             <Menu
//               id="basic-menu"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//               MenuListProps={{
//                 "aria-labelledby": "basic-button",
//               }}
//               PaperProps={{
//                 style: {
//                   borderRadius: "0px",
//                   boxShadow: "none",
//                 },
//               }}
//               MenuListProps={{
//                 disablePadding: true,
//               }}
//             >
//               <MenuItem
//                 onClick={() => {
//                   handleLanguageItemClick("Arabic");
//                   handleClose();
//                 }}
//                 sx={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#2E8EB4",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   "&:hover": {
//                     backgroundColor: "#2E8EB4", // Keep the same color on hover
//                   },
//                   "&.MuiMenuItem-root": {
//                     backgroundColor: "#2E8EB4",
//                     paddingLeft: "10px",
//                   },
//                 }}
//               >
//                 Arabic
//               </MenuItem>
//               <MenuItem
//                 onClick={() => {
//                   handleLanguageItemClick("English");
//                   handleClose();
//                 }}
//                 sx={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#489CC0",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   "&:hover": {
//                     backgroundColor: "#489CC0", // Keep the same color on hover
//                   },
//                   "&.MuiMenuItem-root": {
//                     paddingLeft: "10px",
//                   },
//                 }}
//               >
//                 English
//               </MenuItem>
//               <MenuItem
//                 onClick={() => {
//                   handleLanguageItemClick("French");
//                   handleClose();
//                 }}
//                 sx={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#61ABC8",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   "&:hover": {
//                     backgroundColor: "#61ABC8", // Keep the same color on hover
//                   },
//                   "&.MuiMenuItem-root": {
//                     paddingLeft: "10px",
//                   },
//                 }}
//               >
//                 French
//               </MenuItem>
//               <MenuItem
//                 onClick={() => {
//                   handleLanguageItemClick("Spanish");
//                   handleClose();
//                 }}
//                 sx={{
//                   width: "100px",
//                   height: "30px",
//                   backgroundColor: "#7BB9D2",
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontWeight: "400",
//                   fontStyle: "italic",
//                   color: "white",
//                   fontSize: "13px",
//                   "&:hover": {
//                     backgroundColor: "#7BB9D2", // Keep the same color on hover
//                   },
//                   "&.MuiMenuItem-root": {
//                     paddingLeft: "10px",
//                   },
//                 }}
//               >
//                 Spanish
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Box>
//       </Box>


//         {/* ################# MAP ################## */}

//       <Box
      
//         className="container"
//       >
//         <div
//           className="earth"
          
//         >
//           <div className="mapDiv"></div>
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
//         </div>
//       </Box>
//       <Link
//         to="./home"
//         style={{ position: "absolute", bottom: 16, right: 16, zIndex: 3 }}
//       >
//         <IconButton
//           aria-label="delete"
//           size="large"
//           sx={{ backgroundColor: "white" }}
//         >
//           <ArrowForwardIcon fontSize="inherit" />
//         </IconButton>
//       </Link>
//     </Box>
//   );
// };

// export default landingPage;
