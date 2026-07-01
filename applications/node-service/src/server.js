const express = require("express");

const app = express();

app.use(express.json());


const employeeRoutes = require("./routes/employee");


app.use("/employees",employeeRoutes);

app.get("/version", (req, res) => {
    res.json({
        application: "Enterprise DevOps Platform",
        version: "2.0",
        deployedBy: "Jenkins",
        deployedAt: new Date(),
        author: "Krishna"
    });
});

app.listen(5000,()=>{

console.log("Server running on port 5000-build version 2");

});
