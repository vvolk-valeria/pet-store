import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import {lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from '../pages/Cart/Cart'
import Catalog from '../pages/Catalog/Catalog'
import Favourites from '../pages/Favourites/Favourites'
import Error from '../components/Error/Error'
import Homepage from '../pages/Homepage/Homepage'
import ProductPage from '../pages/ProductPage/ProductPage'
import { Layout } from '../components/Layout/Layout'
import './App.module.scss'
import {PrivateRoute} from '../helpers/routs/PrivateRoute'
import AdminPage from '../pages/AdminPage/AdminPage';
import ContentRouter from '../components/AdminFolder/ContentFolder/ContentRouter';

const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const UserAccount = lazy(() => import('../components/UserAccount/UserAccount'));
const UserInfo = lazy(() => import('../components/UserInfo/UserInfo'));
const UserOrdersAll = lazy(() => import('../components/UserOrdersAll/UserOrdersAll'));
const UserOrderItem = lazy(() => import('../components/UserOrderItem/UserOrderItem'));
const UserReviews = lazy(() => import('../components/UserReviews/UserReviews'));
const ProductAbout = lazy(() => import('../components/ProductAbout/ProductAbout'));
const ProductInstructions = lazy(() => import('../components/ProductInstructions/ProductInstructions'));
const ProductReviews = lazy(() => import('../components/ProductReviews/ProductReviews'));
const Orders = lazy(() => import('../components/AdminFolder/Orders/Orders'));
const Users = lazy(() => import('../components/AdminFolder/Users/Users'));
const AdminProfile = lazy(() => import('../components/AdminFolder/AdminProfile/AdminProfile'));


const App = () => {

  return (
    <>
    <Router basename="pet-store">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/catalogue/:category" element={<Catalog />}>
          <Route path=":itemName"  element={<Catalog />}/>
          </Route>
          <Route path="/catalogue/products/:productId" element={<ProductPage />}>
            <Route path="about" element={<ProductAbout />}></Route>
            <Route path="instructions" element={<ProductInstructions />}></Route>
            <Route path="reviews" element={<ProductReviews />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/user" element={<PrivateRoute
              redirectTo="/"
              component={<UserPage />}
            />}>
            <Route path="account" element={<UserAccount />}></Route>
            <Route path="info" element={<UserInfo />}></Route>
            <Route path="orders" element={<UserOrdersAll />}></Route>
            <Route path="orders/:orderId" element={<UserOrderItem />}></Route>
            <Route path="reviews" element={<UserReviews />}></Route>
          </Route>
          
          <Route path="/*" element={<Error />} />
        </Route>
        <Route path="/admin" element={<PrivateRoute
            redirectTo="/"
            component={<AdminPage />}
          />}>
          <Route path="orders" element={<Orders />} ></Route>
          <Route path=":contentId" element={<ContentRouter />} ></Route>
          <Route path="users" element={<Users />} ></Route>
          <Route path="info" element={<AdminProfile />}></Route>
        </Route>
      </Routes>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App
