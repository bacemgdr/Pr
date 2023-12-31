import AdminLayout from '../adminLayout/AdminLayout'

function ListProduct() {
    return (
      <AdminLayout>

      

      <div>
            <h2>Product List</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ANTA Blue Premium T-shirt</td>
                            <td>Fashion</td>
                            <td>Raymond</td>
                            <td>$21.00</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            <td>Ab Premium T-shirt</td>
                            <td>Women</td>
                            <td>AZER</td>
                            <td>$55.50</td>
                            <td>1</td>
                        </tr>
                        {/* ... Additional product rows ... */}
                    </tbody>
                </table>
            </div>
            <button>Add Product</button>
        </div>
      
      </AdminLayout>
    );
  }
  
  export default ListProduct;