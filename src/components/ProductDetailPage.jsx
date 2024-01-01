import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import GridPattern from "./GridPattern";
import Footer from "./Footer";
import { PRIMARY_COLORS } from "../utils/colors";
import { PRIMARY_TEXT_STYLES } from "../utils/textStyles";
import imageUrl2 from "../assets/yarnHeaderImage.jpg";
import yarnimg2 from "../assets/yarnimg2.jpg";
import yarnimg3 from "../assets/yarnimg3.jpg";
import fabImg1 from "../assets/yarnimg3.jpg";
import fabImg2 from "../assets/business-meeting-working-room-executive-office.jpg";
import fabImg3 from "../assets/yarnimg2.jpg";
import vid from "../assets/MattexVideo.mp4";

import { Data } from "../data";
import { useState, useRef, useEffect } from "react";
import { useTransform, useScroll, motion, useInView,useAnimation } from "framer-motion";

const ProductDetailPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgIY = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  

  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["40%", "-110%"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const backgroundY4 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "260%"]);
  const [data, setData] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);
  const handleVideoClick = () => {
    const video = videoRef.current;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  const { type } = useParams();
  const finalType = type.toUpperCase();

  useEffect(() => {
    const productData = Data.find(
      (product) => product.productType === finalType
    );
    setData(productData);
  }, []);



  const mainControls = useAnimation();
  const slideControls = useAnimation();
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

  return (
    <Container
    component={motion.div}
      ref={ref}
      maxWidth="false"
      style={{ padding: "0", width: "100vw", overflow:"hidden" }}
    >
      <Box
        style={{
          backgroundColor: "#93C6DB",
          width: "100vw",
        }}
      >
        <motion.div >
          <Navbar />
        </motion.div>
        <Box component={motion.div} style={{ y: backgroundY }}>
          <GridPattern src={imageUrl2} rows={3} cols={8} productType={type} />
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 4,
          alignItems: "center",
          backgroundColor: "#93C6DB",
          height: "20rem",
          overflowY: "hidden",
        }}
         
      >
              
        <Box padding={8} style={{}}>
          <Typography
            sx={{
              color: PRIMARY_COLORS.royalBlue,
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "400",
            }}
          >
            {data.description}
          </Typography>
        </Box>
      </Box>

      
          
      <Box component={motion.div}  style={{ width: "100vw", position: "relative",y: backgroundY2 }}>
        <Typography
          variant="h1"
          fontWeight="500"
          style={{
            fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
            fontStyle: "italic",
            color: "white",
            backgroundColor: PRIMARY_COLORS.royalBlue,
            paddingLeft: "20px",
            paddingRight: "32vw",
            position: "absolute",
            top: "30%",
            right: 0,
            overflow:"hidden",
          }}
        >
          Process
        </Typography>
        <video
          style={{
            width: "100%",
            height: "80%",
            marginBottom: "-3px",
          }}
          src={vid}
          muted
          autoPlay
          loop
          height="400"
          ref={videoRef}
          onClick={handleVideoClick}
        />
      </Box>

      <Box 
        style={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 4,
          alignItems: "center",
          backgroundColor: "#93C6DB",
          height: "20rem",
          overflowY: "hidden",
          marginTop:"-420px"
        }}
      >
        <Box padding={8} component={motion.div}>
          <Typography
            style={{
              color: PRIMARY_COLORS.royalBlue,
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "400",
            }}
          >
            <span style={{ fontWeight: "600" }}>PROCESS: </span> {data.process}
          </Typography>
        </Box>
      </Box>

      <Box componet={motion.div} style={{ display: "flex", overflow:"hidden" }}
      
      
      >
        <Box
          componet={motion.div}
        
         style={{ flex: 1,  height: "60vh", }}>
          <motion.img
            src={fabImg1}
            style={{
              objectFit: "cover",
              objectPosition:"center",
              width: "100%",
              height: "200%",
              y:bgIY
            }}
          />
        </Box>
        <Box sx={{ flex: 1, position: "relative", height: "60vh" }}>
          <motion.img
            src={fabImg2}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "200%",
              y:bgIY

            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundColor: PRIMARY_COLORS.royalBlue,
            height: "60vh",
          }}
        >
          <Typography
            sx={{
              color: PRIMARY_COLORS.white,
              fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
              fontStyle: "italic",
              fontWeight: "400",
              width: "100%",
              height: "100%",
              padding: "40px",
              lineHeight: "34px",
            }}
          >
            <span style={{ fontWeight: "600" }}>End usage: </span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation u/lamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </Typography>
        </Box>
        <Box sx={{ flex: 1, position: "relative", height: "60vh" }}>
          <motion.img
            src={fabImg3}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "200%",
              y:bgIY
            }}
          />
        </Box>
      </Box>

      <motion.div style={{ overflow: "hidden" }}>
        <Footer />
      </motion.div>
    </Container>
  );
};

export default ProductDetailPage;
