import { Paper, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import PatientData from "./PatientData";

const columns = [
  { id: "id", label: "ID", minWidth: 20 },
  { id: "patientName", label: "Patient Name", minWidth: 170 },
  { id: "patientNumber", label: "Patient Number", minWidth: 120 },
  { id: "patientEmail", label: "Patient Email", minWidth: 120 },
  { id: "patient_age", label: "patient_age", minWidth: 40 },
  { id: "patient_weight", label: "patient_weight", minWidth: 40 },
  { id: "fees", label: "Fees", minWidth: 50 },
  { id: "date", label: "Date", minWidth: 140 },
  { id: "status", label: "Status", minWidth: 100 },

  //   { id: "update", label: "Update" },
  { id: "delete", label: "Delete" },
];

const ManagePatients = () => {
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

  // patient data
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("https://rocky-mountain-61787.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10">
        <div className="table-name text-center">Manage Patient</div>
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
                {appointments
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((appointment) => {
                    return (
                      <PatientData
                        key={appointment._id}
                        appointment={appointment}
                      ></PatientData>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={appointments.length}
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

export default ManagePatients;
