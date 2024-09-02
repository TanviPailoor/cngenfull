import mongoose from 'mongoose';

const taskschema = new mongoose.Schema(
  {
    employee_id: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Rejected'],
      default: 'Pending',
    },
    carwash: {
      type: String,
      enum: ['exterior', 'interior', 'both'],
      required: true,
    },
    assignTime: {
      type: 'String',
      required: true,
    },
  },
  { timestamps: true }
);

const taskmodel = mongoose.model('taskmodel', taskschema);
export default taskmodel;
