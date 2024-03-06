const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  designation: {
    type: String,
    enum: ["HR", "Manager", "Sales"],
    required: true,
  },
  gender: { type: String, enum: ["male", "female"], required: true },
  courses: [{ type: String }],
  image: { type: String }, // Assuming you store image URL
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
