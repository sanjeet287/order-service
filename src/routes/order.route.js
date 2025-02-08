import express from 'express';
import OrderController from '../controllers/order.controller.js';
import validateRequest from '../middlewares/validateRequest.js';
import { createOrderValidation, updateOrderStatusValidation } from '../validations/validationRules.js';

const orderRouter = express.Router();

orderRouter.post('/orders', createOrderValidation, validateRequest, OrderController.createOrder);
orderRouter.put('/orders/status', updateOrderStatusValidation, validateRequest, OrderController.updateOrderStatus);
orderRouter.get('/orders/:orderId', OrderController.getOrderById);
orderRouter.get('/orders', OrderController.getAllOrders);

export default orderRouter;
 
