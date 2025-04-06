import React, { useRef } from 'react'
import styles from './index.module.scss';
import { Button, Card } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion'
// import IconsPart from './IconsPart';
import { Link } from 'react-router-dom';
import { FaGlobeAsia } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import Advertise from './Advertise';
function Main() {
  const employees = useRef(null)
  const equip = useRef(null)
  const product = useRef(null)
  const isempView = useInView(employees)
  const isequipView = useInView(equip)
  const isproView = useInView(product)
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      // y:0,
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.4,
        duration: 1
      }
    }
  };
  const container1 = {
    hidden: { opacity: 1, y: -200 },
    visible: {
      y: 0,
      opacity: 1,
      // scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.4,
        duration: 2
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <div >

      <section className={styles.first} ref={employees}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.companyTitle}
            >
              <span className={styles.sri}>Sri</span>{" "}
              <span className={styles.velu}>Velu</span>{" "}
              <span className={styles.enterprises}>Enterprises</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A leading manufacturer of high-quality nuts, bolts, and fasteners, serving industries across construction, automotive, machinery, and more. With precision engineering and durable materials, we provide a wide range of standard and custom solutions designed to meet the toughest performance and safety standards. Our state-of-the-art manufacturing facility ensures reliable production, while our experienced team ensures timely delivery and customer satisfaction. Whether you need bulk orders or specialized designs, we are your trusted partner for fastening solutions that last.
            </motion.p>
          </div>
          
          <motion.div
            className={styles.imageholder}
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <img 
              src="/employees.jpeg" 
              alt="Sri Velu Enterprises Team" 
              className={styles.teamImage}
            />
          </motion.div>
        </div>
      </section>
      {/* <IconsPart styles={styles} /> */}

      <section ref={product} className={styles.productsection}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Products
        </motion.h2>
        <hr />
        <motion.div
          variants={container}
          initial={isproView ? "hidden" : ""}
          animate={isproView ? "visible" : "hidden"}
          className={styles.products}
        >
          <Card as={motion.div} variants={item} className={styles.productCard}>
            <img
              src="/products/material15.jpeg"
              alt="Precision Machined Components"
            />
            <Card.Body>
              <Card.Title>Precision Components</Card.Title>
              <Card.Text>High-quality machined parts with precise specifications</Card.Text>
              <Button as={Link} to="/bussiness" variant="primary">View Details</Button>
            </Card.Body>
          </Card>

          <Card as={motion.div} variants={item} className={styles.productCard}>
            <img
              src="/products/material27.jpeg"
              alt="Industrial Fasteners"
            />
            <Card.Body>
              <Card.Title>Industrial Fasteners</Card.Title>
              <Card.Text>Durable fastening solutions for various applications</Card.Text>
              <Button as={Link} to="/bussiness" variant="primary">View Details</Button>
            </Card.Body>
          </Card>

          <Card as={motion.div} variants={item} className={styles.productCard}>
            <img
              src="/products/material30.jpeg"
              alt="Custom Manufacturing"
            />
            <Card.Body>
              <Card.Title>Custom Manufacturing</Card.Title>
              <Card.Text>Tailored solutions for specific industry needs</Card.Text>
              <Button as={Link} to="/bussiness" variant="primary">View Details</Button>
            </Card.Body>
          </Card>

          <Card as={motion.div} variants={item} className={`${styles.productCard} ${styles.seeMoreCard}`}>
            <Link to="/bussiness" className={styles.seeMoreLink}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.seeMoreContent}
              >
                <GrNext size={30} />
                <p>Explore All Products</p>
              </motion.div>
            </Link>
          </Card>
        </motion.div>
      </section>

      <section ref={equip} className={styles.equipsection}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Equipment
        </motion.h2>
        <hr />
        <motion.div 
          className={styles.equipment}
          variants={container}
          initial={isequipView ? "hidden" : ""}
          animate={isequipView ? "visible" : "hidden"}
        >
          <Card as={motion.div} variants={item} className={styles.productCard}>
            <img
              src="https://www.sriveluenterprises.com/machines/Mi08j-11.jpeg"
              alt="Tsugami Mi08j-11"
            />
            <Card.Body>
              <Card.Title>Tsugami Mi08j-11</Card.Title>
              <Card.Text>High-precision CNC machine for complex parts manufacturing</Card.Text>
              <Button as={Link} to="/bussiness/equipment" variant="primary">View Details</Button>
            </Card.Body>
          </Card>

          <Card as={motion.div} variants={item} className={styles.productCard}>
            <img
              src="https://www.sriveluenterprises.com/machines/hwacheon.jpeg"
              alt="Hwacheon Cutex - 160a i"
            />
            <Card.Body>
              <Card.Title>Hwacheon Cutex - 160a i</Card.Title>
              <Card.Text>Advanced turning center for superior surface finish</Card.Text>
              <Button as={Link} to="/bussiness/equipment" variant="primary">View Details</Button>
            </Card.Body>
          </Card>

          <Card as={motion.div} variants={item} className={styles.productCard}>
            <img
              src="https://www.sriveluenterprises.com/machines/LX20TL3.jpeg"
              alt="LMW LX20T L3"
            />
            <Card.Body>
              <Card.Title>LMW LX20T L3</Card.Title>
              <Card.Text>Versatile lathe for precision turning operations</Card.Text>
              <Button as={Link} to="/bussiness/equipment" variant="primary">View Details</Button>
            </Card.Body>
          </Card>

          <Card as={motion.div} variants={item} className={`${styles.productCard} ${styles.seeMoreCard}`}>
            <Link to="/bussiness/equipment" className={styles.seeMoreLink}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.seeMoreContent}
              >
                <GrNext size={30} />
                <p>Explore All Equipment</p>
              </motion.div>
            </Link>
          </Card>
        </motion.div>
      </section>

      {/* <section className={styles.advertise}>

        <div className={styles.img1}>
          <FaGlobeAsia />
          <p>
          N0.11/1,Chamundi Vihar, <br />
          Abbigere, Chikkabanavara Post, <br/>Bengaluru 5600090, <br />
          </p>
        </div>
        <div className={styles.img2}>
          <AiTwotoneMail />
          <p>Drop a text to</p>
          <p>gnanavel@sriveluenterprises.com</p>
        </div>
        <div className={styles.img3}>
          <MdOutlinePhoneInTalk />
          <p>Contact by</p>
          <p> +91 9980066665</p>
        </div>
      </section> */}
      <Advertise />
    </div>
  )
}

export default Main