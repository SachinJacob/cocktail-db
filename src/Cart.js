import React from 'react'
import {useGlobal} from "./context-api"
function Cart() {
const value = useGlobal()
console.log(value.addtocart);
  return (
    <div>{
      value.addtocart.map((item) => {
        return ( <div key={item} style={{color:"white"}}>
        {item}<br/></div>)
      })}</div>
  )
}

export default Cart