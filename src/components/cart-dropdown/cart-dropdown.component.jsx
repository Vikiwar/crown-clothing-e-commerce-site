import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContex } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { addItemToCart, cartItems } = useContext(CartContex);
  return (
    <div className="cart-dropdown-container">
      <div className=" cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button Children="go to checkout" />
    </div>
  );
};

export default CartDropdown;
