const express=require('express');
const cityController=require('../../controllers/city-controller');
const AirportController=require('../../controllers/airport-controller')
const flightController=require('../../controllers/flight-controller')
const {FlightMiddlewares}=require('../../middlewares/index')

const router=express.Router();

router.post('/city',cityController.create);

router.delete('/city/:id',cityController.destroy);

router.get('/city', cityController.getAll)

router.get('/city/:id',cityController.get);

router.patch('/city/:id',cityController.update);

router.post('/flights',
    FlightMiddlewares.validateCreateFlight,
    flightController.create);

router.get('/flights',flightController.getAll);

router.post('/airports',AirportController.create)

router.get('/flights/:id',flightController.get);

router.patch('/flights/:id',flightController.update);

module.exports=router;