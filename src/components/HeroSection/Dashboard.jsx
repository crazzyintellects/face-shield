import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RecentTransactions from './RecentTransactions';



const useStyles = makeStyles(theme => ({

    section: {
        backgroundColor: `#ededed`,
        padding: theme.spacing(3, 0, 6),
        marginTop: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(6),
        } 
      },
      cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        // paddingLeft: theme.spacing(6),
        // paddingRight: theme.spacing(6),
        // marginLeft: theme.spacing(6),
        // marginRight: theme.spacing(6),
      },
      card: {
        height: '100%',
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        // paddingLeft: theme.spacing(0),
        // paddingRight: theme.spacing(0),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      cardAction: {
          paddingBottom: theme.spacing(1),
      },
     

}));




const Dashboard = (props) => {
    
    const classes = useStyles();


    return (
        
      <section className={classes.section}>
        <Container className={classes.cardGrid} maxWidth="lg" align='center'>
          <RecentTransactions />
        </Container>
      </section>
       
    )




};

export default Dashboard;
