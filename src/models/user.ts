import mongoose from "mongoose";

export interface UserType {
    name: string,
    email: string,
    role?: string,
    password: string,
    profileImage?: string
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: false,
        default: 'user',
        enum: ['user', 'admin']
    },
    profileImage: {
        type: String,
        required: false,
        default: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema);

export default User;