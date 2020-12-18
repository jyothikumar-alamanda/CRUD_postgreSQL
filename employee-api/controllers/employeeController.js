const express = require("express");
const router = express.Router();

const pool = require("../db");

// retrieve all employees
// url - localhost:4000/employees/
router.get('/', async (req, res) => {
    try {
        const emps = await pool.query("SELECT * FROM employees");
        res.json(emps.rows);
    }
    catch(err){
        console.error("error at get employees - ",err.message);
    }
});

// retrieve employee by id
// url - localhost:4000/employees/<some id>
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log("get employee by id - ",id);
        const emp = await pool.query("SELECT * FROM employees WHERE id=$1",[id]);
        res.json(emp.rows);
    }
    catch(err){
        console.error("error at get employee - ",err.message);
    }
});

// insert an employee record
// url - localhost:4000/employees/  
// post json data of new employee
router.post('/', async (req, res) => {
    try {
        const emp = req.body;
        console.log("insert employee - emp- ",emp); 
        const new_emp = await pool.query(
            "INSERT INTO employees(name,position,office,salary) VALUES($1,$2,$3,$4) RETURNING *",
            [emp.name, emp.position, emp.office, emp.salary]
        );
        res.json(new_emp.rows);

    }
    catch(err){
        console.error("error at insert employee - ",err.message);
    }
}); 

// update an employee record by id
// url - localhost:4000/employees/<some id>
router.put('/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    console.log("udpate employee - id - ",id);
    console.log("udpate employee - ",emp);
    const updated_emp = await pool.query(
        "UPDATE employees SET name=$1, position=$2, office=$3, salary=$4 WHERE id=$5",
        [emp.name, emp.position, emp.office, emp.salary, id]);
    res.json(updated_emp.rows);
    }
    catch(err) {
        console.error("error at update employee - ",err.message);
    }
});

// delete an employee record by id
// url - localhost:4000/employees/<some id>
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log("del employee by id - ",id);
        const del_emp = await pool.query("DELETE FROM employees WHERE id=$1",[id]);
        res.json(del_emp.rows);
    }
    catch(err){
        console.error("error at del employee - ",err.message);
    }
});

module.exports = router;