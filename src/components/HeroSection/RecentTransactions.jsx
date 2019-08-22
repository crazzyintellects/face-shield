import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";


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
        width: '99%',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
      },
      row: {
        display: 'flex',
        
      },
      title: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        marginBottom: '1px',
      },
      card: {
        minHeight: '60px',
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        marginBottom: '1px',
      },
      base: {
        minHeight: '60px',
        backgroundColor: '#F7F8F9',
        marginTop: '-1px',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
        padding: '10px !important'
      },
      cardAction: {
          paddingBottom: theme.spacing(1),
      },
      table: {

      },
      member: {
        backgroundColor: '#006FCF',
        minHeight: '100px',
        marginLeft: '-10px',
        marginRight: '-10px',
        padding: '20px',
        color: '#FFFFFF',
        
      },
      useBtn: {
        marginTop: '20px',
        color: '#006FCF',
        backgroundColor: '#FFFFFF',
      },
      links: {
        color: '#006FCF',
        padding: '3px',
        cursor: 'pointer',
      }

     

}));

const ColoredLine = ({ color }) => (
    <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 1
        }}
    />
);

const tranData = [
  {date: 'Aug 21', status: 'Pending', merchant: 'AMEX SLC', amount: '$3.51'},
  {date: 'Aug 16', status: '', merchant: 'WALMART SUPERCENTER', amount: '$145.22'},
  {date: 'Aug 13', status: '', merchant: 'T.J. MAXX', amount: '$49.76'},
  {date: 'Aug 12', status: '', merchant: 'MCDONALDS', amount: '$12.13'},
  {date: 'Aug 10', status: '', merchant: 'BEST BUY', amount: '$879.09'},
  {date: 'Aug 8', status: '', merchant: 'BEST BUY', amount: '$79.99'},
  {date: 'Aug 6', status: '', merchant: 'HOME DEPOT', amount: '$27.67'},
  {date: 'Aug 3', status: '', merchant: 'MAVERICK', amount: '$37.19'},
]

const RecentTransactions = (props) => {
  
  const pageStyles = useStyles();
  const classes = useStyles();


  return (

    <Container className={pageStyles.cardGrid} maxWidth="lg" align='center'>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={8} md={8}>
          <Card className={pageStyles.title}>
            <CardContent className={pageStyles.cardContent}>
              <div className={pageStyles.row} >
                <Typography variant="h5" align='left' style={{paddingLeft: '10px', paddingRight: '10px', marginTop: '5px'}}>
                    Recent Transactions
                </Typography>
                <Typography variant="subtitle1" align='left' style={{ marginTop: '10px'}} >
                    (Since Aug 3. Closing Sep 3)
                </Typography>
                <Typography 
                  variant="subtitle1" align='right' color="primary"
                  style={{ width: '30%', float: 'right', cursor: 'pointer', marginTop: '10px'}}>
                    View All
                </Typography>       
              </div>
              </CardContent>
            </Card>
            <Card className={pageStyles.card}>
              {tranData.length === 0 &&
              <Typography variant="subtitle1" align='left' style={{paddingLeft: '20px', paddingTop: '15px'}} >
                No recent transactions
              </Typography>}
              {tranData.length > 0 &&
              <Table className={pageStyles.table}>
                <TableBody>
                  {tranData.map((row,idx) => (
                    <TableRow key={idx}>
                      <TableCell component="th" scope="row">
                        {row.date}
                      </TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left" style={{cursor: 'pointer', color: '#006FCF'}}>{row.merchant}</TableCell>
                      <TableCell align="right"><b>{row.amount}</b></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>}
            </Card>
            <Card className={pageStyles.base}>
            <Typography variant="subtitle1" align='left' style={{paddingLeft: '10px', paddingTop: '14px' ,cursor: 'pointer'}} color="primary">
              PDF Billing Statements
            </Typography>           
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4} >
          <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                  <Typography variant="subtitle1" align='center' >
                      <Box fontWeight="fontWeightBold" m={1} fontSize="16px" align='left'>
                        Useful Links
                      </Box>
                      <Box fontWeight="fontWeightBold" m={1} align='left' fontSize="14px" 
                        className={pageStyles.member}>
                        Membership has its benefits.
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          className={pageStyles.useBtn}
                          >
                          See Yours
                        </Button>
                      </Box>
                      <Box className={pageStyles.links} m={1} align='left' fontSize="16px">
                        Free Credit Score &amp; Report
                      </Box>
                      <Box className={pageStyles.links} m={1} align='left' fontSize="16px">
                        Card Member Agreement
                      </Box>
                      <Box className={pageStyles.links} m={1} align='left' fontSize="16px">
                        Add Another User
                      </Box>
                      <Box className={pageStyles.links} m={1} align='left' fontSize="16px">
                        Recommended Cards for You
                      </Box>
                      <Box className={pageStyles.links} m={1} align='left' fontSize="16px">
                        View Lending Options
                      </Box>
                      <Box className={pageStyles.links} m={1} align='left' fontSize="16px">
                        Manage Account Alerts
                      </Box>
                      <Box className={pageStyles.links} m={1} align='left' fontSize="16px">
                        Replace Lost/Damaged Card
                      </Box>
                  </Typography>
              </CardContent>
          </Card>
          </Grid>

        
      </Grid>
    </Container>
       
  )

};

export default RecentTransactions;
