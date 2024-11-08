import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import ProductDetailes from './components/ProductDetailes/ProductDetailes.jsx';
import Cart from './components/Cart/Cart.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AboutUs from './components/About/AboutUs.jsx';
import Product from './components/Product/Product.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'allproducts/:product_id',
        element: <ProductDetailes></ProductDetailes>,
        loader: () => fetch('../gadgets.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        loader: () => fetch('/gadgets.json'),

      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/cart/:cartId',
        element: <Cart></Cart>,
        loader: () => fetch('/gadgets.json')
      },
      {

      },
      {
        path: '/product/:categoty',
        element: <Product></Product>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
