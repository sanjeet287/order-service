import OrderRepository from '../repositories/order.repository.js';

class OrderService {
  async createOrder(userId, productId, quantity) {   
    return await OrderRepository.createOrder(userId, productId, quantity);
  }

  async updateOrderStatus(orderId, status) {    
    return await OrderRepository.updateOrderStatus(orderId, status);
  }

  async getOrderById(orderId) {    
    return await OrderRepository.getOrderById(orderId);
  }

  async getAllOrders() {    
    return await OrderRepository.getAllOrders();
  }
}

export default new OrderService();
