import { IMG_CDN_URL } from "../Constants";

const FoodItem = ({ id, imageId, name, isVeg, price }) => {
  console.log({ id, imageId, name, isVeg, price });

  return (
    <div
      key={id}
      className="flex flex-col items-center p-3 w-auto m-5 h-80 bg-purple-200 shadow-xl rounded-md "
    >
      <div className="flex flex-col items-center p-3 w-1/5 m-5 h-80 bg-purple-200 shadow-xl rounded-md ">
        <h1 className="font-bold my-1 text-purple-950 ">{name}</h1>
        <img className="w-48 my-2 shadow-xl" src={IMG_CDN_URL + imageId} />
        <span className="my-1 font-semibold">{"Price : " + price / 100}</span>
      </div>
    </div>
  );
};

export default FoodItem;
