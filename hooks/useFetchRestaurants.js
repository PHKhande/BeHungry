import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_LINK } from "../src/Constants";

const useFetchRestaurant = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect( () => {getRestaurants()}, [])

    async function getRestaurants() {
        const data = await fetch(`${SWIGGY_RESTAURANT_LINK}`);
        const restaurantData = await data.json();
    
        setRestaurants(
          restaurantData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }

    return restaurants;

};

export default useFetchRestaurant;