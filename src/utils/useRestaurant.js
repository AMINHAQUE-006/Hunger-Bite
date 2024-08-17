import React from 'react'
import { useState, useEffect } from 'react'
import { GET_RESTAURANT_URL } from '../constants'

function useRestaurant() {
    const [allRestaurant, setAllRestaurant] = useState([])
    useEffect(() => {
      getRestaurants()
    }, [])
    
    async function getRestaurants() {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = GET_RESTAURANT_URL;
        fetch(proxyUrl + targetUrl)
        .then(response => response.json())
        .then(res => setAllRestaurant(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
        .catch(error => console.error('Error:', error));
    }

    return [allRestaurant]
}

export default useRestaurant