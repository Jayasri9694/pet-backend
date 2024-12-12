const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    temperament: { type: String, required: true },
    specialNeeds: { type: String, default: 'None' },
    adopted: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false } // Optional
});

module.exports = mongoose.model('Pet', petSchema);
