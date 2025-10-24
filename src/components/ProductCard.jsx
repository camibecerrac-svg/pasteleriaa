// ✅ src/components/ProductCard.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("ProductCard Component", () => {
  it("muestra nombre y precio correctamente", () => {
    const producto = {
      id: 1,
      nombre: "Torta Frambuesa",
      precio: 5990,
      descripcion: "Torta artesanal con frambuesa.",
      imagen: "https://via.placeholder.com/150"
    };

    render(<ProductCard product={producto} onAdd={() => {}} />);

    expect(screen.getByText("Torta Frambuesa")).toBeTruthy();
    expect(screen.getByText("$5,990")).toBeTruthy();
  });
});
