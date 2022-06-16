import React from 'react'
import { Link } from "react-router-dom"
import "./css.css"
function Error() {
  return (
    <div className='container'>
      <div className='row '>
        <div className='col-md-8 d-flex justify-content-center' id='center'>
          <h1 className='error d-flex justify-content-evenly'>
            <div style={{ color: "#1ED760" }}>404 </div>
            <br />
            <div className='error1'><b>PAGE NOT FOUND!</b></div></h1>
        </div>
      </div>
    </div>
  )
}

export default Error