import React from 'react'

function Quality() {
  return (<div className='padding'>
      <div className='quality'>
    <div className='div-center'>
      <div>
      <h3>Quality</h3>
      <p>We are proud of our quality system certifications; however, quality is more than the accreditation. Right from the beginning, before our machines are programmed; customers will experience meticulous attention to details we seek in reviewing drawings, specifications, models and documentation requirements. For us, Quality is always sooner than later; our investment early in the process helps ensure positive returns in the end.</p>
      </div>
      </div>
      <img src={'/quality.png'} />
    </div>
    <div className='div-center'>
      <div>
      <h3>Continuous engagement of improving following <br />qualities to ensure quality products</h3>
      <ul>
        <li>Trainings on using instruments</li>
        <li>Set-up inspection and approvals</li>
        <li>First article inspection and approvals</li>
        <li>In-process inspection</li>
        <li>Final and visual inspection</li>
        <li>Internal audits</li>
        <li>Calibration monitoring</li>
      </ul>
      </div>
    </div>
    </div>)
}

export default Quality