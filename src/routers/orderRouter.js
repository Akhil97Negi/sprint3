import { Router } from "express";
import { createOrder, deleteOrder, getOrderByUser, updateOrder } from "../controllers/orderController.js";
import auth from "../middlewares/authMiddleware.js";

const orderRouter = Router();

//get order
orderRouter.get('/customer/:customerId' ,auth , getOrderByUser);

//post order

orderRouter.post('/' ,auth , createOrder)

//updateOreder

orderRouter.put('/:id',auth , updateOrder)

//delete

orderRouter.delete('/id', auth, deleteOrder)

export default orderRouter;