const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  name: String,
  price: Number,
});

productSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model('Product', productSchema);