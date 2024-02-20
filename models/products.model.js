const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema(
    {
        productCode : {
            type: String,
            required: true
        },
        productName : {
            type: String,
            required: true
        },
        productImage : {
            type: String,
            required: false
        },
        productCategory : {
            type: String,
            required: true
        },
        productCost : {
            type: Number,
            required: true
        },
    },
    {
        timestamps : true
    }
);

const inventoryModel = mongoose.model('Inventory',inventorySchema);
module.exports = inventoryModel;