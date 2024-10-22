import React, { useRef } from 'react'
import styles from './index.module.scss';
import { Button, Card } from 'react-bootstrap';
import {motion, useInView} from 'framer-motion'
import IconsPart from './IconsPart';
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
        duration:1
      }
    }
  };
  const container1 = {
    hidden: { opacity: 1 ,y:-200},
    visible: {
      y:0,
      opacity: 1,
      // scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.4,
        duration:2
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition:{
        duration:1
      }
    }
  };
  
  return (
    <div className={styles.main}>
      <br />
      <section className={styles.first} ref={employees}>
      <motion.div
      variants={container}
      initial={isempView?"hidden":""}
      animate={isempView?"visible":"hidden"}
      >
        <motion.div 
        variants={container1}
        initial={isempView?"hidden":""}
        animate={isempView?"visible":"hidden"}
        className={styles.imageholder}><motion.img variants={item} src='./velu.jpeg'/></motion.div>
        <motion.p
        variants={item}
        >A leading manufacturer of high-quality nuts, bolts, and fasteners, serving industries across construction, automotive, machinery, and more. With precision engineering and durable materials, we provide a wide range of standard and custom solutions designed to meet the toughest performance and safety standards. Our state-of-the-art manufacturing facility ensures reliable production, while our experienced team ensures timely delivery and customer satisfaction. Whether you need bulk orders or specialized designs, we are your trusted partner for fastening solutions that last.</motion.p>
      </motion.div>
      </section>
      <IconsPart styles={styles} />
        <br />
      <section ref={product}>
      <h2>Products</h2>
      <hr />
      <motion.div 
          variants={container}
          initial={isproView?"hidden":""}
          animate={isproView?"visible":"hidden"}
      className={styles.products}>


      <Card as={motion.div} variants={item} style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://www.sriveluenterprises.com/products/material8.jpeg" />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="info">All Products </Button>
      </Card.Body>
    </Card>

    <Card as={motion.div} style={{ width: '18rem' }} variants={item}>
      <Card.Img variant="top" src="https://www.sriveluenterprises.com/products/material11.jpeg" />
      <Card.Body>
        <Button variant="info">All Products </Button>
      </Card.Body>
    </Card>
    <Card as={motion.div} style={{ width: '18rem' }} variants={item}>
      <Card.Img variant="top" src="https://www.sriveluenterprises.com/products/material23.jpeg" />
      <Card.Body>
        <Button variant="info">All Products </Button>
      </Card.Body>
    </Card>
    </motion.div>
    </section>
    <br />
    <section ref={equip}>
    <h2>Equipment</h2>
    <hr />
    <motion.div className={styles.equipment}
              variants={container}
              initial={isequipView?"hidden":""}
              animate={isequipView?"visible":"hidden"}>
    <Card as={motion.div} variants={item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.sriveluenterprises.com/machines/Mi08j-11.jpeg" />
      <Card.Body>
        <Card.Title>Tsugami Mi08j-11</Card.Title>
        <Button variant="info">Equipment </Button>
      </Card.Body>
    </Card>
    <Card as={motion.div} variants={item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.sriveluenterprises.com/machines/hwacheon.jpeg" />
      <Card.Body>
        <Card.Title>Hwacheon Cutex - 160a i</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="info">Equipment </Button>
      </Card.Body>
    </Card>
    <Card as={motion.div} variants={item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.sriveluenterprises.com/machines/LX20TL3.jpeg" />
      <Card.Body>
        <Card.Title>LMW LX20T L3</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="info">Equipment </Button>
      </Card.Body>
    </Card>
    </motion.div>
    </section>
    </div>
  )
}

export default Main