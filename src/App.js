import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import LoginPage from './containers/pages/LoginPage';
import TwoFactorAuthPage from './containers/pages/TwoFactorAuthPage';
import HomePage from './containers/pages/HomePage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Switch , Route} from 'react-router-dom';


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
      contrastText: '#1769aa',
    },
  },
});


function App() {
  return (
    <React.Fragment>
      <CssBaseline >
      <MuiThemeProvider theme={theme}>  
       <Switch>
         <Route exact path="/" component={LoginPage} />
         <Route path="/twoFactorAuth" component={TwoFactorAuthPage} />
         <Route path="/HomePage" component={HomePage} />
        </Switch> 
      </MuiThemeProvider>
      </ CssBaseline>
     </React.Fragment>
  );
}

export default App;
