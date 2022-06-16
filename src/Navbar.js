import React from 'react'
import { Link } from "react-router-dom"
import "./css.css"
function Navbar() {
    return (<>
        <nav className="navbar bg-dark">
            <div className="container-fluid d-flex justify-content-evenly">
                <div className='row '>
                    <div className='col-4'>
                        <h2><Link to="/" className='navitem'>Home</Link></h2>
                    </div>
                    <div className='col-4'>
                        <h2><Link to="about" className='navitem'>About</Link></h2>
                    </div>
                    <div className='col-4'>
                        <h2><Link to="cart" className='navitem'>Cart</Link></h2>
                    </div>
                </div>
            </div>
        </nav></>
    )
}

export default Navbar