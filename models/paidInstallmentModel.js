const mongoose = require('mongoose');

const PaidInstallment = new mongoose.Schema({
  paid: {
    type: Number,
    required: true,
    
  },
  date:{
    type: String,
    default: Date
  },
  id:{
    type:String,
    required:true
  },
  price:{
    type:Number
  },
  remaining:{
    type:Number
  }
  
})

module.exports = mongoose.model('installment_pays', PaidInstallment);