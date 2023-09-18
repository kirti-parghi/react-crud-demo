import axios from "axios";
import Form from "./components/Form";
import Table from "./components/Table";
import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const deleteStudent = (id) => {
    // console.log("Delete called for " + id);
    axios
      .delete("https://64bfed3b0d8e251fd111b2b8.mockapi.io/student/" + id)
      .then((res) => {
        let _students = students.filter((student) => student.id != id);
        setStudents(_students);
      });
  };

  const insertStudent = (student) => {
    axios
      .post("https://64bfed3b0d8e251fd111b2b8.mockapi.io/student", student)
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          let _students = students;
          _students.push(res.data);
          setStudents(_students);
        }
      });
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
      <Form insertStudent={insertStudent} />
      <Table students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;
