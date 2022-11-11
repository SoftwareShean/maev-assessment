import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log(products);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
