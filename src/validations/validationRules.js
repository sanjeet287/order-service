import { body } from 'express-validator';

const createOrderValidation = [
  body('userId').isMongoId().withMessage('Invalid user ID'),
  body('productId').isMongoId().withMessage('Invalid product ID'),
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be a positive integer'),
];

const updateOrderStatusValidation = [
  body('orderId').isMongoId().withMessage('Invalid order ID'),
  body('status').isIn(['pending', 'shipped', 'delivered', 'cancelled']).withMessage('Invalid status'),
];

export { createOrderValidation, updateOrderStatusValidation };
