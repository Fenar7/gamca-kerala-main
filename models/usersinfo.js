// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  country: {
    type: String,
    enum: ['2', '3', '4', '5'],
    required: true,
  },
  city: {
    type: String,
    enum: ['2', '3', '4', '5'],
    required: true,
  },
  countrytravellingto: {
    type: String,
    enum: ['2', '3', '4', '5'],
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    enum: ['2', '3', '4', '5'],
    required: true,
  },
  gender: {
    type: String,
    enum: ['2', '3', '4', '5'],
    required: true,
  },
  martialstatus: {
    type: String,
    enum: ['2', '3', '4', '5'],
    required: true,
  },
  passportnumber: {
    type: String,
    required: true,
  },
  confirmpassportnumber: {
    type: String,
    required: true,
  },
  passportissuedate: {
    type: String,
    required: true,
  },
  passportissueplace: {
    type: String,
    required: true,
  },
  passportexpirydate: {
    type: String,
    required: true,
  },
  visatype: {
    type: String,
    enum: ['2', '3', '4', '5'],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  nationalid: {
    type: String,
    required: true,
  },
  postappliedfor: {
    type: String,
    enum: ['2', '3', '4', '5'],
    required: true,
  },
  other: {
    type: String,
    required: true,
  },
  paymentstatus: {
    type: Boolean,
    default: false,
    required: true,
  }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
