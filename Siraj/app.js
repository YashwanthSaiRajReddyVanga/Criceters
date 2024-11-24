const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json

// In-memory array to store student data
let students = [];

// Create a new student (C)
app.post("/students", (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).json({ message: "Student created", student });
  console.log(students);
});

// Read all students (R)
app.get("/students", (req, res) => {
  res.status(200).json(students);
  console.log(students);
});

// Read a student by ID (R)
app.get("/students/:id", (req, res) => {
  const id = req.params.id;
  const student = students.find((s) => s.id === id);
  if (student) {
    res.status(200).json(student);
    console.log(student);
  } else {
    res.status(404).json({ message: "Student not found" });
    console.log("Student not found");
  }
});

// Update a student by ID (U)
app.put("/students/:id", (req, res) => {
  const id = req.params.id;
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...req.body };
    res
      .status(200)
      .json({ message: "Student updated", student: students[index] });
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// Delete a student by ID (D)
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    res.status(204).send(); // No Content
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
