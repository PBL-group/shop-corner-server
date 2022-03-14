const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: {
        type: String,
        required: true,
        index: true
    },
    address: String,
    // wishlist: [{type: ObjectId, ref: "Product"}],
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)