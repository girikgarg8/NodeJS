const {Flights}=require ('../models/index')
const {Op}=require('sequelize');
class FlightRepository{

    #createFilter(data){
        if (data.arrivalAirportId){
            filter.arrrivalAirportId = data.arrivalAirportId
        }
        if (data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }

        let priceFilter=[];
         

        if (data.minPrice && data.maxPrice){
            Object.assign(filter,{
                [Op.and]:[
                    {price: {[Op.lte]:data.maxPrice}},
                    {price: {[Op.gte]:data.minPrice}}
                ]
            })
        }
        if (data.minPrice){
            priceFilter.push({price:{[Op.gte]:data.minPrice}})
        }

        if (data.maxPrice){
            priceFilter.push({ price: { [Op.lte]: data.maxPrice } })
        }

        Object.assign(filter,{[Op.and]:priceFilter});
        return filter;
    }
    async createFlight(data){
        try{
            const flight=await Flights.create(data);
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the repository layer")
            throw {error}
        }
    }

    async updateFlight(flightId,data){
        try{
            await Flights.update(data,{
                where:{
                    id:flightId
                }
            });
            return true;
        }
        catch(error){
            console.log("Something went wrong in the repository layer")
            throw {error}
        }
    }

    async getFlight(flightId){
        try{
            const flight = await Flights.findByPk(flightId);
            return flight; 
        }
        catch (error) {
            console.log("Something went wrong in the repository layer")
            throw { error }
        }
    }

    async getAllFlights(filter){
        //the logic for getting all flights can be quite complex, because I may need to sort according to price or duration of flight etc., so I will use a private class feature for implementing the filters, private class features are prefixed with '#' 
        try{

            const filterObject=this.#createFilter(filter);
            const flight=await Flights.findAll({
                where:filterObject
            });
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error}
        }
    }
}

/*

where:{
    arrivalAirportId:2,
    departureAirportIdL4,
    price:{[Op.gte]:4000} this is the object that is passed to the Flights.findAll() function, I referred the documentation for this
}


*/
module.exports=FlightRepository;