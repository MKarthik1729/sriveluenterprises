import React from 'react'
import styles from './index.module.scss'
import Advertise from '../Home/Advertise'
import { TbAntennaBars5 } from "react-icons/tb";
import { MdMoving } from "react-icons/md";
import { MdEngineering } from "react-icons/md";
import { MdRule,MdAddTask,MdEmojiObjects } from "react-icons/md";
function About() {
  return (
    <div className={styles.about}>
      <div className={styles.info}>

        <h2>Sri Velu Enterprises</h2>
        <p>Sri Velu Enterprises is a privately held; AS9100 Rev D and ISO 9001 – 2015 certified manufacturer of precision machined parts and service provider in the field of Global supply chain management. The original vision of the founders, which continues to this day, is to deliver components and assemblies machined to the highest standards and services to be of outstanding value for our clients.</p>
        <ul>
          <li >Visionary organization driven by Values and Culture.</li>
          <li >Nurture continues improvements to sustain and graduate relationships by Technology upgrades, VAVE, Productivity improvements.</li>
          <li >Willing to extend supply chain support on TCO and mitigate risk through VMI, Kanban, Consignment.</li>
          <li >Flexible and efficient in handling High mix low volume parts providing solutions to every part.</li>
          <li >Market oriented to support customers in both Spike and Dip</li>
        </ul>
      
      </div>


        <section className={styles.objectives}>
          <div>
            <TbAntennaBars5 />
            <p>Profit Margin Expansion</p>
          </div>
          <div>
            <MdMoving />
            <p>Improving Working Capital</p>
          </div>
          <div>
            <MdEngineering />
            <p>Mitigating Supply Risk</p>
          </div>
          <div>
            <MdAddTask />
            <p>Customer Driven Initiatives Creating values

</p>
          </div>
          <div>
            <MdEmojiObjects />
            <p>Innovating New Products</p>
          </div>
          <div>
            <MdRule />
            <p>Reduce Cost\Waste in the Process</p>
          </div>
        </section>

        <Advertise />
    </div>
  )
}

export default About