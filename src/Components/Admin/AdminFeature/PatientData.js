import React, { useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const PatientData = ({ appointment }) => {
  const {
    _id,
    patient_name,
    patient_number,
    patient_email,
    patient_weight,
    patient_age,
    fees,
    date,
    status,
  } = appointment;

  const [deleteTest, setDeleteTest] = useState([]);

  //Delete Test
  const handleDeleteTest = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://rocky-mountain-61787.herokuapp.com/appointment/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete Success");
            const remainingTest = deleteTest.filter((test) => test._id !== id);
            setDeleteTest(remainingTest);
          }
        });
    }
  };
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell className="user-name">{_id.slice(2, 8)}</TableCell>

      <TableCell>{patient_name}</TableCell>

      <TableCell>{patient_number}</TableCell>
      <TableCell>{patient_email}</TableCell>
      <TableCell>{patient_weight}</TableCell>
      <TableCell>{patient_age}</TableCell>
      <TableCell>{fees}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{status}</TableCell>

      {/* delete */}
      <TableCell style={{ fontSize: 20 }}>
        {" "}
        <button
          className="bg-transparent border-0 text-red-600"
          onClick={() => handleDeleteTest(appointment._id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>{" "}
      </TableCell>
    </TableRow>
  );
};

export default PatientData;
