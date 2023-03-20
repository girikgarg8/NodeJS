import bodyParser from "body-parser";
import  express from "express";
import connect from "./config/database.js"
import apiRoutes from './routes/index.js'
import service from "./services/tweet-service.js"
const app = express();

app.listen(3000, async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api', apiRoutes);
    console.log('Service started')
    await connect();
    console.log('Mongodb connected')
}) 
