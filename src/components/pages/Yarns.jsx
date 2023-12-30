import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar'
import { PRIMARY_COLORS } from "../../utils/colors";
import { PRIMARY_TEXT_STYLES, SECONDARY_TEXT_STYLES } from "../../utils/textStyles";
import imageUrl2 from "../../assets/yarnHeaderImage.jpg"
import GridPattern from '../GridPattern';
import Footer from '../Footer';

const Yarns = () => {
  return (
    <Container maxWidth="false" style={{padding:"0"}}>
    <Box  style={{backgroundColor:PRIMARY_COLORS.turquoise, height:'100vh', width:'100vw'} }>
      <Navbar/>
      <Box>
        <GridPattern src={imageUrl2} rows={3} cols={8} text1="YARNS"/>
      </Box>
    </Box>
    <Footer/>
    </Container>

  )
}

export default Yarns