import logo from "../assest/img/logo.png" 
import React from 'react'

export const Logo = () => {
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
    <img  src={logo} style={{width:"150px", height:"150px"}}/>
    </div>
    )
}
export default Logo;