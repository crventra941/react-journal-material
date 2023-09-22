import { Box, Button, Grid, IconButton, MenuItem, Select, TextField, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import MaterialReactTable from "material-react-table"
import { useMemo } from "react";
import { styled } from '@mui/material/styles';
import { Delete, RemoveRedEye, Update, Book } from '@mui/icons-material';
import Modal from '@mui/material/Modal';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  boxShadow: 24,
  p: 4,
};

export const BooksPage = () => {
  const columns = useMemo(() => [
    {
      accessorKey: 'no',
      header: "N°"
    },
    {
      accessorKey: 'type',
      header: "Tipo"
    },
    {
      accessorKey: 'year',
      header: "Año",
      size: 110, //medium column

    },
  ], []);

  return (
    <JournalLayout>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb: 1 }}
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid item paddingBottom={3}>

          <BootstrapButton
            startIcon={<Book />}
            variant="outlined">
            Nuevo Libro
          </BootstrapButton>
        </Grid>

        <Grid container>
          <MaterialReactTable
            title="Category"
            enableColumnActions={false}
            enableColumnFilters={false}
            enableColumnResizing
            enableStickyHeader
            muiTableContainerProps={{
              sx: {
                height: {
                  lg: '225px',
                  xl: '550px'
                }
              }
            }}
            enableTopToolbar={false}
            columns={columns}
            data={[
              {
                id: 1,
                no: 1,
                year: 2023,
                type: 'Bautismos'
              },
              {
                id: 2,
                no: 1,
                year: 2023,
                type: 'Bautismos'
              },
              {
                id: 3,
                no: 1,
                year: 2023,
                type: 'Confirmaciones'
              },
              {
                id: 3,
                no: 1,
                year: 2023,
                type: 'Confirmaciones'
              }, {
                id: 3,
                no: 1,
                year: 2022,
                type: 'Confirmaciones'
              }, {
                id: 3,
                no: 1,
                year: 2020,
                type: 'Confirmaciones'
              }, {
                id: 3,
                no: 1,
                year: 2023,
                type: 'Confirmaciones'
              }, {
                id: 3,
                no: 1,
                year: 2023,
                type: 'Confirmaciones'
              }, {
                id: 3,
                no: 1,
                year: 2023,
                type: 'Confirmaciones'
              }, {
                id: 3,
                no: 1,
                year: 2023,
                type: 'Confirmaciones'
              }, {
                id: 3,
                no: 1,
                year: 2023,
                type: 'Confirmaciones'
              }, {
                id: 3,
                no: 1,
                year: 2023,
                type: 'Confirmaciones'
              },
            ]}
            muiTableBodyCellProps={{
              sx: {
                fontSize: '16px',
              },
            }}
            muiTableBodyP
            muiTableHeadCellProps={{
              sx: {
                fontWeight: 'bold',
                fontSize: '16px',
              },
            }}
            muiTableBodyProps={{
              sx: {
                '& tr:nth-of-type(odd)': {
                  backgroundColor: '#f5f5f5',
                  padding: '.5rem'
                },
              },
            }}
            muiTableProps={{
              sx: {
                tableLayout: 'fixed',
              },
            }}
            enableRowActions
            positionActionsColumn="last"
            renderRowActions={({ row }) => (
              <Grid item display={'flex'}>
                <IconButton aria-label="view">
                  <RemoveRedEye />
                </IconButton>
                <IconButton aria-label="edit">
                  <Update />
                </IconButton>
                <IconButton color="error" aria-label="delete">
                  <Delete />
                </IconButton>
              </Grid>
            )}
            displayColumnDefOptions={{
              'mrt-row-actions': {
                header: 'Opciones',
                size: 100,
              },
            }}
          />
        </Grid>
      </Grid>

      <Modal
        open={false}
        onClose={() => { }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom={4}>
            Agregar nuevo libro
          </Typography>

          <Grid container>
            <TextField
              type="number"
              variant="filled"

              fullWidth
              placeholder="Ingrese el número de libro"
              label="N° de Libro"
              name='no'
              value={""}
              onChange={() => { }}
              sx={{ border: 'none', mb: 1 }}
            />

            <TextField
              type="number"
              variant="filled"
              fullWidth
              placeholder="Ingrese el año"
              label="Año"
              name='year'
              value={""}
              onChange={() => { }}
              sx={{ border: 'none', mb: 1 }}
            />

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"Bautismos"}
              label="type"
              autoWidth
              variant="filled"
              onChange={() => { }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

            <Grid container display="flex" justifyContent="end">
              <Grid item>
                <Button>Guardar</Button>
              </Grid>

              <Grid item>
                <Button variant="outlined" color="primary">Cancelar</Button>
              </Grid>

            </Grid>

          </Grid>
        </Box>
      </Modal>

    </JournalLayout>
  )
}