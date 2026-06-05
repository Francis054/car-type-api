import Car from "../models/Car.js";

export const createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    console.log(newCar);

    res.status(201).json({
      message: "created",
      data: newCar,
    });
  } catch (error) {
    console.log(error);
  }
};

export const allCars = async (req, res) => {
  try {
    const allCars = await Car.find();

    res.status(200).json({
      message: "success",
      data: allCars,
    });

    console.log(allCars);
  } catch (error) {
    console.log(error);
  }
};
