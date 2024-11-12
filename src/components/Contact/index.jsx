import React from 'react'
import './App.css'
function Contact() {
  return (<div>
      <div className="b2 " style={{ textAlign: "center", color: "aliceblue", padding: "20px", fontSize:'20px' }}>
        <h2>Contact Us</h2>
        <p>We are happy and glad to establish contacts with you, please write to Gnanavel@sriveluenterprises.com</p>
        <p>for general queries and get in touch with any of the listed below for specific queries or swift responses.</p>
        <div >
          <img src={ '/velu.jpeg'} style={{ height: "250px" }} alt='searching...'/>
          <p>Gnanavelu s, Director, +91 9980066665, gnanavel@sriveluenterprises.com</p>
        </div><br />
        <p>Sri Velu Enterprises operates in IST time zone, you will get a response within 24 hours the maximum <br />if you happen
          to be from the time zone with a time difference of 6+ hours to IST.</p>
      </div>
      <div className='contact' >
      <div  className='div-center' >

      <div>
        <h2>Contact us</h2>
     <p> Sri Velu Enterprises<br />
      Contact Person : Gnanavel S.(Proprietor)<br /><br />
      N0.11/1,Chamundi Vihar,<br /> Lakshmipura Road, <br />
      Abbigere, Chikkabanavara Post, <br/>Bengaluru 5600090, <br />
      Karnataka, India<br /><br />
      +91 9980066665<br />
      gnanavel@sriveluenterprises.com</p >
        </div>
      </div>
      <div className='center'>

      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15545.54306060589!2d77.5289043!3d13.0747205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22c30d630cd9%3A0x70a2435e865285cc!2sSri%20Velu%20Enterprises!5e0!3m2!1sen!2sin!4v1703151248837!5m2!1sen!2sin"  
      height="450" 
      // style={{border:'0'}}
      style={{alignSelf:'center',justifySelf:"center"}}
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade" />
      </div>
      </div>
      </div>
  )
}

export default Contact