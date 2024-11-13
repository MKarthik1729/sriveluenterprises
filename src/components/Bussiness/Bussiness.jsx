import React, { useRef } from 'react'
import styles from './bussiness.module.scss'
import { motion, useInView } from 'framer-motion'
function Bussiness() {
  const machining = useRef(null)
  const isMachView = useInView(machining)
  const container = {
    hidden: { opacity: 0,x:200 },
    visible: {
      x:0,
      y:0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  const imag = {
    hidden: { opacity: 0,x:-200 },
    visible: {
      x:0,
      y:0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div>
      <section className={styles.machine} ref={machining}>
        <motion.div
        variants={imag}
        initial={isMachView?"hidden":"hidden"}
        animate = {isMachView?"visible":"hidden"}
        >
        <h1>Machining</h1>
        <p>Team provides delightful buying experience by meeting and exceeding customer ‘s expectations. The company’s state-of-the-art facilities equipped with latest CNC manufacturing technologies to produce complex and intricate components machined out of castings, forgings, bar stock. We stay focused on adopting new technologies facilitating to expand horizon of machining competencies. Having been strategized to be one stop solution provider; positioned for High mix – low volume, low to critical tolerances, partnering in spike and dip, leveraging our supply chain partners to deliver best value to customers. Our key to success has been the collaboration at working level empowering functional alignment in creating the value throughout the process.</p>
        </motion.div>
        
        <motion.img
          variants={container}
          initial={isMachView?"hidden":"hidden"}
          animate = {isMachView?"visible":"hidden"}
        src='https://www.sriveluenterprises.com/machines/hwacheon.jpeg'/>
      </section>
      <section className={styles.global}>
        <div>
        <h1>Global Supply Chain Management</h1>
        <p >Keeping up with a global market is increasingly challenging, various dimensions of business contributes at different intervals making the challenges furthermore complex. Speed to the market has been great differentiator while cost competitiveness and top-notch quality continues to be must have for customers. Innovative products to be made in a timely manner and sizeable enough to fulfil demands of population, at times; serving seasonal markets leads to extremely tough situations to sustain and grow business. Businesses often realise that the supply chain is the backbone of any business and considered as an enabler for business strategy. “Global Supply Chain Management is a solution that helps improve the ability to make products in a timely manner by feeding the operations and fulfilling manufacturing services involved in the process”.
</p><p >
Having been located miles away, Customers just “Don’t need parts but a partner” to create value in establishing successful business relationship. Succinnova Global Supply Chain Management (GSCM) team is proudly known to customer’s choice of partner. In combination has 4 decades of experience in Global Sourcing, Procurement and Supplier Quality making it a seamless team to provide end to end solutions at global platform. This team is reputed to be extended team in India of global OEM’s; facilitating trade between the Western OEM’s and Eastern supply base leveraging best practices in enhancing operational excellence. Based in India, team has not just developed great business relationship with Indian supply base but also experienced in working with Eastern Europe, South East Asia and South American suppliers.
</p><p >
Every individual in the team is a techno-commercial professional resulting in great asset, are able to lead whole GSCM process and manage entire Operation’ s stakeholder relationship. Well versed with tools to execute and experienced with different cultures across globe. Having been worked in the markets like Energy, Food Equipment, Printing, Airport transportation, Defence, Medical, Machine Building, Connectors, Aerospace, Agricultural Equipment etc. we are well equipped with the knowledge on diversity each market comes with and we customize our approach to meet and exceed customer requirements.</p>
   
        </div>
      </section>
    </div>
  )
}

export default Bussiness