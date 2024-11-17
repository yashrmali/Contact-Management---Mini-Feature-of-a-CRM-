const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  company: { type: String },
  jobTitle: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
