import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContex } from "../../contexts/cart.context";
const ProductCard = ({ Product }) => {
  const { name, imageUrl, price } = Product;
  const { addItemToCart } = useContext(CartContex);
  const addProductToCart = () => addItemToCart(Product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttontype="inverted"
        Children="ADD TO Cart"
        onClick={addProductToCart}
      ></Button>
    </div>
  );
};

export default ProductCard;
