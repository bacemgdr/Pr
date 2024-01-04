const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
      productTitle: {
        type: String,
       
        unique: true,
      },
      productDescription: {
        type: String,
        
        
      },
      productPrice: {
        type: Number,
        
      },
      productImg: {
        type: String,
      
      },

      productCategorie:{
        type: String,
       
      },
      productRating: {
        type: Number,
        
      },
    
    }
   
  );
  

  const Product = mongoose.model("Product",   ProductSchema);
module.exports = Product;
