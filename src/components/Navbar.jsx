import { Box, Grid, Typography } from "@mui/material";
import { PRIMARY_COLORS } from "../utils/colors";
import logo from "../assets/logo.svg";

import {
  PRIMARY_TEXT_STYLES,
  SECONDARY_TEXT_STYLES,
} from "../utils/textStyles";

const Navbar = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        color: PRIMARY_COLORS.white,
        fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      padding={8}
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

      <Box sx={{ display: "flex", gap: "2px" }}>
        <Box
          sx={{
            cursor: "pointer",
            backgroundColor: "#AAD0E3",
            padding: "10px",
            position: "relative",
            width: "120px", // Adjust the width as needed for a square
            height: "110px",
            cursor: "pointer",
            transition: "transform 0.3s, box-shadow 0.3s",
            ":hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
            zIndex: 1,

            },
          }}
        >
          <Typography
            fontStyle={"italic"}
            sx={{
              position: "absolute",
              bottom: "10px", // Adjust the distance from the bottom
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              fontWeight: "400",
              color: "#FFFFFF",
              width: "90px",
              fontSize: "15px",
            }}
          >
            Who we are
          </Typography>
        </Box>

        <Box
          sx={{
            cursor: "pointer",
            backgroundColor: "#BFDDE8",
            padding: "10px",
            position: "relative",
            width: "120px", // Adjust the width as needed for a square
            height: "110px",
            cursor: "pointer",
            transition: "transform 0.3s, box-shadow 0.3s",
            ":hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
            zIndex: 1,

            },
          }}
        >
          <Typography
            fontStyle={"italic"}
            sx={{
              position: "absolute",
              bottom: "10px", // Adjust the distance from the bottom
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              fontWeight: "400",
              color: "#FFFFFF",
              width: "90px",
              fontSize: "15px",
            }}
          >
            Products
          </Typography>
        </Box>

        <Box
          sx={{
            cursor: "pointer",
            backgroundColor: "#D5E7F1",
            padding: "10px",
            position: "relative",
            width: "120px", // Adjust the width as needed for a square
            height: "110px",
            cursor: "pointer",
            transition: "transform 0.3s, box-shadow 0.3s",
            ":hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
            zIndex: 1,

            },
          }}
        >
          <Typography
            fontStyle={"italic"}
            sx={{
              position: "absolute",
              bottom: "10px", // Adjust the distance from the bottom
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              fontWeight: "400",
              color: "#93C6DB",
              width: "100px",
              fontSize: "15px",
            }}
          >
            Join the team
          </Typography>
        </Box>

        <Box
          sx={{
            cursor: "pointer",
            backgroundColor: "#E9F4F8",
            padding: "10px",
            position: "relative",
            width: "120px", // Adjust the width as needed for a square
            height: "110px",
            cursor: "pointer",
            transition: "transform 0.3s, box-shadow 0.3s",
            ":hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
            zIndex: 1,

            },
          }}
        >
          <Typography
            fontStyle={"italic"}
            sx={{
              position: "absolute",
              bottom: "10px", // Adjust the distance from the bottom
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              fontWeight: "400",
              color: "#93C6DB",
              width: "90px",
              fontSize: "15px",
            }}
          >
            Contact Us
          </Typography>
        </Box>

        <Box
          sx={{
            cursor: "pointer",
            backgroundColor: "#FFFFFF",
            padding: "10px",
            position: "relative",
            width: "120px", // Adjust the width as needed for a square
            height: "110px",
            cursor: "pointer",
            transition: "transform 0.3s, box-shadow 0.3s",
            
            ":hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
            },
          }}
        >
          <Typography
            fontStyle={"italic"}
            sx={{
              position: "absolute",
              bottom: "10px", // Adjust the distance from the bottom
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              fontWeight: "400",
              color: "#93C6DB",
              width: "100px",
              fontSize: "15px",
            }}
          >
            Sustainability
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Navbar;
