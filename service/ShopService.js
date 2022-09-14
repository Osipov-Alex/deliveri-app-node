/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/extensions
import Shop from '../models/Shop.js';

class ShopService {
  async create(shop) {
    const createShop = await Shop.create(shop);
    return createShop;
  }

  async getAll() {
    const shop = await Shop.find();
    return shop;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Don't haven't id");
    }
    const shop = await Shop.findById(id);
    return shop;
  }

  async update(shop) {
    if (!shop._id) {
      throw new Error("Id don't found");
    }
    const updatedShop = await Shop.findByIdAndUpdate(shop._id, shop, {
      new: true,
    });
    return updatedShop;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id don't found");
    }
    const shop = await Shop.findByIdAndDelete(id);
    return shop;
  }
}

export default new ShopService();
