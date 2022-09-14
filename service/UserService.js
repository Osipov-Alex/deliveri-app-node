/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/extensions
import User from '../models/User.js';

class UserService {
  async create(user) {
    const createUser = await User.create(user);
    return createUser;
  }

  async getAll() {
    const user = await User.find();
    return user;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Don't haven't id");
    }
    const user = await User.findById(id);
    return user;
  }

  async update(user) {
    if (!user._id) {
      throw new Error("Id don't found");
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id don't found");
    }
    const user = await User.findByIdAndDelete(id);
    return user;
  }
}

export default new UserService();
