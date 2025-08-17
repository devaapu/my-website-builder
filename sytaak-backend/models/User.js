import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, sparse: true },
  passwordHash: String,
  provider: { type: String, enum: ['local','google','github'], default: 'local' },
  oauthId: String,
  stripeCustomerId: String,
  plan: { type: String, default: 'trial' }
}, { timestamps: true });

export default mongoose.model('User', userSchema);