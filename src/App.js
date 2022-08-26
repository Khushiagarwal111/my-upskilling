import { commerce } from './lib/commerce';
import React, { useState, useEffect } from 'react';
import { Cart,  Navbar, Products } from './components';
import Checkout from './components/CheckoutForm/Checkout/Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  // const[mobileOpen, setMobileOpen] = useState({})
  const[order, setOrder]= useState({})
  const[errorMessage, setErrorMessage] = useState('')

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  // commerce.products.list().then((product) => console.log(product));
  // const handleAddToCart = async (productId, quantity) => {
  //   const item = await commerce.cart.add(productId, quantity);
  //   setCart(item.cart);
  // };
  // const handleUpdateCartQty = async (lineItemId, quantity) => {
  //   const response = await commerce.cart.update(lineItemId, { quantity });
  //   setCart(response.cart);
  // };
  // const handleRemoveFromCart = async (productId) => {
  //   const response  = await commerce.cart.remove(productId);
  //   setCart(response.cart);
  // };
  // const handleEmptyCart = async () => {
  //   const response  = await commerce.cart.empty();
  //   setCart(response.cart);
  // };
  
  const handleAddToCart = async(productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const handleUpdateCartQty = async(lineItemId, quantity) => {
    const {cart} = await commerce.cart.update(lineItemId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCart = async(productId) => {
    const {cart}   = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const response  = await commerce.cart.empty();
    setCart(response.cart);
  };
  
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };
  
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  // console.log(cart);

  // const handleDrawerToggle = () => setMobileOpen(!mobileOpen);


  return (
    <Router>
      <>
      <CssBaseline/>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/cart" >
            <Cart 
            cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
            </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
