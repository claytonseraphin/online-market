import React, {useState, useEffect} from "react";
//import react-router-dom
import {BrowserRouter, Link, NavLink, Switch, Route} from 'react-router-dom';
//import the different pages of the app
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Products from "./components/pages/Products.js";
import Cart from "./components/pages/Cart.js";
import ProductDetails from "./components/pages/ProductDetails.js";
//import the navbar
import Navbar from "./components/utility/Navbar.js";

function App() {
  const [cart, setCart] = useState(() => {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });
  //const [quantity, setQuantity] = useState(0);

  window.__testsCart = cart; // used for the tests in this project

  useEffect(() => {
    // to visualize the cart in the console every time in changes
    if (cart){
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    console.log(cart);
  }, [cart]);
  function handleProductAdd(newProduct){
    // check if item exists
    const existingProduct = cart.find((product) => product.id === newProduct.id)
    if(existingProduct){
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id){
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else{
      //product is new to the cart
      setCart([...cart, {...newProduct, quantity: 1,},]);
    }
  }

  function handleProductDelete(id){
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }
  return (
    <div style={{dispay: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
      <BrowserRouter>
        <Navbar cart={cart}/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products
            onProductAdd={handleProductAdd}
            onProductDelete={handleProductDelete}
            cart={cart}
            />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart}/>
          </Route>
          <Route path="/products/:id">
            <ProductDetails onProductAdd={handleProductAdd}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
