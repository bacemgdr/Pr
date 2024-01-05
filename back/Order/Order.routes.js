const express = require("express");

const router = express.Router();

const {getOrdersController ,getAllOrdersController , orderStatusController} 
= require("./order.controlleur");
const {isAdmin , requireSignIn} = require("../middlewares/authmidellware");

//orders
router.get("/",getOrdersController);

//all orders (admin)
router.get("/all-orders",requireSignIn,getAllOrdersController);

// order status update (admin)
router.put("/order-status/:orderId", requireSignIn,isAdmin,orderStatusController);