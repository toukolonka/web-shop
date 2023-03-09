import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Items from './pages/Items';
import Item from './pages/Item';

function Wrapper(props) {
  return (
    <div className='mx-auto max-w-xl w-full my-2'>
      <div className='mx-2 sm:mx-0'>
        {props.component}
      </div>
    </div>
  );
}

function App() {
  console.log(localStorage.getItem('user'));

  if (!localStorage.getItem('user')) {
    let uuid = uuidv4();
    localStorage.setItem('user', uuid);
    console.log('UUID: ', uuid);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/items/:id" element={<Wrapper component={<Item />}/>} />
        <Route path="/items" element={<Wrapper component={<Items />}/>} />
        <Route path="/cart" element={<Wrapper component={<Cart />}/>} />
        <Route path="/" element={<Wrapper component={<Home />}/>} />
      </Routes>
    </Router>
  );
}

export default App;
