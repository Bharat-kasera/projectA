// import { useEffect, useRef, useState } from 'react';
// import { Box, Typography, IconButton, Hidden } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar";
// import Footer from "../Footer";
// import { PRIMARY_COLORS } from "../../utils/colors";
// import { PRIMARY_TEXT_STYLES } from "../../utils/textStyles";
// import { useParallax } from "react-scroll-parallax";
// // Traditional imports for card data
// import imageUrl1 from "../../assets/fabrics.jpg";
// import imageUrl2 from "../../assets/yarn.jpg";
// import imageUrl3 from "../../assets/fibers.jpg";
// import imageUrl4 from "../../assets/geotextile.jpg";
// import Lenis from '@studio-freight/lenis'
// import { useTransform, useScroll, motion,useInView } from 'framer-motion';

// const Home = () => {
//   // const ref = useRef(null);
//   // const isInView = useInView(ref, { once: true });
//   // useEffect(()=>{
//   //   console.log(isInView);
//   // },[isInView])
//   const gallery = useRef(null);
//   const [dimension, setDimension] = useState({width:0, height:0});

//   const { scrollYProgress } = useScroll({
//     target: gallery,
//     offset: ['start end', 'end start']
//   })

//   useEffect( () => {
//     const resize = () => {
//       setDimension({width: window.innerWidth, height: window.innerHeight})
//     }

//     window.addEventListener("resize", resize)
//     resize();

//     return () => {
//       window.removeEventListener("resize", resize);
//     }
//   }, [])

//   // Card data with traditional imports
//   const cardsData = [
//     {
//       imageUrl: imageUrl1,
//       link: "/fabrics",
//       title: "Fabrics",
//     },
//     {
//       imageUrl: imageUrl2,
//       link: "/yarns",
//       title: "Yarns",
//     },
//     {
//       imageUrl: imageUrl3,
//       link: "/fibers",
//       title: "Fibers",
//     },
//     {
//       imageUrl: imageUrl4,
//       link: "/geotextile",
//       title: "Geotextile",
//     },
//   ];

//   return (
//     <Box
//       style={{
//         backgroundColor: "#93C6DB",
//         width: "100vw",
//         position: "relative",
//       }}
//     >
//       <Navbar />

//       {/* Images */}
//       <motion.div
//         style={{
//           display: "flex",
//           paddingBottom: "10px",
//           transition: "width 0.2s",
//           height: "59.5vh",
//           width: "100vw",
//         }}
//         className="card-grid"
//         ref={gallery}

//       >
//         {cardsData.map((card, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: "relative",
//               height: "60vh",
//               transition: "width 0.3s ease",
//             }}
//             className="card"

//           >
//             <motion.div className="hoverWrapper "
//                         initial={{ opacity: 0, x:-100-(index*10)}}
//           animate={{ opacity: 1, x:0}}
//           transition={{ duration: 0.75,delay:2+(index/10),ease: "easeInOut" }}
//             >
//               {/* Your image and existing code */}
//               <img
//                 src={card.imageUrl}
//                 alt={`Grid Image ${index + 1}`}
//                 style={{
//                   objectFit: "cover",
//                   width: "100%",
//                   height: "100%",
//                   transition: "width 0.4s ease",
//                 }}
//                 className="imgHover"
//               />
//               {/* Square Box with Text */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: "50%",
//                   right: 0,
//                   transform: "translateY(-50%)",
//                   backgroundColor: "rgba(0, 0, 0, 0.4)",
//                   padding: "10px",
//                   textAlign: "left",
//                   width: "200px",
//                   height: "100px",
//                   display: "flex",
//                   alignItems: "center",
//                   lineHeight: 1.5,
//                   cursor: "pointer",
//                   transition: "width 0.4s ease, background-color 0.2s",
//                   ":hover": {
//                     backgroundColor: PRIMARY_COLORS.royalBlue,
//                   },
//                 }}
//                 className="textBox"
//               >
//                 {card.link && (
//                   <Link
//                     to={card.link}
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     <Typography
//                       fontSize={30}
//                       fontWeight="500"
//                       style={{
//                         fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                         fontStyle: "italic",
//                       }}
//                     >
//                       {card.title}
//                     </Typography>
//                   </Link>
//                 )}
//               </Box>
//             </motion.div>
//           </Box>
//         ))}
//       </motion.div>

