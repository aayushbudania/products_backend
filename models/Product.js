import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
        },
        price: {
                type: Number,
                required: true,
        },
        featured: {
                type: Boolean,
                default: false,
        },
        rating: {
                type: Number,
        },
        company: {
                type: String,
                required: true
        },
        createdAt: {
            type: Date,
            required: true,
        }
        },
        {
                timestamps: true,
        })

export default mongoose.model("Product",ProductSchema);