import Order from "../models/orderModel.js";

export const getOrderController = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const addOrderController = async (req, res) => {
    try {
        const order = await Order.create(req.body)
        res.status(200).json(order);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}