import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customer : {type :mongoose.Schema.Types.ObjectId, ref : 'User', required : true},
    orderDate : {type : Date , default : Date.now},
    totalAmount : {type : Number , required :true},
    books : [{ type : mongoose.Schema.Types.ObjectId, ref : "Book"}]
})

export default mongoose.model('Order', orderSchema);
