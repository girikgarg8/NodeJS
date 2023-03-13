const FlightService=require('../services/flight-service')

const flightService=new FlightService();

const create=async (req,res)=>{
    try{

        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        //I am using this syntax to avoid any bulky request body like if the user has sent unnecessary key value pairs which are not needed
        const flight=await flightService.createFlight(flightRequestData);

        return res.status(201).json({
            data:flight,
            success:true,
            err:{},
            message: 'Successfully created a flight'
        })
    }

    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Not able to create a flight',
            err:error
        })
    }
}

const get=async (req,res)=>{
    try{
        // console.log('In controllers ')
        // console.log(req.query)
        const response=await flightService.getFlightData(req.params.id);

        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flight'
        })
    }
    catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        })
    }
}
const getAll=async (req,res)=>{
    try{
        // console.log('In controllers ')
        // console.log(req.query)
        const response=await flightService.getAllFlightData(req.query);

        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        })
    }
    catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        })
    }
}

const update=async (req,res)=>{
    try{
        const response=await flightService.updateFlight(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message: 'Successfully updated the flight'
        })
    }
    catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the flight',
            err: error
        })
    }
}
module.exports={
    create,getAll,get,update
}