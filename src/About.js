import React from 'react'
import "./css.css"
function About() {
  return (
    <div className='container' id='center'>
      <div className='row'>
        <div className='col-md-8'>
          <label><h1>About Us!</h1></label>
        </div>
      </div><br />
      <div className='row'>
        <div className='col-md-8'>
          <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?</p>
        </div>
      </div>
    </div>
  )
}

export default About