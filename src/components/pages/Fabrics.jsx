import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar'
import { PRIMARY_COLORS } from "../../utils/colors";
import { PRIMARY_TEXT_STYLES, SECONDARY_TEXT_STYLES } from "../../utils/textStyles";
import GridPatternedImage from '../GridPatternedImage';
import imageUrl1 from "../../assets/modern-dining-room-living-room-with-luxury-decor.jpg"
import GridPattern from '../GridPattern';


const Fabrics = () => {
  return (
    <Container maxWidth="false" style={{backgroundColor:PRIMARY_COLORS.turquoise, height:'100vh', width:'100vw',position: 'relative'} }>
      <Navbar/>
      <Box>
        {/* <GridPattern src={imageUrl1} rows={3} cols={3} text1="FABRICS"/> */}
      </Box>
    </Container>
  )
}

export default Fabrics