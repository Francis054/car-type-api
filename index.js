// const fs = require('fs')
import express from "express";
import carRoute from "./route/carRoute.js";
const app = express();
app.use(express.json());
app.use((req,res,next) =>{
    console.log(req.path)
    next()
})

app.use("/api/v1/cars", carRoute);

export default app;
