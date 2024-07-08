import Order from "../models/orderModel.js";


//order by specific user

export const getOrderByUser = async (req, res) =>{
    const {customerId} = req.params;

    try {
        const orders = await Order.find({customer : customerId}).populate('books')
        res.json(orders);
    } catch (error) {
        
        console.log("error fetching order", error);
        res.status(500).json({message : "Error fetching order"})
    }
}

//create a new order

export const createOrder = async (req, res) =>{
    const {customer, totalAmount, books}= req.body;
    try {
        const newOrder = new Order({customer, totalAmount, books})
        await newOrder.save()
    } catch (error) {
        console.log("error creating new order");
        res.status(500).json({message : "Error creating new order"})
    }
}

//updating an existing order

export const updateOrder = async (req, res)=>{
    const {id} = req.params;

    const {totalAmount, books} = req.body;

    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, {totalAmount, books}, {new : true})

        if(!updateOrder){
            return res.status(404).json({message : "order not found"})
        }
        res.json({message : "Order created sucessfull ",  updateOrder})
    } catch (error) {
        console.log("eroor updating order" , error);
        res.status(500).json({message :"Error updatinf order"})
    }
}


//delete order
export const deleteOrder = async (req, res)=>{
    const {id} = req.params;

    // const {totalAmount, books} = req.body;

    try {
        const deleteOrder = await Order.findByIdAndDelete(id)

        if(!deleteOrder){
            return res.status(404).json({message : "order not found"})
        }
        res.json({message : "Order deleted sucessfull "})
    } catch (error) {
        console.log("eroor updating order" , error);
        res.status(500).json({message :"Error updatinf order"})
    }
}

