/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/extensions
import OrderHistory from '../models/OrderHistory.js';

class OrderHistoryService {
  async create(order) {
    const createOrder = await OrderHistory.create(order);
    return createOrder;
  }

  async getAll() {
    const order = await OrderHistory.find();
    return order;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Don't haven't id");
    }
    const order = await OrderHistory.findById(id);
    return order;
  }

  async update(order) {
    if (!order._id) {
      throw new Error("Id don't found");
    }
    // eslint-disable-next-line prettier/prettier
    const updatedOrder = await OrderHistory.findByIdAndUpdate(order._id, order, { new: true });
    return updatedOrder;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id don't found");
    }
    const order = await OrderHistory.findByIdAndDelete(id);
    return order;
  }
}

export default new OrderHistoryService();
