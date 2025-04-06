import React from 'react'
import styles from './index.module.scss'
import Advertise from '../Home/Advertise'
import { FaIndustry, FaTools, FaCogs, FaChartLine, FaHandshake, FaUserCog } from 'react-icons/fa'

const About = () => {
  const objectives = [
    {
      icon: <FaIndustry />,
      text: "Advanced Manufacturing Capabilities"
    },
    {
      icon: <FaTools />,
      text: "Precision Engineering Excellence"
    },
    {
      icon: <FaCogs />,
      text: "Quality Control Systems"
    },
    {
      icon: <FaChartLine />,
      text: "Continuous Improvement"
    },
    {
      icon: <FaHandshake />,
      text: "Customer Partnership"
    },
    {
      icon: <FaUserCog />,
      text: "Technical Expertise"
    }
  ];

  return (
    <div className={styles.aboutContainer}>
      <section className={styles.info}>
        <div className={styles.content}>
          <h2>Sri Velu Enterprises</h2>
          <p>
            Sri Velu Enterprises is a privately held; AS9100 Rev D and ISO 9001 – 2015 certified manufacturer 
            of precision machined parts and service provider in the field of Global supply chain management. 
            The original vision of the founders, which continues to this day, is to deliver components and 
            assemblies machined to the highest standards and services to be of outstanding value for our clients.
          </p>
          <ul>
            <li>Visionary organization driven by Values and Culture.</li>
            <li>Nurture continues improvements to sustain and graduate relationships by Technology upgrades, 
                VAVE, Productivity improvements.</li>
            <li>Willing to extend supply chain support on TCO and mitigate risk through VMI, Kanban, 
                Consignment.</li>
            <li>Flexible and efficient in handling High mix low volume parts providing solutions to every 
                part.</li>
            <li>Market oriented to support customers in both Spike and Dip.</li>
          </ul>
        </div>
      </section>

      <section className={styles.objectives}>
        <div className={styles.objectivesGrid}>
          {objectives.map((objective, index) => (
            <div key={index} className={styles.objectiveCard}>
              {objective.icon}
              <p>{objective.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Advertise />
    </div>
  )
}

export default About