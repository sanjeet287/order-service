import Order from '../models/order.schema.js';

class OrderRepository {
  async createOrder(userId, productId, quantity) {
    const order = new Order({ userId, productId, quantity });
    return await order.save();
  }

  async updateOrderStatus(orderId, status) {
    return await Order.findByIdAndUpdate(orderId, { status }, { new: true });
  }

  async getOrderById(orderId) {
    return await Order.findById(orderId);
  }

  async getAllOrders() {
    return await Order.find();
  }
}

export default new OrderRepository();
