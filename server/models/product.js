var mongoose = require('mongoose');
// 

var productSchema = new mongoose.Schema({
    title:  { type: String, required: [true, 'Name is required']},
    price:  { type: Number, required: [true, 'Price is required']},
    description: { type: String, required: [true, 'description is required']},
    location: { type: String, required: [true, 'location is required']},
    image: { type: String },
    seller: { type: String, required: [true, 'seller is required']},
}, {timestamps: true });

var Product = mongoose.model('Product', productSchema) 
