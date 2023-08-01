import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.map((item) => <FoodItem {...item} />);
};

export default Cart;
