import {
  Box,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridCellParams, gridClasses, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "../../components/Button";
import { InputText } from "../../components/InputText";
import Title from "../../components/Title";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns/esm";
import * as yup from "yup";
import { ValidateOptions } from "yup/lib/types";
import MainLayout from "../../layouts/MainLayout";

const columns: GridColDef[] = [
  {
    headerClassName: 'super-app-theme--header',
    field: 'id',
    headerName: 'ID',
    width: 85,
    headerAlign: 'center',
    align: 'center',
  },
  {
    headerClassName: 'super-app-theme--header',
    field: 'descricao',
    headerName: 'Descrição',
    width: 253,
    editable: true,
    headerAlign: 'center',
    align: 'center'
  },
  {
    headerClassName: 'super-app-theme--header',
    field: 'preco',
    headerName: 'Preço',
    width: 165,
    editable: true,
    headerAlign: 'center',
    align: 'center'
  },
  {
    headerClassName: 'super-app-theme--header',
    field: 'quantidade',
    headerName: 'quantidade',
    type: 'number',
    width: 200,
    editable: true,
    headerAlign: 'center',
    align: 'center'
  },
  {
    headerClassName: 'super-app-theme--header',
    field: 'date',
    headerName: 'Data',
    type: 'date',
    width: 221,
    editable: true,
    headerAlign: 'center',
    align: 'center'
  },
  {
    headerClassName: 'super-app-theme--header',
    field: 'acao',
    headerName: 'Ação',
    type: 'string',
    width: 275,
    editable: false,
    headerAlign: 'center',
    align: 'center',
    hideSortIcons: true,
    disableColumnMenu: true
  }
];

const rows2 = [
  { id: 1, descricao: 'produto 1', preco: '22.50', quantidade: '35', date: new Date(), acao: "Excluir" },
  { id: 2, descricao: 'produto 2', preco: '22.50', quantidade: '42', date: new Date(), acao: "Excluir" },
  { id: 3, descricao: 'produto 3', preco: '22.50', quantidade: '45', date: new Date(), acao: "Excluir" },
  { id: 4, descricao: 'produto 4 ', preco: '22.50', quantidade: '16', date: new Date(), acao: "Excluir" },
  { id: 5, descricao: 'produto 5', preco: '22.50', quantidade: '15', date: new Date(), acao: "Excluir" },
  { id: 6, descricao: 'produto 6', preco: '50.50', quantidade: '150', date: new Date(), acao: "Excluir" },
  { id: 7, descricao: 'produto 7', preco: '22.50', quantidade: '44', date: new Date(), acao: "Excluir" },
  { id: 8, descricao: 'produto 8', preco: '22.50', quantidade: '36', date: new Date(), acao: "Excluir" },
  { id: 9, descricao: 'produto 9', preco: '22.50', quantidade: '65', date: new Date(), acao: "Excluir" },
];

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  maxHeight: '635px',
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: theme.palette.common.white,
    },
  },
  [`& .${gridClasses.row}.odd`]: {
    '&:hover, &.Mui-hovered': {
      backgroundColor: theme.palette.common.white,
    },
  },
}));

