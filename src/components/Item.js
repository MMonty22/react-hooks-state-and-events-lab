import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  const inCart = cart ? "in-cart" : ""
  function handleClick() {
    setCart(!cart)
  }
  const cartText = cart ? "Remove From Cart" : "Add to Cart"
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart ? "remove" : "add"} onClick={handleClick}>{cartText}</button>
    </li>
  );
}

export default Item;
