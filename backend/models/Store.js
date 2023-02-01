const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
    // name: String, 
    // completed: Boolean
    itemName: {
        type: String,
        required: [true, 'Must provide item name.'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters.']
    },
    brandName: {
        type: String,
        required: [true, 'Must provide brand name.'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters.']
    },
    itemDesc: {
        type: String,
        required: [true, 'Must provide a description'],
        trim: true,
        maxlength: [100, 'Description cannot exceed 100 words.']
    },
    brandDesc: {
        type: String,
        required: [true, 'Must provide a description'],
        trim: true,
        maxlength: [100, 'Description cannot exceed 100 words.']
    },
    price: {
        type: Number,
        required: [true, 'Must provide MRP.'],
        trim: true
    }
})

module.exports = mongoose.model('Store', StoreSchema) // model looks for name and the schema