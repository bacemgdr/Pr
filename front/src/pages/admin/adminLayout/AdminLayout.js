import React from 'react';

import Footer from '../../../components/footer/footer';
import Sidebar from '../../../components/sidebar/sidebar';

const AdminLayout = ({ children }) => {
    return (
      <div>
     
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