const Expenses: React.FC = () => {

  const container = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "50px",
  };

  const formContainer = {
    width: "80%",
    marginTop: "50px",
  };

  const headerContainer = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const tableContainer = {
    width: "80%",
    fontSize: '17px',
    '.MuiDataGrid-columnHeaderTitle': {
      fontWeight: 700
    },
    '.super-app-theme--header': {
      textTransform: 'uppercase',
      backgroundColor: "primary.main",
      fontSize: "17px",
      color: "white",
    },

  }

  const sectionInputsRow = {
    display: "flex",
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
    id: number;
    descricao?: string;
    quantidade?: string;
    preco?: string;
    date?: string | Date;
    acao?: string;
  }

  interface IErrors {
    descricao?: string;
    preco?: string;
    quantidade?: string;
  }

  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [rows, setRows] = useState<IRows[]>([]);
  const [errors, setErrors] = useState<IErrors>({});
  const [validate, setValidate] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);

  const navigate = useNavigate();

  yup.setLocale({
    mixed: {
      required: "Campo obrigatório"
    },
    number: {
      min: 'Deve ser maior ou igual a ${min}',
    },
  });


  const validationSchema = yup.object({
    descricao: yup.string().required(),
    quantidade: yup.number().required().min(1).integer(),
    preco: yup.string().required(),
  });

  validationSchema
    .isValid({
      descricao,
      quantidade,
      preco,
    })
    .then((valid) => {
      setValidate(valid)
    });

  const validateFields = () => {
    const options: ValidateOptions = { abortEarly: false, strict: true }

    validationSchema
      .validate({ descricao, preco, quantidade: Number(quantidade) }, options)
      .catch((err) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const erros: any = {}
        for (const prop in err.inner) {
          const key = err.inner[prop].path
          erros[key as keyof string] = err.inner[prop].message
        }
        setErrors(erros);
      });
  }


  const handleSubmit = () => {

    validateFields()

    if (validate) {

      setErrors({});
      setRows([
        ...rows,
        {
          id: rows.length + 1,
          descricao,
          preco: "R$ " + preco,
          quantidade,
          date: format(new Date(date ?? ""), "dd/MM/yyyy"),
          acao: "Excluir",
        },
      ]);
      setDescricao("");
      setPreco("");
      setQuantidade("");
    }
  };

  const handleCellClick = ({ id, field }: GridCellParams) => {
    setEditable(false)
    if (field === 'acao') {
      if (confirm('Deseja realmente excluir esse item?')) {
        // delete row
        setRows(rows.filter((r) => r.id !== id))
      }
    }

    if (field !== 'acao') {
      if (confirm('Deseja realmente editar esse item?')) {
        setEditable(true)
      }
    }

  }

  useEffect(() => {
    setRows(rows2)
  }, [])

  return (
    <MainLayout>
      <Box sx={container}>
        <Title />
        <Box sx={formContainer}>
          <Box sx={headerContainer}>
            <Button color='warning' onClick={() => navigate("/")}>
              Voltar
            </Button>
            <InputText innerStartAdornment='R$' disabled />
          </Box>
          <form method='post' onSubmit={e => e.preventDefault()}>
            <InputText
              error={!!errors.descricao}
              topLabel='Descrição do item'
              fullWidth
              name='descricao'
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              helperText={errors.descricao}
            />
            {/*  <span>{errors[0]}</span> */}
            <Box sx={sectionInputsRow}>
              <InputText
                error={!!errors.preco}
                placeholder='0'
                inputWidth='200px'
                topLabel='Preço'
                innerStartAdornment='R$'
                type={"number"}
                name='preco'
                value={preco}
                onChange={e => setPreco(e.target.value)}
                helperText={errors.preco}
              />
              <InputText
                error={!!errors.quantidade}
                placeholder='0'
                topLabel='Quantidade'
                type={"number"}
                inputWidth='200px'
                name='quantidade'
                value={quantidade}
                onChange={e => setQuantidade(e.target.value)}
                helperText={errors.quantidade}
              />
              <Box
                sx={{
                  width: "200px",
                }}
              >

                <LocalizationProvider
                  dateAdapter={AdapterDateFns}>

                  <Typography variant='h6'>Data</Typography>
                  <DesktopDatePicker
                    inputFormat='dd/MM/yyyy'
                    value={date}
                    minDate={new Date("2021-01-01")}
                    onChange={selectedDate => {
                      setDate(selectedDate);
                    }}
                    renderInput={params => <TextField
                      sx={{
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main'
                        },
                        ':hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main'
                        },
                        '.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderWidth: 3,
                        }
                      }}
                      {...params} />}
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
        </Box>
        <Box sx={tableContainer}>
          <div style={{ height: 700 }}>
            <StripedDataGrid
              onCellClick={(params) => handleCellClick(params)}
              isCellEditable={() => editable}
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
              getRowClassName={(params) => {
                return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
              }
              }
            />
          </div>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Expenses;
