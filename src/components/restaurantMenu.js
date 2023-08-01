import { useParams } from "react-router-dom";

import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useResMenuData from "../../hooks/useGetMenuData";
import { useDispatch } from "react-redux";
import { addItem, clearItem } from "../../redux/cartSlice";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurant, menuItems] = useResMenuData(restaurantId);
  const dispatch = useDispatch();

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex border border-purple-800 p-3 m-5 bg-purple-200 shadow-xl rounded-md">
      <div className="flex flex-col items-center border  p-3 w-1/5 m-5 h-96 bg-purple-200 shadow-xl rounded-md ">
        <h1 className="italic my1">{"Restaurant Info."}</h1>
        <h1 className="font-bold my-1 text-purple-950 ">{restaurant?.name}</h1>
        <img
          className="w-48 my-2 shadow-xl"
          src={`${IMG_CDN_URL}${restaurant?.cloudinaryImageId}`}
        />
        <h1 className="my-1">{restaurant?.costForTwoMessage}</h1>
        <h1 className="my-1">{restaurant?.avgRating + " Stars"}</h1>
        <h1 className="my-1 font-semibold">
          {restaurant?.isOpen ? "Open" : "Closed"}
        </h1>
        <button
          className="border border-purple-950 p-2 mt-3 rounded-lg text-white bg-green-600"
          onClick={() => {
            dispatch(clearItem());
          }}
        >
          Clear Cart
        </button>
      </div>

      <div className=" w-4/5 p-3 m-5">
        {menuItems.map((item) => {
          return (
            <div className="flex justify-between p-3 m-5 bg-purple-200 shadow-xl rounded-md">
              <div className="w-4/6 m-1">
                <h1 className="font-bold"> {item.name} </h1>
                {item.isVeg ? <h1>🟢</h1> : <h1>🔴</h1>}
                <h1 className="italic"> {item.description} </h1>
              </div>
              <div className="w-1/6 m-1 flex flex-col items-center">
                <img
                  className="w-48 shadow-xl"
                  src={IMG_CDN_URL + item.imageId}
                />
                <button
                  className="border border-purple-950 p-2 mt-3 rounded-lg text-white bg-red-600"
                  onClick={(item) => {
                    dispatch(addItem(item));
                  }}
                >
                  ADD +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
