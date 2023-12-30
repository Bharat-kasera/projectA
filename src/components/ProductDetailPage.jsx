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

const ProductDetailPage = () => {
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

  // useEffect(() => {
  //   const video = videoRef.current;
  //   video.play();
  //   setIsPlaying(true);

  //   return () => {
  //     video.pause();
  //     setIsPlaying(false);
  //   };
  // }, []);
  return (
    <Container maxWidth="false" style={{ padding: "0", width: "100vw" }}>
      <Box
        style={{
          backgroundColor: "#93C6DB",
          width: "100vw",
        }}
      >
        <Navbar />
        <Box sx={{}}>
          <GridPattern src={imageUrl2} rows={3} cols={8} productType={type} />
        </Box>
      </Box>
      <Box
        sx={{
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
        <Box padding={8} sx={{}}>
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



      <Box sx={{ width: "100vw", position: "relative" }}>
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
        sx={{
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
            <span style={{ fontWeight: "600" }}>PROCESS: </span> {data.process}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 1, position: "relative", height: "60vh" }}>
          <img
            src={fabImg1}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box sx={{ flex: 1, position: "relative", height: "60vh" }}>
          <img
            src={fabImg2}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
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
              lineHeight: "35px",
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
          <img
            src={fabImg3}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

export default ProductDetailPage;
