import { TableFooter, ThemeProvider, createTheme, darken } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useEffect } from "react";
import { useContextReducer } from "../../Context/Context";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Button from "@mui/material/Button";
export default function DataTable() {
  const [state, dispatch] = useContextReducer();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
      secondary: {
        main: darken("#fff", 0.1),
      },
    },
  });
  return (
    <div className="mt-5">
      <div className="container">
        <ThemeProvider theme={darkTheme}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Test Type</TableCell>
                  <TableCell>Test Name</TableCell>
                  <TableCell>Tester Email</TableCell>
                  <TableCell>Tester Ph</TableCell>
                  <TableCell>Alter Ph</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>last Updated</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.tableValues?.map((row, i) => {
                  return (
                    <TableRow
                      key={i}
                      sx={{
                        background:
                          row.Test_type === "PHP"
                            ? '#4caf50'
                            : row.Test_type === "NODE JS"
                            ? "#fbc02d"
                            : "#ff6d00",
                      }}
                      hover
                      tabIndex={-1}
                    >
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{row.Test_type}</TableCell>
                      <TableCell>{row.Test_name}</TableCell>
                      <TableCell>{row.Tester_email}</TableCell>
                      <TableCell>{row.Tester_phone}</TableCell>
                      <TableCell>
                        {row.Alternate_mobile_no
                          ? row.Alternate_mobile_no
                          : "NA"}
                      </TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>
                        {row.lastUpdationDate
                          ? row.lastUpdationDate
                          : "Not Updated"}
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            dispatch({
                              type: "setModalOpen",
                              payload: {
                                id: row.id,
                                Test_type: row.Test_type,
                                Test_name: row.Test_name,
                                Tester_email: row.Tester_email,
                                Tester_phone: row.Tester_phone,
                                Alternate_mobile_no: row.Alternate_mobile_no,
                                date: row.date,
                                lastUpdationDate: row.lastUpdationDate,
                              },
                            });
                          }}
                          variant="outlined"
                        >
                          edit{" "}
                          <ModeEditIcon
                            sx={{ fontSize: { xs: 5, sm: 10, md: 15, lg: 20 } }}
                          />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            dispatch({
                              type: "deleteRow",
                              payload: row.id,
                            });
                          }}
                          variant="outlined"
                        >
                          Deleted{" "}
                          <DeleteForeverIcon
                            sx={{ fontSize: { xs: 5, sm: 10, md: 15, lg: 20 } }}
                          />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              <TableFooter sx={{background:"black"}}>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    count={100}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </ThemeProvider>
      </div>
    </div>
  );
}
