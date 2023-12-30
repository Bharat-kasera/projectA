
import { PRIMARY_TEXT_STYLES } from "../utils/textStyles";
import { PRIMARY_COLORS } from "../utils/colors";

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const GridPatternedImage = ({ src, rows, cols, text1, link1 }) => {


  return (
  
    <Box sx={{ position: "relative", height: "60vh", transition: "width 0.3s ease", }}>
      <div className="hoverWrapper">
        {/* Your image and existing code */}
        <img
          src={src}
          alt="Grid Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            transition: "width 0.4s ease",
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
            cursor:"pointer",
            transition: "width 0.4s ease, background-color 0.2s",
            ":hover": {
              backgroundColor: PRIMARY_COLORS.royalBlue,
            },
          }}
          className="textBox"
        >
          {text1 && (
            <Link to={link1} style={{ textDecoration: "none", color: "white" }}>
              <Typography
                fontSize={30}
                fontWeight="500"
                style={{
                  fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
                  fontStyle: "italic",
                }}
              >
                {text1}
              </Typography>
            </Link>
          )}
        </Box>
      </div>
    </Box>
  );
};

export default GridPatternedImage;


// import { PRIMARY_TEXT_STYLES } from "../utils/textStyles";
// import { PRIMARY_COLORS } from "../utils/colors";



// import { Box, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

// const GridPatternedImage = ({
//   src,
//   rows,
//   cols,
//   text1,
//   link1,
//   index,
//   hoveredIndex,
//   handleHover,
//   handleBlur,
// }) => {
//   const isHovered = index === hoveredIndex;

//   return (
//     <Box sx={{ position: "relative", height: "60vh" }}>
//       <div
//         className={`hoverWrapper ${isHovered ? "" : "blur"}`}
//         onMouseEnter={() => handleHover(index)}
//         onMouseLeave={handleBlur}
//       >
//         {/* Your image and existing code */}
//         <img
//           src={src}
//           alt="Grid Image"
//           style={{
//             objectFit: "cover",
//             width: "100%",
//             height: "100%",
//           }}
//           className="imgHover"
//         />
//         {/* Square Box with Text */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             right: 0,
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(0, 0, 0, 0.4)",
//             padding: "10px",
//             textAlign: "left",
//             width: "200px",
//             height: "100px",
//             display: "flex",
//             alignItems: "center",
//             lineHeight: 1.5,
//             transition: "width 0.3s, background-color 0.3s",
//             ":hover": {
//               backgroundColor: PRIMARY_COLORS.royalBlue,
//             },
//             filter: isHovered ? "none" : "blur(5px)",  // Apply blur only when hovered
//           }}
//           className="textBox"
//         >
//           {text1 && (
//             <Link to={link1} style={{ textDecoration: "none", color: "white" }}>
//               <Typography
//                 fontSize={30}
//                 fontWeight="500"
//                 style={{
//                   fontFamily: PRIMARY_TEXT_STYLES.lucidaSans,
//                   fontStyle: "italic",
//                 }}
//               >
//                 {text1}
//               </Typography>
//             </Link>
//           )}
//         </Box>
//       </div>
//     </Box>
//   );
// };

// export default GridPatternedImage;
