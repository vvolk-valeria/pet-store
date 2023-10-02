// src/App.js
import React from 'react'
import {lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from '../pages/Cart/Cart'
import Catalog from '../pages/Catalog'
import Favourites from '../pages/Favourites/Favourites'
import Error from '../components/Error/Error'
import Homepage from '../pages/homepage/Homepage'
import { Layout } from '../components/Layout/Layout'
import './App.module.scss'
import {PrivateRoute} from '../helpers/routs/PrivateRoute'

const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const UserAccount = lazy(() => import('../components/UserAccount/UserAccount'));
const UserInfo = lazy(() => import('../components/UserInfo/UserInfo'));
const UserOrdersAll = lazy(() => import('../components/UserOrdersAll/UserOrdersAll'));
const UserOrderItem = lazy(() => import('../components/UserOrderItem/UserOrderItem'));
const UserReviews = lazy(() => import('../components/UserReviews/UserReviews'));


const App = () => {
  // const cards = useSelector((state) => state.cards.cards) // Отримати дані карток товарів з Redux store

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/catalogue" element={<Catalog />} />
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
      </Routes>
    </Router>
  )
}

export default App
