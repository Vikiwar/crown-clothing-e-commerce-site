import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

import {
  selectIscartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIscartOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
