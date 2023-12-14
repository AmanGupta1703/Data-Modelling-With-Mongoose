import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    complete: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    subTodos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubTodo' }], // array of sub-todos...
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);

// when we'll save the name of `Todo` in the database
// it'll get converted to `todos` all in lowercase and to it's pural form.
