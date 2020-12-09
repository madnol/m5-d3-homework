const express = require("express");
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");
const router = express.Router();

router.get("/", (req, res) => {
  const studPath = path.join(__dirname, "students.json");
  const fileBleepBloop = fs.readFileSync(studPath);
  const fileString = fileBleepBloop.toString();
  const studArray = JSON.parse(fileString);
  res.send(studArray);
});

router.get("/:id", (req, res) => {
  const studPath = path.join(__dirname, "students.json");
  const fileBleepBloop = fs.readFileSync(studPath);
  const fileString = fileBleepBloop.toString();
  const studArray = JSON.parse(fileString);
  let idi = req.params.id;

  let filterStudents = studArray.filter(student => student.id === idi);
  res.send(filterStudents);
});

router.post("/", (req, res) => {
  const studPath = path.join(__dirname, "students.json");
  const fileBleepBloop = fs.readFileSync(studPath);
  const fileString = fileBleepBloop.toString();
  const studArray = JSON.parse(fileString);
  const newStudents = req.body;
  newStudents.id = uniqid();
  console.log(newStudents);
  studArray.push(newStudents);

  fs.writeFileSync(studPath, JSON.stringify(studArray));

  res.status(201).send({ id: newStudents.ID });
});

module.exports = router;

router.put("/:id", (req, res) => {
  const studPath = path.join(__dirname, "students.json");
  const fileBleepBloop = fs.readFileSync(studPath);
  const fileString = fileBleepBloop.toString();
  const studArray = JSON.parse(fileString);

  let idi = req.params.id;

  let newStudents = studArray.filter(student => student.id !== idi);

  let editedStudent = req.body;
  editedStudent.id = idi;
  newStudents.push(editedStudent);

  fs.writeFileSync(studPath, JSON.stringify(newStudents));
  res.send(":)");
});

router.delete("/:id", (req, res) => {
  const studPath = path.join(__dirname, "students.json");
  const fileBleepBloop = fs.readFileSync(studPath);
  const fileString = fileBleepBloop.toString();
  const studArray = JSON.parse(fileString);

  //   let idi = req.params.id;

  let newStudents = studArray.filter(student => student.id !== req.params.id);

  fs.writeFileSync(studPath, JSON.stringify(newStudents));

  res.status(204).send("deleted");
});
