import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  startDate: { type: Date, required: true },
  status: { type: String, enum: ['Active', 'Paused', 'Completed', 'Cancelled'], default: 'Active' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
