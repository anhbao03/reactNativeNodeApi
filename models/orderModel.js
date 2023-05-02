import mongoose from "mongoose";

const orderSchema = mongoose.Schema({

    uid: { type: String, required: true },
    customerName: { type: String, required: true },
    customerPhone: { type: Number, required: true },
    customerAddress: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    subTotal: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    tax: { type: Number, required: true },
    cartItems: { type: Array, required : true }

}, {
    //for date
    timestamps: true
});

const Order = mongoose.model("Order", orderSchema);
export default Order;