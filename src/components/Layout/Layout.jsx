import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import  Loader  from '../Loader/Loader';
import Header from '../Header/Header'
import Footer from '../../pages/footer/footer'

export const Layout = () => {
  return (
    <>
       <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};