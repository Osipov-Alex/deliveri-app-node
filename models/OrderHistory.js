import mongoose from 'mongoose';

const OrderHistory = new mongoose.Schema({
  // email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  // userId: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  products: [
    {
      productName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      image: { type: String, default: '' },
    },
  ],
});

export default mongoose.model('OrderHistory', OrderHistory);
