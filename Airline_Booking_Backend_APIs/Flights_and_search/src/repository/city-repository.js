const {City}=require ('../models/index')
const {Op}=require('sequelize')
class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer")
            throw {error}
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId //where will search for the location in the objects array
                }
            })
        }
        catch(error){
            console.log("Something went wrong in the repository layer")
            throw {error}
        }
    }

    async updateCity(cityId,data){
        try{

            //the below approach also works but will not return updated object
            
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            })
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer")
            throw { error }
        }
    }

    async getAllCities(filter){
        if (filter.name){
            const cities=await City.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name
                    }
                }
            })
        }
        try{
            const cities=await City.findAll();
            return cities;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error}
        }
    }
    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId); //find by primary key
            return city;
        }
        catch(error){
            console.log ("Something went wrong in the repository layer")
            throw {error}
        }
    }
}

module.exports=CityRepository;