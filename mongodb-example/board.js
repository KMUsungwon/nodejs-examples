const mongoose = require('mongoose');
const boardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50,
    },
    body: {
      type: String,
      required: true,
      maxlength: 200,
    },
});
module.exports = mongoose.model('Board', boardSchema);
