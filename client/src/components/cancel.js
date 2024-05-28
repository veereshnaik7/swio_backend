import React from 'react'
import Header from './header'
import { GoX } from "react-icons/go";

const Cancel = () => {
  return (
    <div  >
      <Header/>
      <h2 style={{color:"#fff",marginTop:"10%"}}>Payment failed <GoX /> </h2>

    </div>
  )
}

export default Cancel
