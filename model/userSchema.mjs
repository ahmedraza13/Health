import mongoose from "mongoose";

const schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    accountType: {
        type: String,
        required: true,
    },
    isDoctor: {
        type: Boolean,
        default: false
    },
    notification: {
        type: Array,
        default: []
    },
    seenotification: {
        type: Array,
        default: []
    }
})

const UserModel = mongoose.model("users", schema)

export default UserModel