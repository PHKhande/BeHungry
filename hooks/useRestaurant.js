import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_MENU_LINK } from "../src/Constants";

const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(SWIGGY_RESTAURANT_MENU_LINK + restaurantId);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const menuData = await response.json();
      setRestaurant(menuData?.data?.cards[0]?.card?.card?.info);
    } catch (error) {
      console.error("Error fetching or parsing menu data:", error);
    }

  }
  return restaurant;

};

export default useRestaurant;
