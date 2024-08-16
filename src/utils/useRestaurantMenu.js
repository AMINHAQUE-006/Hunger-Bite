import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { GET_RESTAURANT_MENU_URL } from '../constants'

function useRestaurantMenu(resId) {
    const [restaurant, setRestaurant] = useState(null)
  const [recommendedDishes, setRecommendedDishes] = useState([])


    async function getRestaurant() {
        const response = await axios(GET_RESTAURANT_MENU_URL+resId)
        setRestaurant(response?.data?.data?.cards[2]?.card?.card?.info)
        setRecommendedDishes(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
      } 
    
      useEffect(() => {
        getRestaurant()
      }, [])

      return [restaurant, recommendedDishes];
}

export default useRestaurantMenu;