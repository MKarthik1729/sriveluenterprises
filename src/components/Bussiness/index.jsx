import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { MdDoneAll } from "react-icons/md";
import { MdPermDataSetting } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";

import '../../App.css'
function Subfooter() {
  const IconStyle = {
    fontSize:"150px",
    backgroundColor:"white",
    padding:"20px",
    color:"red",
    borderRadius:"50%"
  }

  return (
    <div>
      <Outlet />
      <div className='b2 con' style={{ justifyContent: "space-around", padding: "2% 0",textAlign:"center" }}>
        <Link className='middle' to='quality'>
            <MdDoneAll style={IconStyle}/>
          <p>Quality</p>
        </Link>
        <Link to='equipment' className='middle'>
          <MdPermDataSetting style={IconStyle} />
          <p>Equipment</p>

        </Link>
        <Link className='middle' 
        to='material'
        // onClick={}
        >
          <MdManageSearch style={IconStyle} />
          <p>Material</p>

        </Link>
      </div>
    </div>
  )
}

export default Subfooter