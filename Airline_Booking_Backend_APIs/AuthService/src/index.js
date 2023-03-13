const express=require('express')
const bodyParser=require('body-parser')
const apiRoutes=require('./routes/index')
const {PORT}=require('./config/serverConfig')
const UserRepository=require('./repository/user-repository')
const db=require('./models/index')
const {User,Role}=require('./models/index')
const UserService=require('./services/user-service')
const app=express();

const prepareAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',apiRoutes);

    const service=new UserService();
    app.listen(PORT,async ()=>{
        console.log(`Server started at port ${PORT} `);

        if (process.env.DB_SYNC){
            db.sequelize.sync({alter:true})
        }
        // const newToken=service.createToken({email:'girik@girik.com',id:1});
        // console.log("New token is ",newToken)
        // const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdpcmlrQGdpcmlrLmNvbSIsImlkIjoxLCJpYXQiOjE2Nzg1MzcxNTcsImV4cCI6MTY3ODUzNzE1OX0.iIxsVf1xrWTaptxa5P-WbNRzSUTRUwbijvtSikHKXj8'
        // console.log(service.verifyToken(token));

        // const u1=await User.findByPk(4);
        // const r1=await Role.findByPk(1);

        // const response=await r1.geUsers();
        // console.log(response);
        // //u1.addRole(r1);
        // const response=await u1.hasRole(r1);
        // console.log(response);
    })
}

prepareAndStartServer();