
const roleAcess = (...roles) =>{
    return (req, res, next) =>{
        if(!req.user || !req.user.roles || !roles.includes(req.user.roles)){
            return res.status(403).json({message : "unauthorized user"})

        }
        next();
    }

}

export default roleAcess;