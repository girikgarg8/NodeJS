import bodyParser from "body-parser";
import  express from "express";
import connect from "./config/database.js"
import apiRoutes from './routes/index.js'
import service from "./services/tweet-service.js"
import {TweetRepository, UserRepository} from './repository/index.js'
import LikeService from './services/like-service.js'
import passport from 'passport'
import {passportAuth} from './config/jwt-middleware.js'
const app = express();

app.listen(3000, async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(passport.initialize());
    passportAuth(passport);
    app.use('/api', apiRoutes);
    console.log('Service started')
    await connect();
    console.log('Mongodb connected')

    // const userRepo=new UserRepository();
    // const users=await userRepo.getAll();
    // const tweetRepo=new TweetRepository();
    // const tweets=await tweetRepo.getAll(0,10);
    // const likeService=new LikeService();
    // console.log(tweets,users)
    // await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id)
}) 
