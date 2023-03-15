const mongoose=require('mongoose');

const tweetScehma=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String
    },
    comments:[
        {
            content : {
                type:String,
                required:true
            }
        }
    ]
},{timestamps:true})

const Tweet=mongoose.model('Tweet',tweetScehma);
module.exports=Tweet