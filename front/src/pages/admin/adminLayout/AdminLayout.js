import React from 'react';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Sidebar from '../../../components/sidebar/sidebar';

const AdminLayout = ({ children }) => {
    return (
      <div>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default AdminLayout;