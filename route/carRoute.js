import express from 'express'
import * as carController from '../controllers/carController.js'



const carRoute = express.Router();

carRoute.get('/', carController.allCars);
carRoute.post('/', carController.createCar);


export default carRoute