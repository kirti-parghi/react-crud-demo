import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import { useEffect, useState } from "react";

function Home() {
  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState({
    id: "",
    name: "",
    age: 0,
    avtar: "",
    city: "",
  });

  const deleteStudent = (id) => {
    // console.log("Delete called for " + id);
    axios
      .delete("https://64bfed3b0d8e251fd111b2b8.mockapi.io/student/" + id)
      .then((res) => {
        let _students = students.filter((student) => student.id != id);
        setStudents(_students);
      });
  };

  const insertStudent = async (student) => {
    axios
      .post("https://64bfed3b0d8e251fd111b2b8.mockapi.io/student", student)
      .then((res) => {
        setStudents([...students, res.data]);
      });
  };

  const updateStudent = async (student) => {
    axios
      .put(
        "https://64bfed3b0d8e251fd111b2b8.mockapi.io/student/" + student.id,
        student
      )
      .then((res) => {
        let _students = [...students];
        _students[_students.findIndex(({ id }) => id === student.id)] =
          res.data;
        setStudents(_students);
      });
  };

  const editStudent = (student) => {
    setStudentToEdit(student);
  };

  useEffect(() => {
    axios
      .get("https://64bfed3b0d8e251fd111b2b8.mockapi.io/student")
      .then((res) => {
        setStudents(res.data);
      });
  }, []);

  return (
    <div className="container my-5">
      <Form
        insertStudent={insertStudent}
        updateStudent={updateStudent}
        studentToEdit={studentToEdit}
      />
      <Table
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </div>
  );
}

export default Home;
