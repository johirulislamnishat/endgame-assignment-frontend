import { Paper, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import ManageTestData from "./ManageTestData";

const columns = [
  { id: "id", label: "Test ID", minWidth: 20 },
  { id: "type", label: "Test Type", minWidth: 170 },
  { id: "name", label: "Test Name", minWidth: 250 },
  { id: "Price", label: "Test Price", minWidth: 80 },
  //   { id: "update", label: "Update" },
  { id: "delete", label: "Delete" },
];

const ManageTest = () => {
  //   table
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // test data
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    fetch("https://rocky-mountain-61787.herokuapp.com/lab/")
      .then((res) => res.json())
      .then((data) => setLabs(data));
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10">
        <div className="table-name text-center">Test List And Price</div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 550 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        fontSize: "14px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                        backgroundColor: "#0dc276",
                        color: "#fff",
                        minWidth: column.minWidth,
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {labs
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((lab) => {
                    return (
                      <ManageTestData key={lab._id} lab={lab}></ManageTestData>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={labs.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
};

export default ManageTest;
