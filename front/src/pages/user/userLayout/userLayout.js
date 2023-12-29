// UserLayout.js
import React from 'react';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Navbar from '../../../components/navBar/navBar';

const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
