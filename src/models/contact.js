import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required']
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
},
  {
    timestamps: true
  }
)

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;