// Import necessary modules and Employee model
const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// Create Employee
router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const { name, email, mobile, designation, gender, courses, image } =
      req.body;
    const employee = new Employee({
      name,
      email,
      mobile,
      designation,
      gender,
      courses,
      image,
    });
    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read Employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Employee
router.put("/:id", async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, courses, image } =
      req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        mobile,
        designation,
        gender,
        courses,
        image,
      },
      { new: true }
    );
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Employee
router.delete("/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    res.json(deletedEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
