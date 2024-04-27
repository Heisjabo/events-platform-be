import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
        },
        location: {
            type: String,
            required: true,
        },
        tickets_number: {
            type: Number,
        },
        price: {
            type: Number,
        },
        time: {
            type: String,
        },
        image: {
            type: String,
        },
        bookings: [{
            type: mongoose.Schema.ObjectId,
            ref: "bookings",
        }],
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: "users",
            required: true,
        },
    },
    { timestamps: true }
);

const Event = mongoose.model("Events", eventSchema);

export default Event;