const express = require("express");

const router = express.Router();

const db = require("../db");

// GET all employees
router.get("/", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM employees");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// CREATE employee
router.post("/", async (req, res) => {
    try {
        const { name, email, department, salary } = req.body;

        const [result] = await db.query(
            "INSERT INTO employees(name,email,department,salary) VALUES(?,?,?,?)",
            [name, email, department, salary]
        );

        res.json({
            message: "Employee created",
            id: result.insertId
        });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DELETE employee
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        await db.query(
            "DELETE FROM employees WHERE id=?",
            [id]
        );

        res.json({
            message: "Employee deleted"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// UPDATE employee
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const { name, email, department, salary } = req.body;

        await db.query(
            "UPDATE employees SET name=?, email=?, department=?, salary=? WHERE id=?",
            [name, email, department, salary, id]
        );

        res.json({
            message: "Employee updated"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
