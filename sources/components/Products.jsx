import React from "react";
import { products as initialProducts } from "../mocks/products.json";
import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";

function Products() {
  const { state, addToCart, removeFromCart } = useCart();
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  const checkProductInCart = (product) => {
    return state.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {filteredProducts.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ color: isProductInCart ? "red" : "#09f" }}
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Products;
