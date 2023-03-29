import passport from "passport";

export const authenticate=(req,res,next)=>{
    passport.authenticate('jwt',(err,user)=>{
        if (err) next(err);
        if (!user){
            return res.status(401).json({
                message: 'Unauthorized access, no token found'
            })
        }
        req.user=user; //attaching the user object to the request body, so that in login API, I don't need to pass the user ID in the params, t will be attached from the JSON web token after authentication
        next();
    })(req,res,next);
}