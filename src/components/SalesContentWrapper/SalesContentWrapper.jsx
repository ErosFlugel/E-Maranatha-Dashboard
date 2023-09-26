import React from 'react';
import TableSales from './TableSales/TableSales';
import Spinner from '../Spinner/Spinner';

export default function SalesContentWrapper({sales, userModalToggle}) {
  return (
    <div className='container mt-5'>
      {sales.meta.success ? <TableSales sales={sales} userModalToggle={userModalToggle}/> : <Spinner/>}
    </div>
  );
}