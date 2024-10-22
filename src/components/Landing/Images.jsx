import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './image.scss'
import { Outlet } from 'react-router-dom';
// function Image({img,title,desc}){
// return(<div className={img + ' gap' }>
//     <div className='left'>

//     <h2>{title}</h2>
//     <p>{desc}</p>
//     </div>
// </div>)
// }

function Image({img}){
return(<div className={img + ' gap' }>
    <div className='left'>
    <p>Welcome to</p>
    <h2>
      <span className='name'> Sri Velu Enterprises</span></h2>
    </div>
</div>)
}

function IndividualIntervalsExample() {
  return (<div>
    <Carousel fade pause='false'>
      <Carousel.Item interval={700}>
        <Image img="bo1" title="Sri Velu Enterprises"
        desc=" is a leading manufacturer of high-quality nuts, bolts, and fasteners, serving industries across construction, automotive, machinery, and more. With precision engineering and durable materials, we provide a wide range of standard and custom solutions designed to meet the toughest performance and safety standards. Our state-of-the-art manufacturing facility ensures reliable production, while our experienced team ensures timely delivery and customer satisfaction. Whether you need bulk orders or specialized designs, we are your trusted partner for fastening solutions that last."
        />
      </Carousel.Item>
      <Carousel.Item interval={700}>
      <Image img="bo2" title="About" 
      desc="Sri Velu Enterprises is a privately held; AS9100 Rev D and ISO 9001 – 2015 certified manufacturer of precision machined parts and service provider in the field of Global supply chain management. The original vision of the founders, which continues to this day, is to deliver components and assemblies machined to the highest standards and services to be of outstanding value for our clients.s"
      />
      </Carousel.Item>
      <Carousel.Item  interval={700}>
      <Image img="bo3" title="Mission" 
      desc="Our mission is to revolutionize the manufacturing landscape by providing unparalleled CNC solutions that prioritize precision, efficiency, and innovation. 
      We are dedicated to empowering our clients with cutting-edge technology, streamlining their production processes, and fostering a culture of continuous improvement. 
      Our mission extends beyond delivering state-of-the-art CNC tools; it encompasses a vision of transforming businesses, fostering growth, and contributing to the advancement of industries worldwide through the seamless integration of our expertise and advanced technologies"
      />

      </Carousel.Item>
    </Carousel>
    <Outlet />
    </div>
  );
}

export default IndividualIntervalsExample;