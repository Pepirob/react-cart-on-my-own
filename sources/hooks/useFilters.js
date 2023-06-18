import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  if (filters === undefined || setFilters === undefined) {
    throw new Error("'useFilters must be used within a FilterProvider'");
  }

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, setFilters, filterProducts };
}
