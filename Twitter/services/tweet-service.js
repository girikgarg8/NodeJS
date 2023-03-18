const {TweetRepository}=require('../repository/index')

class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
    }
    async create(data){
        const content=data.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts hashtags
        tags=tags.map((tag)=>tag.substring(1));
        console.log(tags)
        const tweet=await this.tweetRepository.create(data);
        //todo create hashtags and add here

        /*
        1.  Bulkcreate in mongoose
        2. Filter title of hashtag based on multiple tags (if the user passes 3 hashtags in the tweet, and 2 of these already exist in the database,I will only be creating that tag which doesn't exist in the database)
        3. How to add tweet ID inside all the hastags
        */
        return tweet;
    }

}

module.exports=TweetService;

/*
This is my #first tweet. I am really #excited

*/