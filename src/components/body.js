import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTAURANT_LINK } from "../Constants";

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

  const filterData = (txt) => {
    return restaurants.filter((restaurant) =>
      restaurant?.info.name.includes(txt)
    );
  };

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="seach-container" style={{ border: "2px solid gold" }}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
          style={{ padding: "10px" }}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          style={{ padding: "10px" }}
          onClick={() => {
            setFilteredRestaurants(filterData(searchText));
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
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
