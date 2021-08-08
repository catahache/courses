const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } //unable other properties
);

// if u name it apple it will go and find in the collection apples
// const Item = mongoose.model('Apple', itemSchema)
const Item = mongoose.model('Item', itemSchema)
module.exports = Item;