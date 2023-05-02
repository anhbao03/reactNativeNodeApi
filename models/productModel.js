import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        category: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        isOff: {
            type: Boolean

        },
        offPercentage: {
            type: Number
        },
        image: {
            type: String,
            required: false,
        },
        imageList: {
            type: Array,
            required: false,
        },
        isAvailable: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

export default Product;