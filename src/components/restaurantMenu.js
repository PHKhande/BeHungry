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
    <div className="border border-purple-800 p-3 w-52 m-5 bg-purple-200 shadow-xl rounded-md">
    
      <h1 className="font-bold my1">{restaurant?.id}</h1>
      <h1 className="font-bold my-1">{restaurant?.name}</h1>
      <img className="w-48 my-2" src={`${IMG_CDN_URL}${restaurant?.cloudinaryImageId}`} />
      <h1 className="my-1">{restaurant?.costForTwoMessage}</h1>
      <h1 className="my-1">{restaurant?.avgRating + " Stars"}</h1>
      <h1 className="my-1 font-semibold">{restaurant?.isOpen ? "Open" : "Closed"}</h1>
    </div>
  );
};

export default RestaurantMenu;
