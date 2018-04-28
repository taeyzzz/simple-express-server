const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const UserSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Name field is required']
    },
    department: {
      type: String
    },
    age: {
      type: Number
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
