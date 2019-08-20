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
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      cardAction: {
          paddingBottom: theme.spacing(3),
      }
     

}));


const cards = [{
    id : 1,
    title : 'American Express Travel',
    imgSrc: cameraImg
},
{
    id : 2,
    title : 'Rewards Built For You',
    imgSrc: rewardsImg
},
{
    id : 3,
    title : 'Share Perks of Membership',
    imgSrc: perksImg
}
];
const LoginOfferSection = (props) => {

    const classes = useStyles();


    return (
        
          <section className={classes.section}>
            <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
               Latest Offers and Updates
            </Typography>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Grid container spacing={4}>
                {cards.map(card => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image={card.imgSrc}
                        title="Offer"
                        />
                        <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.title}
                        </Typography>
                        </CardContent>
                        <CardActions  className={classes.cardAction}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                       
                        >
                        Explore Now
                      </Button>
                    </CardActions>
                    </Card>
                    </Grid>
                ))}
                </Grid>
          </Container>
          </section>
       
    )




};

export default LoginOfferSection;
