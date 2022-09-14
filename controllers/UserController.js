/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import UserService from '../service/UserService.js';

class UserController {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      res.json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const user = await UserService.getAll();
      return res.json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const user = await UserService.getOne(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedUser = await UserService.update(req.body);
      return res.json(updatedUser);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const user = await UserService.delete(req.params.id);
      res.json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

export default new UserController();
