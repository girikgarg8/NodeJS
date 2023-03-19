import { TweetRepository, HashTagRepository } from "../repository/index.js";

class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashTagRepository();
    }
    async create(data){
        const content=data.content;
        let tags=content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts hashtags
        tags=tags.map((tag)=>tag.substring(1))
                .map((tag)=>tag.toLowerCase());
        console.log(tags)
        const tweet=await this.tweetRepository.create(data);
        let alreadyPresentTags=await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags=alreadyPresentTags.map((tag)=>tag.title)
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags=newTags.map(tag=>{
            return {title:tag,tweets:[tweet.id]}
        })
        await this.hashtagRepository.bulkCreate(newTags)
        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id)
            tag.save();
        })
        // [excited,coding,js,career]--> [{title:excited},{title:career}]
        //todo create hashtags and add here


        /*
        1.  Bulkcreate in mongoose
        2. Filter title of hashtag based on multiple tags (if the user passes 3 hashtags in the tweet, and 2 of these already exist in the database,I will only be creating that tag which doesn't exist in the database)
        3. How to add tweet ID inside all the hastags
        4. Continuation to second point, if a hashtag already exists, I need to add the tweet id to the array of tweets corresponding to that hashtag
        */
        return tweet;
    }

}
export default TweetService;

/*
This is my #first tweet. I am really #excited

*/