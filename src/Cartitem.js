import React, { useState, useEffect, useCallback } from 'react'
import Loading from './loading'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"
const Cartitem = ({ item }) => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
    const [cocktailnew, setCocktailnew] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`${url}${item}`)
            const newData = await response.json()
            if (newData.drinks) {
                const {
                    strDrink: name,
                    strDrinkThumb: image
                } = newData.drinks[0]
                const newCocktail = {
                    name, image
                }
                setCocktailnew(newCocktail)
                setLoading(false)
            }
            else {
                setCocktailnew(null)
                setLoading(false)
            }
        }
        catch (error) {
            console.log(error);
        }
    }, [item])

    useEffect(() => {
        fetchData()
    }, [item, fetchData])

    if (loading) {
        return (
            <><Loading /></>
        )
    }
    return (
        <div className='d-flex justify-content-center'>
            <div className="col-md-6  mb-3" >
                <div className="row">
                    <div className="col-4">
                        <img src={cocktailnew.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-5">
                        <div className="card-body">
                            <h5 className="card-title">{cocktailnew.name}</h5>
                            <p className="card-text">Price : { }</p>
                            <button className="text-muted">remove</button>
                        </div>
                    </div>
                    <div className='col-3 '>
                        <div className='card-body '>
                            <span className='d-flex justify-content-center'>
                                <button ><IoIosArrowUp /></button>
                            </span>
                            <p className='d-flex justify-content-center'>{ }</p>
                            <span className='d-flex justify-content-center'>
                                <button ><IoIosArrowDown /></button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartitem