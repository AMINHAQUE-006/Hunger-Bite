import React from 'react'
import { useState, useEffect } from 'react'
import { GET_RESTAURANT_URL } from '../constants'

function useRestaurant() {
    const [allRestaurant, setAllRestaurant] = useState([])
    useEffect(() => {
      getRestaurants()
    }, [])
    
    async function getRestaurants() {
        fetch("/api/fetch-api")
        .then(response => response.json())
        .then(res => setAllRestaurant(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
        .catch(error => console.error('Error:', error));
    }

    return [allRestaurant]
}

export default useRestaurant