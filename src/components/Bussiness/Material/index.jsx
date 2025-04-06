import React from 'react'
// import UnderConstructionPage from '../UnderonstructionPage'
// import { Image } from "react-grid-gallery";
import { motion } from 'framer-motion'
import data from './data'
import styles from '../../Galler/Gallery.module.scss'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function Material() {
  return (
    <motion.div 
      className={styles.galleryContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.imageGrid}>
        {data.map((image, index) => (
          <motion.div
            key={index}
            className={styles.imageItem}
            variants={itemVariants}
          >
            <img
              src={image.src}
              alt={`Material item ${index + 1}`}
              className={styles.image}
              loading="lazy"
            />
            {image.caption && (
              <div className={styles.imageCaption}>
                {image.caption}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Material