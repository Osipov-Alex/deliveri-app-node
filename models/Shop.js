import mongoose from 'mongoose';

const Shop = new mongoose.Schema({
  shopName: { type: String, required: true },
});

export default mongoose.model('Shop', Shop);
