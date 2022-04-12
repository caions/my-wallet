import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "../../components/Button";
import { InputText } from "../../components/InputText";
import Title from "../../components/Title";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";

const Expenses: React.FC = () => {
  const container = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "50px",
  };

  const sectionContainer = {
    display: "flex",
    width: "80%",
    flexDirection: "column",
    marginTop: "50px",
  };

  const sectionHeader = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const sectionInputsRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px 0",
  };

  const tableStyle = {
    minWidth: 650,
    ".MuiTableRow-head": {
      height: "50px",
      backgroundColor: "primary.main",
      ".MuiTableCell-root": {
        color: "white",
        fontWeight: 700,
      },
    },
    ".MuiTableRow-root": {
      height: "50px",
    },
    ".MuiTableRow-root:last-child": {},
    ".MuiTableRow-root:nth-of-type(even)": {
      backgroundColor: "common.white",
    },
    ".MuiTableCell-head": {
      fontSize: "17px",
    },
    ".MuiTableCell-body": {
      fontSize: "17px",
    },
  };

  const [value, setValue] = React.useState<Date | null>(new Date());
  const navigate = useNavigate();

  function createData(
    descricao: string,
    quantidade: number,
    data: number,
    preco: number,
    acao: number
  ) {
    return { descricao, quantidade, data, preco, acao };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <Box sx={container}>
        <Title />
        <Box sx={sectionContainer}>
          <Box sx={sectionHeader}>
            <Button color='warning' onClick={() => navigate("/")}>
              Voltar
            </Button>
            <InputText innerStartAdornment='R$' disabled />
          </Box>
          <InputText topLabel='Descrição do item' fullWidth />
          <Box sx={sectionInputsRow}>
            <InputText
              inputWidth='200px'
              topLabel='Preço'
              innerStartAdornment='R$'
              type={"number"}
            />
            <InputText
              topLabel='Quantidade'
              type={"number"}
              inputWidth='200px'
            />
            <Box
              sx={{
                width: "200px",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Typography variant='h6'>Data</Typography>
                <DesktopDatePicker
                  inputFormat='dd/MM/yyyy'
                  value={value}
                  minDate={new Date("2017-01-01")}
                  onChange={(newValue: any) => {
                    setValue(newValue);
                  }}
                  renderInput={(params: any) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
            <Button
              sx={{
                width: "190px",
                height: "50px",
                marginTop: "30px",
              }}
            >
              Adicionar
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table sx={tableStyle} size='small' aria-label='a dense table'>
              <TableHead>
                <TableRow>
                  <TableCell>DESCRIÇÃO</TableCell>
                  <TableCell align='center'>QUANTIDADE</TableCell>
                  <TableCell align='center'>DATA</TableCell>
                  <TableCell align='center'>PREÇO</TableCell>
                  <TableCell align='center'>AÇÃO</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow
                    key={row.descricao}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.descricao}
                    </TableCell>
                    <TableCell align='center'>{row.quantidade}</TableCell>
                    <TableCell align='center'>{row.data}</TableCell>
                    <TableCell align='center'>{row.preco}</TableCell>
                    <TableCell align='center'>{row.acao}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Expenses;
