import React from "react";

const Tr = ({ student, deleteStudent, studentIndex }) => {
  return (
    <tr>
      <td>{studentIndex + 1}</td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>
        <img src={student.avtar} alt="" height={"50px"} width={"50px"} />
      </td>
      <td>{student.city}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteStudent(student.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Tr;
