import "./App.css";
import { useContext, useState } from "react";
import { Flex, ThemeProvider } from "theme-ui";
import { Frame } from "./components/Frame";
import { theme, tokens } from "./styles/theme";
import { PrimaryHeader } from "./components/Text";
import ProductContext from "./store/ProductContext";
import Primary from "./components/buttons/Primary";
import Secondary from "./components/buttons/Secondary";
import Tertiary from "./components/buttons/Tertiary";
import AddToCart from "./components/buttons/AddToCart";

function App() {
  const allProducts = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [added, setAdded] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { products } = allProducts;
  const addToCart = (id) => {
    try {
      setLoading(true);
      //timeouts to mimic async calls
      setTimeout(() => {
        setLoading(false);
        setAdded(true);
      }, 750);
      setTimeout(() => {
        setAdded(false);
        setDisabled(true);
      }, 1500);
      setCartItems(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      {allProducts && (
        <Flex
          my={6}
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PrimaryHeader my={4}>Component Testing</PrimaryHeader>
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Frame>
              <Primary />
              <Secondary products={products} />
              <Tertiary />
              <AddToCart
                disabled={disabled}
                loading={loading}
                added={added}
                addToCart={addToCart}
                products={products}
              />
            </Frame>
          </Flex>
        </Flex>
      )}
    </ThemeProvider>
  );
}

export default App;
