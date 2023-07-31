import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useFetchRestaurant from "../../hooks/useFetchRestaurants";

const Body = () => {

  //Using personal hook
  const restaurants = useFetchRestaurant();

  // if allRestaurants are empty don't render restaurants cards
  if (!restaurants) return null;

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-purple-300 p-2 m-5 border border-purple-800 rounded-md">
        <input
          type="text"
          className="focus:bg-fuchsia-600 p-2 text-white"
          placeholder="Search for restaurants..."
          value={"Search..."}
          onChange={(e) => {
          }}
        />
        <button
          className="bg-rose-600 text-white mx-2 rounded-lg p-2"
          onClick={() => {
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-evenly bg-purple-300 m-5 border border-purple-800 rounded-md">
        {restaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
