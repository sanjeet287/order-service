import OrderService from '../services/order.service.js';

class OrderController {
  async createOrder(req, res) {
    try {
      const { userId, productId, quantity } = req.body;
      const order = await OrderService.createOrder(userId, productId, quantity);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateOrderStatus(req, res) {
    try {
      const { orderId, status } = req.body;
      const updatedOrder = await OrderService.updateOrderStatus(orderId, status);
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getOrderById(req, res) {
    try {
      const { orderId } = req.params;
      const order = await OrderService.getOrderById(orderId);
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new OrderController();
