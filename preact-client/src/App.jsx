import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Products from './pages/Products';
import Product from './pages/Product';
import Order from './pages/Order';
import Orders from './pages/Orders';

function Wrapper(props) {
  return (
    <div className='mx-auto max-w-xl w-full my-2'>
      <div className='mx-2'>
        {props.component}
      </div>
    </div>
  );
}

function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/products/:id">
            <Wrapper component={<Product />} />
          </Route>
          <Route path="/products">
            <Wrapper component={<Products />} />
          </Route>
          <Route path="/cart">
            <Wrapper component={<Cart />} />
          </Route>
          <Route path="/orders/:id">
            <Wrapper component={<Order />} />
          </Route>
          <Route path="/orders">
            <Wrapper component={<Orders />} />
          </Route>
          <Route path="/">
            <Wrapper component={<Home />} />
          </Route>
        </Switch>
      </Router>
    </CartContextProvider>
  );
}

export default App;
