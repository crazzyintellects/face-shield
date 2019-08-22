import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import rewardsImg from '../../assets/rewards.webp';
import perksImg from '../../assets/perks.webp';
import cameraImg from '../../assets/camera.webp';
import Box from '@material-ui/core/Box';



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


const cards = [{
    id : 1,
    imgSrc: cameraImg,
    price: '979.56',
},
{
    id : 2,
    imgSrc: rewardsImg
},
{
    id : 3,
    imgSrc: perksImg
}
];

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
    // const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();


    return (
        
          <section className={classes.section}>
            <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
               {/* Latest Offers and Updates */}
            </Typography>
            <Container className={classes.cardGrid} maxWidth="lg" align='center'>
                <Grid container spacing={1}>
                {cards.map(card => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="subtitle1" align='center' >
                                <Box fontWeight="fontWeightBold" m={1} fontSize="14px">
                                    Remaining Statement Balance
                                </Box>
                                <Box fontWeight="fontWeightBold" m={1} align='center' fontSize="24px">
                                     ${card.price}
                                </Box>
                                <ColoredLine color="#C0C0C0" />
                                <Box fontWeight="fontWeightBold" m={1} fontSize="12px">
                                Available Credit
                                </Box>
                                <Box fontWeight="fontWeightLight" m={1} fontSize="14px">
                                ${11585.00}  Check Spending Power
                                </Box>
                                <ColoredLine color="#C0C0C0" />
                                <Box fontWeight="fontWeightBold" m={1} fontSize="12px">
                                Total Balance
                                </Box>
                                <Box fontWeight="fontWeightBold" m={1} fontSize="24px">
                                ${card.price}
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
                        Balance & Credit Details
                      </Button>
                    </CardActions>
                    <Typography variant="subtitle2" align='center' style={{cursor: 'pointer'}} color="primary">
                            Plan It: Create / View Plans
                     </Typography>           
                    </Card>
                    </Grid>
                ))}
                </Grid> 
          </Container>
          </section>
       
    )




};

export default StatementBalance;
