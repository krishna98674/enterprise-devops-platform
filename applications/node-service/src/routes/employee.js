const express = require("express");

const router = express.Router();

const db = require("../db");


// GET all employees

router.get("/", (req,res)=>{

    db.query(
        "SELECT * FROM employees",

        (err,result)=>{

            if(err){
                return res.status(500).json(err);
            }

            res.json(result);

        }
    );

});



// CREATE employee

router.post("/",(req,res)=>{


    const {name,email,department,salary}=req.body;


    db.query(

    "INSERT INTO employees(name,email,department,salary) VALUES(?,?,?,?)",

    [name,email,department,salary],

    (err,result)=>{


        if(err){
            return res.status(500).json(err);
        }


        res.json({
            message:"Employee created",
            id:result.insertId
        });


    });


});



// DELETE employee


router.delete("/:id",(req,res)=>{


const id=req.params.id;


db.query(

"DELETE FROM employees WHERE id=?",

[id],


(err,result)=>{


if(err){
return res.status(500).json(err);
}


res.json({
message:"Employee deleted"
});


});


});



module.exports = router;
