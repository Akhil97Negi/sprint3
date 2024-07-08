import express  from "express";
import { deleteUser, loginUser, registerUser } from "../controllers/userController.js";
import auth from "../middlewares/authMiddleware.js";
import roleAcess from "../middlewares/role.js";



const userRouter = express.Router();

//register
userRouter.post('/register', registerUser);

//login
userRouter.post('/login', loginUser)

//delete
userRouter.delete('/:id' , auth , roleAcess('admin', deleteUser))

export default userRouter