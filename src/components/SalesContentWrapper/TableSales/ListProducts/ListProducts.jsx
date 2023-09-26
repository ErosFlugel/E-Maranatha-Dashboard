import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {

    const {index, style} = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={props.data[index].nombre} />
        <span>{`${props.data[index]['factura_producto'].cantidad} x $${props.data[index].precio}`}</span>
      </ListItemButton>
    </ListItem>
  );
}

export default function ListProducts({products}) {
    const height = products.reduce((acc) => acc += 50, 10);
  return (
    <Box
      sx={{ width: '100%', maxHeight: 300, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={height > 300 ? 300 : height}
        itemSize={50}
        itemCount={products.length}
        overscanCount={5}
        itemData = {products}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}