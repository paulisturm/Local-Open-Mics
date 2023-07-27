const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/project-3');

module.exports = mongoose;