import React, { useState, useCallback, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import Loading from './loading';
import "./css.css"
import { useGlobal } from "./context-api"
function Singlecocktails() {
  const value = useGlobal()
  const { id } = useParams()
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);
  const [nodrinks, setNodrinks] = useState(false)
  const [incart, setIncart] = useState(false)


  const inCart = () => {

    const newValue = value.addtocart.map((item) => {
      const nD = [...item]
      const dD = nD.join("")
      return dD
    })

    if (newValue.indexOf(id) !== -1) {
      setIncart(true)

    } else {
      setIncart(false)

    }

  }


  useEffect(() => {
    inCart()
  }, [value])


  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${url}${id}`)
      const newData = await response.json()
      if (newData.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: type,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4
        } = newData.drinks[0]
        const newIngredient = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4
        ]
        const newCocktail = {
          name, image, type, glass, instructions, newIngredient
        }
        setCocktail(newCocktail)
        setLoading(false)
      }
      else {
        setCocktail(null)
        setLoading(false)
        setNodrinks(true)
      }
    }
    catch (error) {
      console.log(error);
    }
  }, [id])



  useEffect(() => {
    fetchData()
  }, [id, fetchData])



  if (loading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    )
  }



  if (nodrinks) {
    return (
      <label><h1 id='center'>No Drinks Matched With Your Search!!</h1></label>
    )
  }

  if (!cocktail) {
    return (
      <label><h1 id='center'>No Drinks Matched With Your Search!!</h1></label>
    )
  }



  const { name, image, type, glass, instructions, newIngredient } = cocktail
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 d-flex justify-content-center'>
          <img src={image} width="350" height="350" id='listimage' alt='pic' />
        </div>
        <div className='col-md-6'>
          <br />
          <h1><span id='name'><b>Name:</b></span><span style={{ color: "#1ED760" }}>{name}</span></h1><br />
          <h2><span id='name'><b>Type:</b></span> {type}</h2><br />
          <h2><span id='name'><b>Glass:</b></span> {glass}</h2><br />
          <h2><span id='name'><b>Instructions:</b></span> {instructions}</h2><br />
          <h2><span id='name'><b>Ingredients:</b></span></h2>
          {newIngredient.map((item, index) => {
            return (
              item ? <span key={index}><h3>{item}</h3></span> : null
            )
          })}
          <br />
          <div className='big'>
            {incart ?
              <button className="btn btn-outline-warning"><Link id='check_cart' to="/cart">Check Cart</Link></button>
              :
              <button className="btn btn-outline-success" onClick={() => value.addTocart(id)}>Add to Cart</button>
            }
          </div>
        </div>
        <div className='bg-dark fixed-bottom d-flex justify-content-center' id='sm'>
          {incart ?
            <button className="btn btn-outline-warning"><Link id='check_cart' to="/cart">Check Cart</Link></button>
            :
            <button className="btn btn-outline-success" onClick={() => value.addTocart(id)}>Add to CarT</button>
          }
        </div>
      </div>
    </div>
  )
}


export default Singlecocktails