import React from 'react'
// import UnderConstructionPage from '../UnderonstructionPage'
// import { Image } from "react-grid-gallery";
import { Gallery } from 'react-grid-gallery'
import data from './data'
import { motion } from 'framer-motion'
// motion

function Material() {

  return (
    <motion.div style={{
      padding:" 20px 5%"
    }}> 
            <Gallery images={data}  rowHeight={400} margin={20}/>
    </motion.div>
  )
}

export default Material