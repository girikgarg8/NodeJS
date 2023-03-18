const express = require('express');

const app = express();
const connect = require('./config/database')

const Tweet = require('./models/tweet')

const HashTagRepository = require('./repository/hashtag-repository');


app.listen(3000, async () => {
    console.log('Service started')
    await connect();
    console.log('Mongodb connected')
    let repo=new HashTagRepository();
    const response=await repo.findByName(['Excited','Trend'])
    console.log(response)
}) 