//       <Box padding={8}>
//         <Typography
//           sx={{
//             color: PRIMARY_COLORS.royalBlue,
//             fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//             textAlign: "center",
//             fontStyle: "italic",
//             fontWeight: "400",
//           }}
//         >
//           As a prominent global frontrunner in the high-tenacity fibre sector
//           for geotextiles and technical non-woven, Mattex strategically
//           leverages its prime location at the epicentre of the world's largest
//           polymer industry. By capitalising on our strategic positioning, we
//           efficiently distribute these premium fibres to esteemed customers
//           worldwide, solidifying our position as an industry leader in
//           innovation and global market reach.
//         </Typography>
//       </Box>

//       <Link to="/" style={{ position: "absolute", bottom: 16, left: 16 }}>
//         <IconButton
//           aria-label="delete"
//           size="large"
//           sx={{ backgroundColor: "white" }}
//         >
//           <ArrowBackIcon fontSize="inherit" />
//         </IconButton>
//       </Link>
//       <Footer />
//     </Box>
//   );
// };

// export default Home;

import { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, Hidden } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { PRIMARY_COLORS } from "../../utils/colors";
import { PRIMARY_TEXT_STYLES } from "../../utils/textStyles";
import { useParallax } from "react-scroll-parallax";
// Traditional imports for card data
import imageUrl1 from "../../assets/fabrics.jpg";
import imageUrl2 from "../../assets/yarn.jpg";
import imageUrl3 from "../../assets/fibers.jpg";
import imageUrl4 from "../../assets/geotextile.jpg";
import Lenis from "@studio-freight/lenis";
import {
  useTransform,
  useScroll,
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import { Opacity } from "@mui/icons-material";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);
  const bgIY = useTransform(scrollYProgress, [0, 1], ["-20%", "-110%"]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["60%", "-70%"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const backgroundY4 = useTransform(scrollYProgress, [0, 1], ["0%", "220%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const opacitytransition = useTransform(
    scrollYProgress,
    [1, 0],
    ["500%", "-100%"]
  );

  const cardsData = [
    {
      imageUrl: imageUrl1,
      link: "/fabrics",
      title: "FABRICS",
    },
    {
      imageUrl: imageUrl2,
      link: "/yarns",
      title: "YARNS",
    },
    {
      imageUrl: imageUrl3,
      link: "/fibers",
      title: "FIBERS",
    },
    {
      imageUrl: imageUrl4,
      link: "/geotextile",
      title: "GEOTEXTILE",
    },
  ];

  return (
    <Box
      style={{
        backgroundColor: "#93C6DB",
        width: "100vw",
        position: "relative",
      }}
      ref={ref}
      component={motion.div}
    >
      <motion.div style={{ y: textY }}>
        <Navbar />
      </motion.div>

      {/* Images */}
      <motion.div
        style={{
          display: "flex",
          paddingBottom: "10px",
          transition: "width 0.2s",
          height: "59.5vh",
          width: "100vw",
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
            component={motion.div}
          >
            <motion.div className="hoverWrapper ">
              {/* Your image and existing code */}
              <motion.img
                src={card.imageUrl}
                alt={`Grid Image ${index + 1}`}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "180%",
                  transition: "width 0.4s ease",
                  y: bgIY,
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
                  borderRadius: "10px 0 0 10px",
                  cursor: "pointer",
                  transition: "width 0.4s ease, background-color 0.2s",
                  "&:hover": {
                    backgroundColor: "white",
                    color: PRIMARY_COLORS.royalBlue, // Change font color on hover
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
                      className="title"
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
            </motion.div>
          </Box>
        ))}
      </motion.div>

      <Box padding={8} component={motion.div} style={{ overflow: "hidden" }}>
        <motion.div
          style={{
            color: PRIMARY_COLORS.royalBlue,
            fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "400",
            y: backgroundY2,
            opacity: opacitytransition,
          }}
        >
          As a prominent global frontrunner in the high-tenacity fibre sector
          for geotextiles and technical non-woven, Mattex strategically
          leverages its prime location at the epicentre of the world's largest
          polymer industry. By capitalising on our strategic positioning, we
          efficiently distribute these premium fibres to esteemed customers
          worldwide, solidifying our position as an industry leader in
          innovation and global market reach.
        </motion.div>
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
      <motion.div style={{ y: backgroundY, overflow: "hidden" }}>
        <Footer />
      </motion.div>
    </Box>
  );
};

export default Home;
