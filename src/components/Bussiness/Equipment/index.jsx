import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { data } from './Data'
import styles from './equip.module.scss'
function Equipment() {
  return (
    <div className={styles.equip}>
      {data.map(ele=>(
                        <Card as={motion.div}  >
                        <Card.Img variant="top" src={ele.url} />
                        <Card.Body>
                          <Card.Title>{ele.title}</Card.Title>
                          <Button as={Link} to="/bussiness/equipment">See More </Button>
                        </Card.Body>
                      </Card>
      ))}
    </div>
  )
}

export default Equipment