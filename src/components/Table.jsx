import React, { useEffect, useState } from "react";
import Tr from "./Tr";
import axios from "axios";

const Table = ({ students, deleteStudent }) => {
  return (
    <>
      <h1>Total Students {students.length}</h1>
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
    </>
  );
};

export default Table;
