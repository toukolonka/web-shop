import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar';
const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
const Products = lazy(() => import('./pages/Products'));
const Product = lazy(() => import('./pages/Product'));
const Order = lazy(() => import('./pages/Order'));
const Orders = lazy(() => import('./pages/Orders'));

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
        <Suspense fallback={<div></div>}>
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
        </Suspense>
      </Router>
    </CartContextProvider>
  );
}

export default App;
