import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    onModel:{
        type:String,
        required:true,
        enum: ['Tweet','Comment']
    },
    commentable:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        refPath: 'onModel'
    }
    //in simple language, this database schema has two properties: one is what object is the comment/like on (out of enum: Tweet or Comment) and the second property commentable/likable denotes which particular ID of tweet or comment has been liked or commented on
    ,comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;