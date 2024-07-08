import jwt from 'jsonwebtoken'


const auth = (req, res, next) =>{
    const token = req.header("authorization")?.replace('Bearer ' , '');


    if(!token){
        return res.status(401).json({message : "Authorization token required"})
    }

    try {
        const decoded = jwt.verify(token , "akhil")
        req.user = decoded
        next();
    } catch (error) {
        console.log("Error authenticating user" , error);
        res.status(401).json({message : "invalid token"})
    }
}

export default auth