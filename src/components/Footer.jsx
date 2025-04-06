// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Sri Velu Enterprises</h3>
            <p>Your trusted partner for high-quality manufacturing solutions.</p>
            <div className={styles.social}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/bussiness">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Contact Info</h4>
            <ul>
              <li>N0.11/1, Chamundi Vihar</li>
              <li>Abbigere, Chikkabanavara Post</li>
              <li>Bengaluru 560090</li>
              <li>Phone: +91 9980066665</li>
              <li>Email: gnanavel@sriveluenterprises.com</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Business Hours</h4>
            <ul>
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Sri Velu Enterprises. All rights reserved.</p>
          <div className={styles.links}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
