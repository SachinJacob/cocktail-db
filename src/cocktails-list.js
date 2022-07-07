import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from "./context-api"
import "./css.css"
import Loading from './loading'
function Cocktailslist() {
    const d = useGlobal()
    if (d.loading) {
        return (
            <div className="row">
                <Loading />
            </div>
        )
    }
    if (d.cocktails < 1) {
        return (
            <label><h1 id='center'>No Drinks Matched With Your Search!!</h1></label>
        )
    }
    return (
        <div className='row'>
            {d.cocktails.map((item) => {
                const { id, name, image, type, glass } = item
                return (
                    <div className='col-lg-3 col-md-4 d-flex justify-content-center' key={id}>
                        <Link to={`cocktails/${id}`} >
                            <div className="card text-light" style={{ width: "300px", marginTop: "30px", backgroundColor: "#191414", borderRadius: "30px" }} >
                                <img src={image} className="card-img-top" id='listimage' alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" id='card-text'>{name}</h5>
                                    <p className="card-text" id='card-text'>Type:{type}</p>
                                    <p className="card-text" id='card-text'>Glass:{glass}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cocktailslist