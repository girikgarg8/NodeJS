import mongoose from "mongoose";

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max: [250,'Tweet cannot be more than 250 characters']
    },
    hashtags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hashtag'
        }
    ]
},{timestamps:true})

tweetSchema.virtual('contentWithEmail').get(function process() {
    return `${this.content} \n Created by: ${this.userEmail}`
})

tweetSchema.pre('save',function(next){
    this.content=this.content+ '....';
    next();
})

const Tweet=mongoose.model('Tweet',tweetSchema);

export default Tweet;