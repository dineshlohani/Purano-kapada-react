import "./App.css";
import React, { useState } from "react";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./page/Pages";
import Data from "./components/flashDeals/Data";

import "./App.css";
import Cart from "./common/cart/Cart";
import Login from "./common/header/Login";
import Register from "./common/header/Register";

function App() {
  // step 1:fetch data from database
  const { productItems } = Data;

  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? {
                ...productExit,
                qty: productExit.qty + 1,
              }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id === product.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? {
                ...productExit,
                qty: productExit.qty - 1,
              }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route exact path="/">
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
           <Route path="/login" exact>
            <Login/>
          </Route>
           <Route path="/register" exact>
            <Register/>
          </Route>
          {/* <Route exact path='/login' element={< Login />}></Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
