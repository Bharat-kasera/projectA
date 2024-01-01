import { Box, Grid, Typography } from "@mui/material";
import { PRIMARY_COLORS } from "../utils/colors";
import logo from "../assets/logo.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  PRIMARY_TEXT_STYLES,
  SECONDARY_TEXT_STYLES,
} from "../utils/textStyles";

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Grid
      ref={ref}
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
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
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
      </motion.div>

      <Box sx={{ display: "flex", gap: "2px" ,paddingBottom:"47px"}}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
          sx={{
            cursor: "pointer",
            backgroundColor: "#4785AC",
            padding: "10px",
            position: "relative",
            width: "120px", 
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s, box-shadow 0.3s",

            ":hover": {
              transform: "scale(1.1) !important",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
              backgroundColor: PRIMARY_COLORS.royalBlue,
            },
          }}
        >
          <Typography
            fontStyle={"italic"}
            sx={{
              position: "absolute",
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
          component={motion.div}
          initial={{ opacity: 0, y: -160 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.25, ease: "easeInOut" }}
          sx={{
            cursor: "pointer",
            backgroundColor: "#508CB0",
            padding: "10px",
            position: "relative",
            width: "120px", // Adjust the width as needed for a square
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
            ":hover": {
              transform: "scale(1.1) !important",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
              backgroundColor: PRIMARY_COLORS.royalBlue,
            },
          }}
        >
          <Typography
            fontStyle={"italic"}
            sx={{
              position: "absolute",
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              fontWeight: "400",
              color: "#FFFFFF",
              fontSize: "15px",
            }}
          >
            Products
          </Typography>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -140 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
          sx={{
            cursor: "pointer",
            backgroundColor: "#5994B6",
            padding: "10px",
            position: "relative",
            width: "120px", // Adjust the width as needed for a square
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            transition: "transform 0.3s, box-shadow 0.3s",
            ":hover": {
              transform: "scale(1.1) !important",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
              backgroundColor: PRIMARY_COLORS.royalBlue,
            },
          }}
        >
          <Typography
            fontStyle={"italic"}
            sx={{
              position: "absolute",
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              fontWeight: "400",
              color: "#ffffff",
              fontSize: "15px",
            }}
          >
            Sustainability
          </Typography>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.75, ease: "easeInOut" }}
          sx={{
            cursor: "pointer",
            backgroundColor: "#6399BB",
            padding: "10px",
            position: "relative",
            width: "130px", // Adjust the width as needed for a square
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
            ":hover": {
              transform: "scale(1.1) !important",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
              backgroundColor: PRIMARY_COLORS.royalBlue,
            },
          }}
        >
          <Typography
            fontStyle={"italic"}
            sx={{
              position: "absolute",
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              fontWeight: "400",
              color: "#ffffff",
              fontSize: "15px",
            }}
          >
            Join the team
          </Typography>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
          sx={{
            cursor: "pointer",
            backgroundColor: "#6EA1C0",
            padding: "10px",
            position: "relative",
            width: "120px", // Adjust the width as needed for a square
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
            ":hover": {
              transform: "scale(1.1) !important",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
              backgroundColor: PRIMARY_COLORS.royalBlue,
              
            },
          }}
        >
          <Typography
            fontStyle={"italic"}
            sx={{
              position: "absolute",
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              fontWeight: "400",
              color: "#ffffff",
              fontSize: "15px",
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Navbar;
