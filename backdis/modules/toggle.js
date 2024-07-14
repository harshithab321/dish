const mongoose = require('mongoose');
const Dish = require('./dishesmodel'); // Adjust the path as needed

const dishtoggleSchema = new mongoose.Schema({
    ispublished: {
        type: Boolean,
        required: true,
    },
    dishId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId for referencing
        ref: 'Dish', // The name of the model being referenced
        required: true
    }
});

const Dishtoggle = mongoose.model('Dishtoggle', dishtoggleSchema);

module.exports = Dishtoggle;
