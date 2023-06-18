import React, { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceId = useId();
  const categoryId = useId();

  const handleFilterPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleFilterCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceId}
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleFilterPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryId}>Categoría</label>
        <select id={categoryId} onChange={handleFilterCategory}>
          <option value={"all"}>Todas</option>
          <option value={"home-decoration"}>Hogar</option>
          <option value={"laptops"}>Portátiles</option>
          <option value={"smartphones"}>Teléfonos</option>
          <option value={"fragrances"}>Perfumes</option>
          <option value={"skincare"}>Cremas</option>
          <option value={"groceries"}>Alimentación</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;
