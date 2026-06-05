import mongoose from "mongoose";

const carSchema = mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  plateNumber: String,
  dailyRate: Number,
  status: Boolean,
});

const Car = mongoose.model("Car", carSchema);

export default Car