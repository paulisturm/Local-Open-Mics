const { Schema } = require('mongoose');

const micSchema = new Schema({
    venue: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    host: {
        type: String,
    },
    coverCharge: {
        type: Number,
    }

});

module.exports = micSchema;