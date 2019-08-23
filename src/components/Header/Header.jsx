import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import { AppBar } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import logoImg from '../../logo.svg';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
     appbar: {
        borderBottom: `1px solid #ecedee`,
        backgroundColor: `#fff`,
        color:`#006fcf`,
        justifyContent : `center`
      },
     toolbar: {
        marginTop: 5,
        marginBottom: 5,
    },
    toolbarLink: {
      padding: theme.spacing(2),
     
     // flexShrink: 0, 
     // '&:last-child': {
     //   color:`#0f0`,
    //   flexGrow: `2 !important`,
   //  }   
    },
    headerLink : {
        display: 'none', 
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
          flexGrow:2,
        },
    },
    sectionMobile: {
      display: 'inline-flex',
      flexGrow:2,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    }


  }));






  const Header = (props) => {
  
    const classes = useStyles();
    return (
      
            <AppBar position="sticky" className={classes.appbar} >
            <Container maxWidth='lg'>
               <Toolbar component="nav" variant="dense" className={classes.toolbar}>
                <img
                src={logoImg}
                alt="logo"
                />
                <div className={classes.headerLink}>
                {props.headerItems.map(headerItem => (
                    <Link
                        color="inherit"
                        noWrap
                        key={headerItem}
                        variant="body2"
                        href="#"
                        className={`${classes.toolbarLink} `}
                    >
                        {headerItem}
                    </Link>
                    ))}
                    </div>
                    <div className={classes.sectionMobile}>
                    <IconButton
                      aria-label="show menu"             
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </div>
                    <IconButton color="primary">
                    <SearchIcon />
                    </IconButton>
                    <Button variant="contained" color="primary"
                     onClick={() => 
                      {
                       // props.history.push(`/`);

                        props.logout(props);
                         
                       
                     }
                            

                    }
                    >
                      {props.buttonName}
                    </Button>
                </Toolbar>
             </Container>
            </AppBar>
     
        
     
    )
  }; 
  
  export default withRouter(Header);
  