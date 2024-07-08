import { Router } from "express";
import auth from "../middlewares/authMiddleware.js";
import { createReview, deleteReview, getReviewByBook, updateReview } from "../controllers/reviewController.js";


const reviewRouter = Router();

//get all review for a book
reviewRouter.get('/book/:bookId' , auth, getReviewByBook)

//post review

reviewRouter.post('/' , auth, createReview);

//udate
reviewRouter.put('/:id' , auth, updateReview)

//delete

reviewRouter.delete('/:id' , auth, deleteReview)

export default reviewRouter;