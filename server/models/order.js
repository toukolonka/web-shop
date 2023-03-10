const { model, Schema } = require('mongoose');

const orderSchema = new Schema({
  userId: String,
  recipientInfo: {
    firstName: String,
    lastName: String,
    address: String,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: Number,
    },
  ],
  createdAt: Date,
});

orderSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model('Order', orderSchema);