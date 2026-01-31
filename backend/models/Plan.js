import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['Veg', 'Non-Veg', 'Deluxe'], required: true },
  duration: { type: String, enum: ['Daily', 'Weekly', 'Monthly'], required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Plan', planSchema);
