import { useParams } from "react-router-dom";

import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../../hooks/useRestaurant";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurant = useRestaurant(restaurantId);

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
