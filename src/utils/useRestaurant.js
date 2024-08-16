import React from 'react'
import { useState, useEffect } from 'react'
import { GET_RESTAURANT_URL } from '../constants'

function useRestaurant() {
    const [allRestaurant, setAllRestaurant] = useState([])
    useEffect(() => {
      getRestaurants()
    }, [])
    
    async function getRestaurants() {
        try {
            const data = await fetch(GET_RESTAURANT_URL)
            const json = await data.json();
            setAllRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            console.error(error)
        }
    }

    return [allRestaurant]
}

export default useRestaurant