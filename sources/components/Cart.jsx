import { useId, useState } from "react";
import "./Cart.css";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

function Cart() {
  const { state, addToCart, clearCart } = useCart();
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {state.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}

export default Cart;
