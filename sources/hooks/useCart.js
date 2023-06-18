import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("Wrapper must be used");
  }
  return context;
}
