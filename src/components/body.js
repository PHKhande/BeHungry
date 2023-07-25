import { useState } from "react";

import { restaurantList } from "./constants";
import RestaurantCard from "./restaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  const filterData = (txt) => {
    return restaurantList.filter((restaurant) => restaurant.data.name.includes(txt));
  };

  return (
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
            setRestaurants(filterData(searchText));
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
