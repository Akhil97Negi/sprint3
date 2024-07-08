import mongoose from 'mongoose'

 const reviewSchema = new mongoose.Schema({
    book : { type : mongoose.Schema.Types.ObjectId, ref : 'Book', required : true},
    customer : {type : mongoose.Schema.Types.ObjectId, ref :'user', required : true},
    rating : {type : Number , required: true},
    comment : {type : String},
    createdAt : {type : Date , default : Date.now}
 })

 export default mongoose.model('Review', reviewSchema)