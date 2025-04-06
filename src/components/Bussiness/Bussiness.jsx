import React, { useRef } from 'react'
import styles from './bussiness.module.scss'
import { motion, useInView } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import Subfooter from './index'

function Business() {
  const machiningRef = useRef(null)
  const globalRef = useRef(null)
  const isMachiningInView = useInView(machiningRef, { once: true, margin: "-100px" })
  const isGlobalInView = useInView(globalRef, { once: true, margin: "-100px" })

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div>
      <section className={styles.machine} ref={machiningRef}>
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate={isMachiningInView ? "visible" : "hidden"}
        >
          <h1>Machining</h1>
          <p>Team provides delightful buying experience by meeting and exceeding customer's expectations. The company's state-of-the-art facilities equipped with latest CNC manufacturing technologies to produce complex and intricate components machined out of castings, forgings, bar stock. We stay focused on adopting new technologies facilitating to expand horizon of machining competencies.</p>
          <p>Having been strategized to be one stop solution provider; positioned for High mix – low volume, low to critical tolerances, partnering in spike and dip, leveraging our supply chain partners to deliver best value to customers. Our key to success has been the collaboration at working level empowering functional alignment in creating the value throughout the process.</p>
        </motion.div>
        
        <motion.img
          variants={fadeInRight}
          initial="hidden"
          animate={isMachiningInView ? "visible" : "hidden"}
          src='https://www.sriveluenterprises.com/machines/hwacheon.jpeg'
          alt="Machining Equipment"
        />
      </section>
      <section className={styles.global} ref={globalRef}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isGlobalInView ? "visible" : "hidden"}
        >
          <h1>Global Supply Chain Management</h1>
          <p>Keeping up with a global market is increasingly challenging, various dimensions of business contributes at different intervals making the challenges furthermore complex. Speed to the market has been great differentiator while cost competitiveness and top-notch quality continues to be must have for customers.</p>
          <p>Having been located miles away, Customers just "Don't need parts but a partner" to create value in establishing successful business relationship. Succinnova Global Supply Chain Management (GSCM) team is proudly known to customer's choice of partner.</p>
          <p>Every individual in the team is a techno-commercial professional resulting in great asset, are able to lead whole GSCM process and manage entire Operation's stakeholder relationship. Well versed with tools to execute and experienced with different cultures across globe.</p>
        </motion.div>
      </section>

      <Subfooter />
      <Outlet />
    </div>
  )
}

export default Business