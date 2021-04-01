const mongoose = require('mongoose');
const db = require('./index');

const schema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
});

const Names = mongoose.model('Users', schema);

module.exports = Names;
