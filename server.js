import app from "./index.js";
import dotenv from "dotenv";
import connection from "./connection.js";



dotenv.config();

connection();







app.listen(3000, () => {
  console.log("Server running on port 3000");
});
