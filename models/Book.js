const mongoose = require('mongoose');

const SignUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  cnic: {
    type: Number,
    required: true
  },
  address: {
    type: String
    
  },
  product: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
  installment_amount: {
    type: Number,
    required: true
  },
  total_installments: {
    type: Number,
    required: true
  },
  remaining:{
    type: Number,
  }
});

module.exports = mongoose.model('books', SignUpSchema);