import React from 'react'
import styles from './index.module.scss'
import { FaGlobeAsia } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GrNext } from "react-icons/gr";
function Advertise() {
  return (
    <section className={styles.advertise}>

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
  </section>
  )
}

export default Advertise