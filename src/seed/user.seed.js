import mongoose from 'mongoose';
import User from '../models/User.model.js';
import { env } from '../config/env.js';

const seedUser = async () => {
  await mongoose.connect(env.MONGO_URI);

  await User.create({
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123'
  });

  console.log('Test user created');
  process.exit();
};

seedUser();