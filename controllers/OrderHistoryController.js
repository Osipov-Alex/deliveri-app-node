/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import OrderHistoryService from '../service/OrderHistoryService.js';
import UserService from '../service/UserService.js';

class OrderHistoryController {
  async create(req, res) {
    try {
      await UserService.create(req.body);
      await OrderHistoryService.create(req.body);
      res.status(201);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const order = await OrderHistoryService.getAll();
      return res.json(order);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const order = await OrderHistoryService.getOne(req.params.id);
      return res.json(order);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedOrder = await OrderHistoryService.update(req.body);
      return res.json(updatedOrder);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const order = await OrderHistoryService.delete(req.params.id);
      res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new OrderHistoryController();
