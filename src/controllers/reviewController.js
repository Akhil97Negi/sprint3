import Review from "../models/reviewModel.js";


//get all review for book

export const getReviewByBook = async (req, res) =>{
    const {bookId} = req.params;

    try {
        const reviews = await Review.find({book : bookId})
        res.json(reviews)
    } catch (error) {
        console.log("error finding review" , error);
        res.status.json({message : "Error fetching review"})

    }
}


//create new review

export const createReview = async (req, res) =>{
    const {book , customer, rating, comment} = req.body ;
    try {
        const newReview = new Review({book , customer, rating, comment})
        await newReview.save();
        res.status(201).json({message : "Review created sucessfull", review : newReview})
    } catch (error) {
        console.log("Error creating new review");
        res.status(500).json({message : "error creating new review"})
    }
}

//update existing review

export const updateReview = async (req, res) =>{
    const {id} = req.params ;
    const {rating, comment} = req.body

    try {
        const updatedReview = await Review.findByIdAndUpdate(id, {rating, comment}, {new : true})
        if(!updatedReview){
            return res.status(404).json({message : "Review Not Found"} )
        }
          res.json({message : "review updated sucessfully"})
  } catch (error) {
        console.log("Error updating review", error);
        res.status(500).json({message : "error updating review"})
    }
}


//deleting review


export const deleteReview = async (req, res) =>{
    const {id} = req.params ;
    try {
        const deletedReview = await Review.findByIdAndDelete(id)
        if(!deletedReview){
            return res.status(404).json({message : "Review Not Found"} )
        }
          res.json({message : "review deleted sucessfully"})
  } catch (error) {
        console.log("Error deleting review", error);
        res.status(500).json({message : "error deleting review"})
    }
}