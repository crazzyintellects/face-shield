import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import LoginPage from './containers/pages/LoginPage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4dabf5',
      main: '#006fcf',
      dark: '#1769aa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f2f2f2',
      main: '#fff',
      dark: '#ccc',
      contrastText: '#006fcf',
    },
  },
});


function App() {
  return (
    <React.Fragment>
      <CssBaseline >
      <MuiThemeProvider theme={theme}>  
        <LoginPage />  
      </MuiThemeProvider>
      </ CssBaseline>
     </React.Fragment>
  );
}

export default App;
