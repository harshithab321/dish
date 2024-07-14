// dishModel.js

const mongoose = require('mongoose');
const Toggle=require('../modules/toggle');

// Define the schema for a dish
const dishSchema = new mongoose.Schema({
    dishId: {
        type: String,
        required: true,
        unique: true
    },
    dishname:{
        type: String,
        required:true,
        unique:true
    },
   
    imageUrl: {
        type: String,
        required: true
    },
    // You can add more fields as needed
});

// Create a model based on the schema
const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
