import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    productImage:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default:0
    },
    price:{
        type: Number,
        required: true,
        default:0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
},{timestamps:true});

export const Product= mongoose.model('Product',productSchema);