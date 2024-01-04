require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Import the cors module
const app = express();
const db = require('./db');
const PORT = process.env.PORT || 3000; // Set a default port if PORT is not defined in .env
const productRoutes = require('./Product/product.routes');


app.use(cookieParser());
app.use(cors()); // Use cors middleware

const userRoutes = require('./users/user.routes');



app.use(express.json());
app.use('/user', userRoutes);
app.use('/product', productRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
