import { Box, Container, Link, Typography, Grid } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { PRIMARY_COLORS } from "../utils/colors";
import logo from "../assets/logo.png";
import {
  useTransform,
  useScroll,
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  PRIMARY_TEXT_STYLES,
  SECONDARY_TEXT_STYLES,
} from "../utils/textStyles";
import { SECONDARY_COLORS } from "../utils/colors";

const Footer = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["-100%", "120%"]);
  // const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["100%", "-120%"]);
  // const backgroundY4 = useTransform(scrollYProgress, [0, 1], ["100%", "-120%"]);

  return (
    <Container
      component={motion.div}
      ref={ref}
      maxWidth="false"
      style={{ backgroundColor: "#54A3C2", padding: "0" }}
    >
      <Box
        component={motion.div}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.2,ease:"easeInOut" }}
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
          gap: "15px",
        }}
        padding={8}
      >
        <Box
          component={motion.div}
          style={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "baseline",
            gap: "16px",
            // x:backgroundY2,
          }}
        >
          <img src={logo} style={{ width: "220px", height: "auto" }} />
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
          component={motion.div}
          item
          lg={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
            // x:backgroundY3
          }}
        >
          <Typography
            variant="h6"
            paddingBottom={1}
            fontWeight={400}
            fontStyle={"italic"}
            style={{ fontFamily: PRIMARY_TEXT_STYLES.Roboto }}
          >
            +966 12 6102500 / sales@mattex.com
          </Typography>
        </Box>
        <Box
          component={motion.div}
          style={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: "10px",
            alignItems: "baseline",
            // x:backgroundY4
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
