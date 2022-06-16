import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Home.js"
import About from "./About"
import Navbar from "./Navbar"
import Singlecocktails from "./Singlecocktails"
import Error from "./Error"
import "./css.css"
const App = () => {
    return (
        <Router>
            <Navbar />
            <div id='color'>
                <Routes>
                    <Route exact path='/' element={<Home />}>
                    </Route>
                    <Route exact path='about' element={<About />}>
                    </Route>
                    <Route exact path='cocktails/:id' element={<Singlecocktails />}>
                    </Route>
                    <Route exact path='*' element={<Error />}>
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App