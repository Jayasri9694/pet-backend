const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  isAdopted: { type: Boolean, default: false },
});

module.exports = mongoose.model('Pet', petSchema);
