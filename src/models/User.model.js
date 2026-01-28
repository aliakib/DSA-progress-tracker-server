import mongoose from 'mongoose';
import { hashPassword, comparePassword } from '../utils/hash.util.js';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false
    },

    progress: {
      type: Map,
      of: Boolean,
      default: {}
    }
  },
  {
    timestamps: true
  }
);

// Hash password before saving
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return

  this.password = await hashPassword(this.password);
  // next();
});

// Password comparison
userSchema.methods.comparePassword = async function (plainPassword) {
  return comparePassword(plainPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
