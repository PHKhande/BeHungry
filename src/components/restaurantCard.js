import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({
  cloudinaryImageId,
  id,
  name,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}` + cloudinaryImageId} />
      <h1>{id}</h1>
      <h2>{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{avgRating + " Stars"}</h2>
    </div>
  );
};

export default RestaurantCard;
