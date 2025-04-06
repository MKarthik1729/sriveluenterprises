import React from 'react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <section className={styles.contactHeader}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contact Us</h1>
          <p>We are happy and glad to establish contacts with you. Get in touch with us for any queries or swift responses.</p>
        </motion.div>
      </section>

      <section className={styles.contactContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.contactInfo}>
            <motion.div 
              className={styles.infoCard}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Director</h3>
              <img src="/velu.jpeg" alt="Gnanavelu S" className={styles.directorImage} />
              <p>Gnanavelu S</p>
              <p>+91 9980066665</p>
              <p><a href="mailto:gnanavel@sriveluenterprises.com">gnanavel@sriveluenterprises.com</a></p>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Office Address</h3>
              <p>
                Sri Velu Enterprises<br />
                No.11/1, Chamundi Vihar,<br />
                Lakshmipura Road,<br />
                Abbigere, Chikkabanavara Post,<br />
                Bengaluru 560090,<br />
                Karnataka, India
              </p>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3>Business Hours</h3>
              <p>We operate in IST time zone. You will receive a response within 24 hours maximum if you are from a time zone with a 6+ hours difference to IST.</p>
            </motion.div>
          </div>

          <motion.div 
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Send us a Message</h2>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className={styles.map}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15545.54306060589!2d77.5289043!3d13.0747205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22c30d630cd9%3A0x70a2435e865285cc!2sSri%20Velu%20Enterprises!5e0!3m2!1sen!2sin!4v1703151248837!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Velu Enterprises Location"
          />
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;