import React, { useEffect, useState } from "react";
import Tr from "./Tr";
import axios from "axios";

const Table = () => {
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

  useEffect(() => {
    axios
      .get("https://64bfed3b0d8e251fd111b2b8.mockapi.io/student")
      .then((res) => {
        setStudents(res.data);
      });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Image</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, studentIndex) => (
          <Tr
            student={student}
            key={studentIndex}
            deleteStudent={deleteStudent}
            studentIndex={studentIndex}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
