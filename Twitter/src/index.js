import  express from "express";
import connect from "./config/database.js"
import apiRoutes from './routes/index.js'
const app = express();

app.use('/api',apiRoutes);

import service from "./services/tweet-service.js"
app.listen(3000, async () => {
    console.log('Service started')
    await connect();
    console.log('Mongodb connected')
    let ser = new service();
    await ser.create({ content: 'Does the new #CodE #Work ?' })
}) 
