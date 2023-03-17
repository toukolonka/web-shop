import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar';
const Home = React.lazy(() => import('./pages/Home'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Products = React.lazy(() => import('./pages/Products'));
const Product = React.lazy(() => import('./pages/Product'));
const Order = React.lazy(() => import('./pages/Order'));
const Orders = React.lazy(() => import('./pages/Orders'));

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
  if (!localStorage.getItem('user')) {
    let uuid = uuidv4();
    localStorage.setItem('user', uuid);
  }

  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <React.Suspense fallback={<div></div>}>
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
        </React.Suspense>
      </Router>
    </CartContextProvider>
  );
}

export default App;
