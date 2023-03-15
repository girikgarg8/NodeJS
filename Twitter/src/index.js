const express = require('express');

const app = express();
const connect = require('./config/database')

const Tweet = require('./models/tweet')

const TweetRepository = require('./repository/tweet-repository');

app.listen(3000, async () => {
    console.log('Service started')
    await connect();
    console.log('Mongodb connected')
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.update('6411b2da15e169d91c441642',
    //     { content: 'Now I am updated' })

    const tweet=await tweetRepo.create({content:'My tweet'});
    console.log(tweet);
    tweet.comments.push({content:'first comment'});
    await tweet.save();
    console.log(tweet)
})