// @refresh reload
import { Suspense } from "solid-js";
import { isServer } from "solid-js/web";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

import NavBar from "./components/NavBar";
import { CartContextProvider } from "./context/CartContext";

import "./root.css";
export default function Root() {
  if (!isServer && !localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  return (
    <Html lang="en">
      <Head>
        <Title>Solid</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="A simple web shop" />
      </Head>
      <Body className="bg-slate-200">
        <Suspense>
          <CartContextProvider value={!isServer ? JSON.parse(localStorage.getItem('cart')) : []}>
            <NavBar />
            <ErrorBoundary>
                <div className='mx-auto max-w-xl w-full my-2'>
                  <div className='mx-2'>
                    <Routes>
                      <FileRoutes />
                    </Routes>
                  </div>
                </div>
            </ErrorBoundary>
          </CartContextProvider>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}