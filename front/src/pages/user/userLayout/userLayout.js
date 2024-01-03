// UserLayout.js
import React from 'react';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Navbar from '../../../components/navBar/navBar';
import  { Toaster } from 'react-hot-toast';

const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      
      <main>
      <Toaster />
        {children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
