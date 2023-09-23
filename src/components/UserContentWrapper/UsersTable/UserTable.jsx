import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import 'moment/locale/es';

import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';

// import ModalUser from './ModalUser/ModalUser';

const moment = require('moment');
moment.locale('es');

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.secondary.light,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, name, email, phone, birth, creation) {
  return { id, name, email, phone, birth, creation };
}

//Modal Animated Settings
const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function UserTable({users, userModalToggle, modalOpen}) {

    const rows = users.map(user => createData(user.id, user.name, user.email, user.phone, user.birth, user['created-at']));

    // console.log(moment(rows[0]).format())
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState({});

    const handleOpen = (id) => {
      
      setUserData(users.find(user => user.id === id));
      
      setOpen(true)
    
    };
    const handleClose = () => setOpen(false);

    if(modalOpen) {
      console.log('hola')
      setUserData(users[-1]);
      setOpen(true);
      userModalToggle();
    };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className='container'>
              <img src={userData.img} alt="" className='img-fluid'/>
            </div>
            <Typography id="spring-modal-title" variant="h6" component="h2" className="d-flex flex-row justify-content-around">
              <span>{userData.name}</span>
              <span>{userData.birth}</span>
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {userData.email}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {userData.phone}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {userData.creation}
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Número</StyledTableCell>
              <StyledTableCell align="center">Nacimiento</StyledTableCell>
              <StyledTableCell align="center">Creación</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                // <ModalUser key={row.name + row.id} id={row.id} name={row.name} email={row.email} phone={row.phone} birth={row.birth} creation={moment(row.creation).calendar()}>
                  <StyledTableRow key={row.name + row.id} onClick={() => handleOpen(row.id)} className='pointy'>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">{row.email}</StyledTableCell>
                    <StyledTableCell align="center">{row.phone}</StyledTableCell>
                    <StyledTableCell align="center">{row.birth}</StyledTableCell>
                    <StyledTableCell align="center">{moment(row.creation).calendar()}</StyledTableCell>
                  </StyledTableRow>
                // </ModalUser>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};