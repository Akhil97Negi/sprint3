import { Router } from "express";
import { createBook, deleteBook, getAllBooks, updateBook } from "../controllers/bookController.js";
import auth from "../middlewares/authMiddleware.js";
import roleAcess from "../middlewares/role.js";


const bookRouter = Router();

//get 
 bookRouter.get('/', getAllBooks);

 //create book

 bookRouter.post('/' , auth, roleAcess('admin'), createBook)

 //update

 bookRouter.put('/:id' , auth , roleAcess('admin'), updateBook)

//delete

bookRouter.delete('/:id' , auth, roleAcess('admin', deleteBook))

export default bookRouter;