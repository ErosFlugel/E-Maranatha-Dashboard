import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import AnchorProduct from './AnchorProduct';


const columns = [
  { id: 'id', label: 'Id', minWidth: 100 },
  { id: 'name', label: 'Nombre', minWidth: 170 },
  {
    id: 'category',
    label: 'Categoria',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'brand',
    label: 'Marca',
    minWidth: 170,
    align: 'right'
  }
];

function createData(id, name, category, brand, detail) {
  return { id: id, name: name, category: category, brand: brand, detail: detail };
}

export default function TableMain({products}) {

const rows = products.data.map(row => createData(row.id, row.name, row.category, row.brand, row.detail));

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer> {/*sx={{ maxHeight: 640 }}*/}
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.filter(row => row.id !== 'detail').map((column, i) => (
                  <TableCell
                    key={column + i}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                  {column.label}
                  </TableCell>
                
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name + i}>
                    {columns.map((column) => {
                      const value = column.id === 'name' ?<AnchorProduct url={row.detail} content={row[column.id]}></AnchorProduct>: column.id === 'detail' ? '' : row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};