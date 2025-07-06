import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
  await mongoose.connect(ENV.MONGO_URI);
  console.log('Connected to DB SUCCESSFULLY ✅');
  try {
  } catch (error) {
    console.log('Error connecting to MONGODB');
    process.exit(1);
  }
};
