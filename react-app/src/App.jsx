import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div>
        <Link to="/" className='pr-4'>Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
