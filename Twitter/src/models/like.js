import mongoose from "mongoose";
import User from "./user.js";
const likeSchema=new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum: ['Tweet','Comment']
    },
    likeable:{
        type:mongoose.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    user:{
        type:mongoose.Types.ObjectId,
        req:'User',
        required:true
    }
},{timestamps:true})
    //in simple language, this database schema has two properties: one is what object is the comment/like on (out of enum: Tweet or Comment) and the second property commentable/likable denotes which particular ID of tweet or comment has been liked or commented on
const Like=mongoose.model('Like',likeSchema)

export default Like