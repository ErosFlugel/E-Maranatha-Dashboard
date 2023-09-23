import './assets/css/app.css';
import SideBar from './components/SideBar/SideBar.jsx'

//Color App Theme
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C9A885',
      light: '#D3B99D',
      dark: 'rgb(140, 117, 93)',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    secondary: {
      main: '#E8E2D5',
      light: 'rgb(236, 231, 221)',
      dark: 'rgb(162, 158, 149)',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
  },
});

function App() {
  return (

        <div id="wrapper">
          <ThemeProvider theme={theme}><SideBar /></ThemeProvider>
        </div>
  );
};

export default App;
