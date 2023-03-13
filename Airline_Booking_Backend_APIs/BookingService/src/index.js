const express=require('express');
const {PORT}=require('./config/serverConfig')
const bodyParser=require('body-parser')
const app=express();
const db=require('./models/index')
const apiRoutes=require('./routes/index')
const setupAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`);
    })

    app.use('/api',apiRoutes);
    if (process.env.DB_SYNC){
        db.sequelize.sync({alter:true})
    }
}

setupAndStartServer();