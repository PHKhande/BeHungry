import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({
  cloudinaryImageId,
  id,
  name,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="border border-purple-800 p-3 w-52 m-2 bg-purple-200 shadow-xl rounded-md">
      <img className="w-40 my-2" src={`${IMG_CDN_URL}` + cloudinaryImageId} />
      <h2 className="font-bold">{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{avgRating + " Stars"}</h2>
    </div>
  );
};

export default RestaurantCard;
