import React from 'react';
import CartContextProvider from '../context/CartContext';
import NavBar from '@/components/NavBar';
import './globals.css';

export const metadata = {
  title: 'Next Preact',
  description: 'A simple web shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <CartContextProvider>
          <NavBar />
          <div className='mx-auto max-w-xl w-full my-2'>
            <div className='mx-2'>
              {children}
              <div id="portal"></div>
            </div>
          </div>
        </CartContextProvider>
      </body>
    </html>
  );
}
