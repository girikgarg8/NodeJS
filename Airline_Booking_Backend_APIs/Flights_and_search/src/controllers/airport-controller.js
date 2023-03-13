const {AirportService}=require('../services/index')

const airportService=new AirportService();

const create=async (req,res)=>{
    try{
        const response=await airportService.create(req.body);
        return res.status(200).json({
            message: 'Successfully created the airport',
            err:{},
            data:response,
            success:true
        })
    }
    catch(error){
        console.log(err);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:  'Cannot create a new airport'
        })
    }
}

module.exports={
    create
}