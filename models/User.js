const mongoose = require("mongoose")
const { Schema, model } = mongoose
const { ObjectId } = Schema

const UserSchema = new Schema({
    name: String,
    username: String,
    email: {
        type: String,
        required: true,
        index: true
    },
    address: String,
    wishlist: [{type: ObjectId, ref: "Product"}],
}, {timestamps: true})

module.exports = model('User', UserSchema)