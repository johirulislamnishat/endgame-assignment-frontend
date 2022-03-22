import { Paper, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import DoctorInfo from "./DoctorInfo";
const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "doctorName", label: "Doctor Name", minWidth: 280 },
  { id: "phone", label: "Phone Number", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 160 },
  { id: "designation", label: "Designation", minWidth: 140 },
  { id: "department", label: "Department", minWidth: 190 },
  { id: "education", label: "Education", minWidth: 150 },
  { id: "chamber", label: "Chamber", minWidth: 100 },
  { id: "fees", label: "Fees", minWidth: 60 },
  { id: "time", label: "Time", minWidth: 180 },
  //   { id: "update", label: "Update" },
  { id: "delete", label: "Delete" },
];
const ManageDoctors = () => {
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

  // doctors data
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10">
        <div className="table-name text-center">Manage Doctors</div>
        <Paper className="mx-auto" sx={{ width: "80%", overflow: "hidden" }}>
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
                {doctors
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((doctor) => {
                    return (
                      <DoctorInfo key={doctor.id} doctor={doctor}></DoctorInfo>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={doctors.length}
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

export default ManageDoctors;
