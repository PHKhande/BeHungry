import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { SWIGGY_RESTAURANT_MENU_LINK } from "../constants";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { restaurantId } = useParams();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
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

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{restaurant?.id}</h1>
      <h1>{restaurant?.name}</h1>
      <img src={`${IMG_CDN_URL}${restaurant?.cloudinaryImageId}`} />
      <h1>{restaurant?.costForTwoMessage}</h1>
      <h1>{restaurant?.avgRating + " Stars"}</h1>
      <h1>{restaurant?.isOpen ? "Open" : "Closed"}</h1>
    </div>
  );
};

export default RestaurantMenu;
