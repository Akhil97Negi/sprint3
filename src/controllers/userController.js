

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';

//register
export const registerUser = async(req, res) =>{
    const {userName, email, password, roles} = req.body;

   try {
    const userExist = await User.findOne({email });
    if(userExist){
        return res.status(400).json({message : "User already exist try another email"})
    }

    const hashedPass = await bcrypt.hash(password , 10);
    const newUser = new User({userName, email, password : hashedPass, roles})
    await newUser.save();

    res.status(201).json({message : "Usser register Sucessfull"})
   } catch (error) {
     console.log(error);
     res.status(201).json({message : "Error registering user"})
   }
}

//login

export const loginUser = async (req, res) =>{
    const {email , password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message : "User not Found, please register"})
        }
     const isMatch = await bcrypt.compare(password , user.password);
     if(!isMatch){
        return res.status(400).json({message : "Invalid credential"})
     }
     
    const token = jwt.sign({id : user._id, roles : user.roles}, "akhil", {expiresIn : '1h'})
    res.json({
        message : "user logged in sucessfully",
        token, 
        user:{
            id : user._id,
            userName : user.userName,
            email : user.email,
            roles : user.roles
        }
    })

    } catch (error) {
        console.log(error);
        res.status(500).json({message : " Error logging in"})
    }
}

//delete user

export const deleteUser = async (req, res) =>{
    const {id} =req.params;
    try {
        const deletedUser  = await User.findOneAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({message : "user not found"})
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({message : "Error deleting user"})
    }
}