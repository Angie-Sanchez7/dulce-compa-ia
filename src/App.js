import { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header/Header.jsx";
import ProductInformation from "./components/ProductInformation/ProductInformation";
import "./App.css";

function App() {
  //Map of products
  const [productInfo, setproductInfo] = useState([]);
  //Map of productInfo
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    const products = localStorage["cart"]
      ? JSON.parse(localStorage["cart"])
      : [];
    setProductsCart(products);
  }, []);

  return (
    <Router>
      <Header setproductInfo={setproductInfo} productsCart={productsCart} setProductsCart={setProductsCart} />
      <Switch>
        <Route exact path="/">
          <Home setproductInfo={setproductInfo} />
        </Route>
        <Route exact path="/producto/:id">
          <ProductInformation
            setproductInfo={setproductInfo}
            productInfo={productInfo}
            productsCart={productsCart}
            setProductsCart={setProductsCart}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
