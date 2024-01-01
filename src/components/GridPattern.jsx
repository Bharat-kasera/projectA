// import { SECONDARY_TEXT_STYLES } from "../utils/textStyles";
// import { Box, Typography } from '@mui/material';

// const GridPattern = ({ src, rows, cols, productType }) => {
//     const title = productType.toUpperCase();
//   return (
//     <Box sx={{ position: 'relative', height: '600px', width: '100%' }}>
//       <img src={src} alt="Grid Image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           display: 'grid',
//           gridTemplateColumns: `repeat(${cols}, 1fr)`,
//           gridTemplateRows: `repeat(${rows}, 1fr)`,
//           gap: '2px',
//           background: `
//             linear-gradient(to right, white 1px, transparent 1px),
//             linear-gradient(to bottom, white 1px, transparent 1px)
//           `,
//           backgroundSize: `${100 / cols}% ${100 / rows}%`,
//           overflowY:"scroll",
//         }}
//       />
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="h1" fontWeight="500" style={{ fontFamily: SECONDARY_TEXT_STYLES.Roboto, color: 'white' }}>
//           {title}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default GridPattern;
import { PRIMARY_COLORS } from "../utils/colors";
import { PRIMARY_TEXT_STYLES } from "../utils/textStyles";
import { Box, Typography } from '@mui/material';
import { useState, useRef, useEffect } from "react";

import { useTransform, useScroll, motion, useInView,useAnimation } from "framer-motion";


const GridPattern = ({ src, rows, cols, productType }) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgIY = useTransform(scrollYProgress, [0, 1], ["-20%", "-80%"]);

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
    const title = productType.charAt(0).toUpperCase() + productType.slice(1);
  return (
    <Box component={motion.div} ref={ref} sx={{ position: 'relative', height: '600px', width: '100%' ,overflow:"hidden",objectFit:"cover" }}>
      <motion.img src={src} alt="Grid Image" style={{ objectFit: "cover",objectPosition:"center", width: '120%', height: '200%',y:bgIY }} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: '2px',
          background: `
            linear-gradient(to right, transparent 1px, transparent 1px),
            linear-gradient(to bottom, transparent 1px, transparent 1px)
          `,
          backgroundSize: `${100 / cols}% ${100 / rows}%`,
          overflowY:"scroll",
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: "50%",
          transform: 'translateX(50%)',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
          
        <Typography variant="h1" fontWeight="500" style={{ fontFamily: PRIMARY_TEXT_STYLES.lucidaSans, fontStyle:"italic",color: 'white',backgroundColor:PRIMARY_COLORS.royalBlue,paddingLeft:"20px",paddingRight:"32vw" }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default GridPattern;
