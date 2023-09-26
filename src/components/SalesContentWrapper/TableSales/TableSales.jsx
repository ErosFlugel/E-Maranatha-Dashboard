import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Link} from 'react-router-dom'

import ListProducts from './ListProducts/ListProducts';

const moment = require('moment');

function createData(compra, total, fecha, productos, usuario) {
  return {
    compra,
    total,
    fecha,
    productos,
    usuario
  };
};

function Row({row, products, userId, userModalToggle}) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.compra}
        </TableCell>
        <TableCell align="right">{row.total}</TableCell>
        <TableCell align="right">{row.fecha}</TableCell>
        <TableCell align="right">{row.productos}</TableCell>
        <TableCell align="right"><Link to="/users" onClick={() => userModalToggle(userId)}>{row.usuario}</Link></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Productos
              </Typography>
                <ListProducts products={products}></ListProducts>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default function TableSales({sales, userModalToggle}) {
    const rows = sales.data.map(sale => {
        return createData(sale.id, sale.total, moment(sale['created-at']).format('L'), sale.product.length, sale.user.nombre);
    });
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="collapsible stickyHeader table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Compra</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Productos</TableCell>
            <TableCell align="right">Usuario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.compra} row={row} products={sales.data.find( sale => sale.id === row.compra).product} userId={sales.data.find( sale => sale.id === row.compra).user.id} userModalToggle={userModalToggle}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};