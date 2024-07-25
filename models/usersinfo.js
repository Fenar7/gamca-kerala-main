// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  countrytravellingto: {
    type: String,
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
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  martialstatus: {
    type: String,
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
