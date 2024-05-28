import React from 'react'
import Header from './header'
import { GoCheck } from "react-icons/go";

const Success = () => {
  return (
    <div >
      <Header/>
      <h2 style={{color:"#fff",marginTop:"10%"}}>success <GoCheck /> </h2>
    </div>
  )
}

export default Success
