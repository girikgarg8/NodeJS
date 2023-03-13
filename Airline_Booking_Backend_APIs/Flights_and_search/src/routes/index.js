const express=require('express');

const router=express.Router(); //creating a router object which will later be mounted on the app object

const v1ApiRoutes=require('./v1'); 


router.use('/v1',v1ApiRoutes); //means if the prefix of the route is /v1, please use the v1APIRoutes

module.exports=router;