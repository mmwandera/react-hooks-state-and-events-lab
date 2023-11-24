import React, { useState } from "react";

// In the Item component, when the user clicks the <button> element, the item should be added to their virtual cart. The way we'll show the user that the item is in the cart is by changing the className on the <li> element:
// If the item is not in the cart, the <button> element's text should read "Add to Cart", and if the item is in the cart, the <button> element's text should read "Remove From Cart". Naturally, you'll also need to add state to the Item component to solve this deliverable!

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);
  function addToCart() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={addToCart}>{isInCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
