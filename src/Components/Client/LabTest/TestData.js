import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TestData = ({ test }) => {
  const { _id, testName, testType, testPrice } = test;

  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell className="user-name">{_id.slice(2, 8)}</TableCell>

      <TableCell>{testType}</TableCell>

      <TableCell>{testName}</TableCell>
      <TableCell>{testPrice}</TableCell>
    </TableRow>
  );
};

export default TestData;
