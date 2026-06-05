import mongoose from "mongoose";

const connection = async () => {
    try {
         await mongoose.connect(
    process.env.MONGODB_URI
  );
  console.log('connected')
  
        
    } catch (error) {
        console.log('connection' + error)
    }
 
};

export default connection;
