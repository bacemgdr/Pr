import React from 'react';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Sidebar from '../../../components/sidebar/sidebar';

const AdminLayout = ({ children }) => {
    return (
      <div>
        <Header />
        <div style={{ display: 'flex'}}>

          <Sidebar />
          <div  className="child-contain"style={{ flex: 1 , position: 'center' }}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default AdminLayout;