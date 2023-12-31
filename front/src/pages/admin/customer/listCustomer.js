import AdminLayout from '../adminLayout/AdminLayout'

function ListCustomer() {
    return (
      <AdminLayout>

<div>
            <h2>Product Customer</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Adress</th>
                            <th> Num Tel </th>
                            <th>Other</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alex</td>
                            <td>Paris</td>
                            <td>2555214</td>
                            <td>aaaaa</td>
                            
                        </tr>
                        <tr>
                            <td>Emily</td>
                            <td>los Angelos</td>
                            <td>5748582</td>
                            <td>bbbbb</td>
                            
                        </tr>
                        {/* ... Additional product rows ... */}
                    </tbody>
                </table>
            </div>
            
        </div>
      
      </AdminLayout>
    );
  }
  
  export default ListCustomer;