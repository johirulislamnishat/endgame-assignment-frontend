import { Paper, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import Header from "../Headers/Header/Header";
import Footer from "../Footer/FooterMain";
import TestData from "./TestData";

const columns = [
  { id: "id", label: "Test ID", minWidth: 20 },
  { id: "type", label: "Test Type", minWidth: 170 },
  { id: "name", label: "Test Name", minWidth: 250 },
  { id: "Price", label: "Test Price", minWidth: 80 },
];

const LabTest = () => {
  const [tests, setTests] = useState([]);

  // const { isLoading } = useAuth();

  useEffect(() => {
    const url = "http://localhost:8000/lab/";
    fetch(url)
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setTests(data));
  }, []);

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
  return (
    <>
      <Header />
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
                  {tests
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((test) => {
                      return <TestData key={test._id} test={test}></TestData>;
                    })}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={tests.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </>

      <Footer />
    </>
  );
};

export default LabTest;
