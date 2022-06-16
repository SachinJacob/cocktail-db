import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import App from "./App"
const newData = createContext()
const Contextapi = () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    const [loading, setLoading] = useState(true)
    const [searchitem, setSearchitem] = useState("a")
    const [cocktails, setCocktails] = useState([])
    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await fetch(`${url}${searchitem}`)
            const data = await response.json()
            const { drinks } = data
            if (drinks) {
                const newDrink = drinks.map((item) => {
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
                    return { id: idDrink, image: strDrinkThumb, name: strDrink, type: strAlcoholic, glass: strGlass }
                })
                setCocktails(newDrink)
            }
            else {
                setCocktails([])
            }
            setLoading(false)
        }
        catch (error) {
            console.log(error);
        }
    }, [searchitem])
    useEffect(() => {
        fetchData()
    }, [searchitem, fetchData])
    return (
        <newData.Provider value={{
            loading, setLoading, searchitem, setSearchitem, cocktails, setCocktails
        }}>
            <App />
        </newData.Provider>
    )
}
export const useGlobal = () => {
    return useContext(newData)
}

export default Contextapi