import { Box, Container, Link, Typography, Grid } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { PRIMARY_COLORS } from "../utils/colors";
import logo from "../assets/logo.svg";

import {
  PRIMARY_TEXT_STYLES,
  SECONDARY_TEXT_STYLES,
} from "../utils/textStyles";
import { SECONDARY_COLORS } from "../utils/colors";
const Footer = () => {
  return (
    <Container
      maxWidth="false"
      style={{ backgroundColor: "#54A3C2", overflowX: "hidden", padding: "0" }}
    >
      <Box
        style={{
          color: PRIMARY_COLORS.white,
          fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "baseline",
            justifyContent: "space-between",
            gap:"15px"
            
          }}
        padding={8}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "baseline",
            gap:"16px",
          }}
        >
          <img
            src={logo}
            style={{ width: "220px", height: "auto", }}
          />
          <Typography
            variant="h2"
            style={{ fontFamily: SECONDARY_TEXT_STYLES.Roboto }}
            fontWeight={100}
            fontStyle={"italic"}
            
          >
            /
          </Typography>
          <Typography
            variant="h5"
            style={{ fontFamily: SECONDARY_TEXT_STYLES.Roboto }}
            fontWeight={400}
            fontStyle={"italic"}
          >
            Perfected to{" "}
            <span style={{ fontWeight: 600 }}>global standards</span>
          </Typography>
        </Box>

        <Box
          item
          lg={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
          }}
        >
          <Typography
            variant="h6"
            paddingBottom={1}
            fontWeight={400}
            fontStyle={"italic"}
            style={{ fontFamily: PRIMARY_TEXT_STYLES.Roboto }}
          >
            +966 12 6102500  /  sales@mattex.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap:"10px",
            alignItems: "baseline",

          }}
        >  
          <FacebookRoundedIcon sx={{ fontSize: 40 }} />
          <WhatsAppIcon sx={{ fontSize: 40 }} />
          <LinkedInIcon sx={{ fontSize: 40 }} />
          <InstagramIcon sx={{ fontSize: 40 }} />
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
