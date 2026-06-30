const express = require("express");

const app = express();

app.use(express.json());


const employeeRoutes = require("./routes/employee");


app.use("/employees",employeeRoutes);



app.listen(5000,()=>{

console.log("Server running on port 5000");

});
