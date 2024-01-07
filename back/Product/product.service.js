const Product =  require('./product.model');

const create = async(data) => {

    try { 
        // console.log('service',data.productImg);
        const newProduct = new Product(data);

        const savedProduct = await newProduct.save();
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa",savedProduct);
        return savedProduct;
    } catch (error) {
        throw error;
    }
};


const getAll = async () => {         // Get all Product
    try {
        const Products = await Product.find({});
        return Products;
    } catch (error) {
        throw error;
    }
};

const getByTitle = async (productTitle) => {  // Get Product by title 
    try {
        const Product = await User.findById(productTitle);
        return Product;
    } catch (error) {
        throw error;
    }
};

const getByCategorie = async (productCategorie) => {  // Get Product by categorie
    try {
        const Product = await User.findById(productCategorie);
        return Product;
    } catch (error) {
        throw error;
    }
};


const updateById = async (id, newData) => {   // Update Product by ID
    try {
        const updatedProduct = 
        await Product.findByIdAndUpdate(id, newData, { new: true });
        return updatedProduct;
    } catch (error) {
        throw error;
    }
};
const deleteById = async (id) => {  // Delete Product by ID
    try {
        const deletedProduct = await User.findByIdAndDelete(id);
        return deletedProduct;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    create,
    getAll ,
    getByTitle,
    getByCategorie,
    updateById,
    deleteById,
};