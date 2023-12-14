// Step 1: Import mongoose module
import mongoose from 'mongoose';

// Step 2: create a schema
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const user = mongoose.model('User', userSchema);
