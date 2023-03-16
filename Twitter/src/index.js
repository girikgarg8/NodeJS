const express = require('express');

const app = express();
const connect = require('./config/database')

const Tweet = require('./models/tweet')

const TweetRepository = require('./repository/tweet-repository');
const Comment=require('./models/comment')


app.listen(3000, async () => {
    console.log('Service started')
    await connect();
    console.log('Mongodb connected')
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.update('6411b2da15e169d91c441642',
    //     { content: 'Now I am updated' })


    // const tweet=await tweetRepo.create({content:'My tweet'});
    // console.log(tweet);
    // const comment=await Comment.create({content:'new comment'});
    // console.log(tweet);
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet)

    const tweet=await tweetRepo.getAll(2,10);
    // console.log(tweet[0].id)

    console.log(tweet[0].contentWithEmail)
})
