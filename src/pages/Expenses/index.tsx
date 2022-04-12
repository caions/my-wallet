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
import React, { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "../../components/Button";
import { InputText } from "../../components/InputText";
import Title from "../../components/Title";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns/esm";

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

  interface IRows {
    descricao?: string;
    quantidade?: string;
    preco?: string;
    date?: string | Date;
    acao?: string;
  }

  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("0");
  const [quantidade, setQuantidade] = useState("0");
  const [date, setDate] = useState<Date | null>(new Date());
  const [rows, setRows] = useState<IRows[]>([]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setRows([
      {
        descricao,
        preco,
        quantidade,
        date: format(new Date(date ?? ""), "dd/MM/yyyy"),
        acao: "Editar Excluir",
      },
      ...rows,
    ]);
  };

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
          <form method='post' onSubmit={e => e.preventDefault()}>
            <InputText
              topLabel='Descrição do item'
              fullWidth
              name='descricao'
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
            />
            <Box sx={sectionInputsRow}>
              <InputText
                inputWidth='200px'
                topLabel='Preço'
                innerStartAdornment='R$'
                type={"number"}
                name='preco'
                value={preco}
                onChange={e => setPreco(e.target.value)}
              />
              <InputText
                topLabel='Quantidade'
                type={"number"}
                inputWidth='200px'
                name='quantidade'
                value={quantidade}
                onChange={e => setQuantidade(e.target.value)}
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
                    value={date}
                    minDate={new Date("2017-01-01")}
                    onChange={selectedDate => {
                      setDate(selectedDate);
                    }}
                    renderInput={params => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <Button
                type='submit'
                onClick={handleSubmit}
                sx={{
                  width: "190px",
                  height: "50px",
                  marginTop: "30px",
                }}
              >
                Adicionar item
              </Button>
            </Box>
          </form>
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
                {rows.map((row, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.descricao}
                    </TableCell>
                    <TableCell align='center'>{row.quantidade}</TableCell>
                    <TableCell align='center'>{row.date}</TableCell>
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
