import { useReducer } from "react";
import { ACTION_TYPES, initialState, reducer } from "../reducers/cart";

export function useCartReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (product) => {
    dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: ACTION_TYPES.REMOVE_TO_CART, payload: product });
  };

  const clearCart = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_CART });
  };

  return { state, addToCart, removeFromCart, clearCart };
}
