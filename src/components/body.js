import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTAURANT_LINK } from "../Constants";
import { filterData } from "../../util/helper";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(`${SWIGGY_RESTAURANT_LINK}`);
    const restaurantData = await data.json();

    setRestaurants(
      restaurantData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }


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
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-rose-600 text-white mx-2 rounded-lg p-2"
          onClick={() => {
            setFilteredRestaurants(filterData(searchText));
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
