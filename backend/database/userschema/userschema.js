import mongoose, { Types } from 'mongoose';
const userschema = new mongoose.Schema(
  {
    isAdmin: { type: Boolean, default: false },
    serviceType: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    referrels: {
      type: String,
    },
    recentCarwash: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'taskmodel' }],
    },
  },
  { timestamps: true }
);

const user = mongoose.model('user', userschema);
export default user;
