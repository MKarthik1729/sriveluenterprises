import React from 'react';
import { Carousel } from 'react-bootstrap';
import './image.scss';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

const Image = ({ img, title, description }) => {
  return (
    <div className={img}>
      <motion.div 
        className="slide-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          {title.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {word === 'Srivelu' || word === 'Enterprises' ? (
                <span className="company-name">{word}</span>
              ) : (
                word
              )}
              {' '}
            </React.Fragment>
          ))}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
};

const IndividualIntervalsExample = () => {
  const slides = [
    {
      img: 'bo1',
      title: 'Welcome to Srivelu Enterprises',
      description: 'Your trusted partner in precision manufacturing. We specialize in high-quality nuts, bolts, and fasteners, delivering excellence through advanced engineering and unwavering commitment to quality.'
    },
    {
      img: 'bo2',
      title: 'Precision Engineering Excellence',
      description: 'Experience the power of precision with our state-of-the-art manufacturing facility. We combine cutting-edge technology with skilled expertise to produce components that meet the most demanding specifications.'
    },
    {
      img: 'bo3',
      title: 'Global Quality Standards',
      description: 'Every product we manufacture adheres to international quality standards. Our commitment to excellence ensures reliable and durable fastening solutions for critical industrial applications worldwide.'
    }
  ];

  return (
    <div className="landing-container">
      <Carousel 
        className="custom-carousel" 
        interval={5000}
        pause={false}
        controls={true}
        indicators={true}
        fade
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Image 
              img={slide.img} 
              title={slide.title}
              description={slide.description}
        />
      </Carousel.Item>
        ))}
    </Carousel>
    <Outlet />
    </div>
  );
};

export default IndividualIntervalsExample;