import AdminLayout from '../adminLayout/AdminLayout'

function ListOrder() {
    return (
      <AdminLayout>

<div>
            <h2> List Order</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Num Order</th>
                            <th>Nom Custemor</th>
                            <th>Date</th>
                            <th>Price</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> #001</td>
                            <td>Alex</td>
                            <td> 12/12/2000</td>
                            <td>$21.00</td>
                            
                        </tr>
                        <tr>
                            <td>#002</td>
                            <td>Emily</td>
                            <td>10/02/2001</td>
                            <td>$55.50</td>
                           
                        </tr>
                        {/* ... Additional product rows ... */}
                    </tbody>
                </table>
            </div>
        
        </div>
      
      </AdminLayout>
    );
  }
  
  export default ListOrder;