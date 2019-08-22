import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({

    section: {
        backgroundColor: `#ededed`,
        // padding: theme.spacing(3, 0, 6),
        // marginTop: theme.spacing(3),
        // [theme.breakpoints.up('md')]: {
        //     marginTop: theme.spacing(6),
        // } 
      },
      cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        // marginLeft: theme.spacing(6),
        // marginRight: theme.spacing(6),
      },
      card: {
        height: '100%',
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '5%',
        paddingRight: '5%',
        // marginLeft: theme.spacing(10),
        // marginRight: theme.spacing(10),
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


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

const StatementBalance = (props) => {
   
    const classes = useStyles();

    return (
        
          <section className={classes.section}>
            <Container className={classes.cardGrid} maxWidth="lg" align='center'>
                <Grid container spacing={20}>
                {/* {cards.map(card => ( */}
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="subtitle1" align='center' >
                                <Box fontWeight="fontWeightBold" m={1} fontSize="12px">
                                    Remaining Statement Balance
                                </Box>
                                <Box fontWeight="fontWeightBold" m={1} align='center' fontSize="24px">
                                     ${4566.44}
                                </Box>
                                <ColoredLine color="#C0C0C0" />
                                <Box fontWeight="fontWeightBold" m={1} fontSize="12px">
                                Available Credit
                                </Box>
                                <Box fontWeight="fontWeightLight" m={1} fontSize="14px">
                                ${11585.44}  Check Spending Power
                                </Box>
                                <ColoredLine color="#C0C0C0" />
                                <Box fontWeight="fontWeightBold" m={1} fontSize="12px">
                                Total Balance
                                </Box>
                                <Box fontWeight="fontWeightBold" m={1} fontSize="24px">
                                ${3465.55}
                                </Box>
                            </Typography>
                        </CardContent>
                        <CardActions  className={classes.cardAction}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        >
                        Balance &amp; Credit Details
                      </Button>
                    </CardActions>
                    <Typography variant="subtitle2" align='center' style={{cursor: 'pointer'}} color="primary">
                            Plan It: Create / View Plans
                     </Typography>           
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="subtitle1" align='center' >
                                <Box fontWeight="fontWeightBold" m={1} fontSize="12px">
                                    Your Payment is Due on
                                </Box>
                                <Box fontWeight="fontWeightBold" m={1} align='center' fontSize="24px">
                                     August 29
                                </Box>
                                <ColoredLine color="#C0C0C0" />
                                <Box fontWeight="fontWeightBold" m={1} fontSize="12px">
                                Minimum Payment Due
                                </Box>
                                <Box fontWeight="fontWeightLight" m={1} fontSize="14px">
                                ${11585.45}
                                </Box>
                                <ColoredLine color="#C0C0C0" />
                            </Typography>
                        </CardContent>
                        <CardActions  className={classes.cardAction}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        >
                        Make Payment
                      </Button>
                    </CardActions>
                    <Typography variant="subtitle2" align='center' style={{cursor: 'pointer'}} color="primary">
                            Billing Statements
                     </Typography>           
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="subtitle1" align='center' >
                                <Box fontWeight="fontWeightBold" m={1} fontSize="12px">
                                    Membership Rewards Points
                                </Box>
                                <Box fontWeight="fontWeightBold" m={1} align='center' fontSize="14px">
                                     20% Extra Points Benefit
                                </Box>
                                <ColoredLine color="#C0C0C0" />
                                <Box fontWeight="fontWeightBold" m={1} fontSize="12px">
                                Available Points
                                </Box>
                                <Box fontWeight="fontWeightLight" m={1} fontSize="14px">
                                12249
                                </Box>
                                <ColoredLine color="#C0C0C0" />
                            </Typography>
                        </CardContent>
                        <CardActions  className={classes.cardAction}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        >
                        Redeem Points
                      </Button>
                    </CardActions>
                    <Box m={1} align='center' fontSize="14px">
                            Updates approx. 12pm ET each day.
                     </Box>           
                    </Card>
                    </Grid>
                </Grid> 
                
          </Container>
          </section>
       
    )




};

export default StatementBalance;
