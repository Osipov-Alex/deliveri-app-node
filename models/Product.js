import mongoose from 'mongoose';

const Product = new mongoose.Schema({
  productName: { type: String, required: true },
  shop: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, default: '' },
});

export default mongoose.model('Product', Product);
