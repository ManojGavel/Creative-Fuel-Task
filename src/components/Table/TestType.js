import { ThemeProvider } from "@emotion/react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  createTheme,
  darken,
} from "@mui/material";
import React from "react";
import { useContextReducer } from "../../Context/Context";

export default function TestType() {
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
    <div className='w-50 m-auto mt-5'>
      <ThemeProvider theme={darkTheme}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Test Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.testTypeList?.map((row, i) => {
                return (
                  <TableRow
                    key={i}
                    sx={{
                      background:
                        row === "PHP"
                          ? "green"
                          : row === "NODE JS"
                          ? "#fbc02d"
                          : "#ff6d00",
                    }}
                    hover
                    tabIndex={-1}
                  >
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{row}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter sx={{ background: "black" }}>
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
  );
}
