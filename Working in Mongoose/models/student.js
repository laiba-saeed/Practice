const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema({
    _Id: {
        type: Schema.Types.ObjectId
    },
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    verified: {
        type: Schema.Types.Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now()
    },
    updatedAt: {
        type: Schema.Types.Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Student", Student);