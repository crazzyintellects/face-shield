import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Wizard from './Wizard';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
    
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
     
        
      },
      cardMedia: {
        padding: theme.spacing(2,0,2), 
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4,0,4), 
        },
       //background: `#2980b9`, 
       //background: `-webkit-linear-gradient(to right, #2980b9, #2c3e50)`, 
       background: `linear-gradient(to right, #2980b9, #2c3e50)`, 


      },
      card: {
        //height: '100%',
        //display: 'flex',
        //flexDirection: 'column',
        padding: theme.spacing(0, 0, 3),
        marginTop: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(6),
        } 
      },
      cardAction: {
        justifyContent: `center`,
    }

}));

const CaptureFace = (props) => {

    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const getStartedBtnClick = (event) => {
        setChecked(false);


    };


    return (
        <Container className={classes.cardGrid} maxWidth="md">
           <Grid container spacing={4}>
               <Grid item xs={12} sm={12} md={12}>
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.cardMedia}
                    title="Face Auth"
                    > 
                    <Typography component="h2" variant="h4" align="center" color="secondary" gutterBottom>
                        AMEX Face Shield
                    </Typography>
                    <Typography variant="subtitle1" component="h2" align="center" color="secondary" gutterBottom>
                            SECURE WITH 3 SIMPLE STEPS USING YOUR FACE
                        </Typography>
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Wizard />
                      <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                       <div>
                            <Typography component="h5" variant="h5" align="center"  gutterBottom>
                            Get Secured !
                            </Typography>
                            <Typography variant="body1" component="h2" align="center" gutterBottom>
                                USE YOUR FACE AS A TWO FACTOR AUTHENTICATION
                            </Typography>
                            <Typography variant="body1" component="h2" align="center"  gutterBottom>
                            ENSURE ONLY YOU CAN SEE THE SENSITIVE INFORMATION
                            </Typography>
                        </div>
                      </Slide>
                    </CardContent>
                    <CardActions  className={classes.cardAction}>
                    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                        <Button
                        type="submit"   
                        variant="contained"
                        color="primary"
                        onClick={getStartedBtnClick}
                        >
                          Get Started
                    </Button>
                    </Slide>   
                    <Slide direction="up" in={!checked} mountOnEnter unmountOnExit>
                     <Button
                        type="submit"   
                        variant="contained"
                        color="primary"
                        >
                        Take Picture
                    </Button>
                    </Slide>   
                </CardActions>
                </Card>
               </Grid>
           </Grid>
       
        </Container>

    )
}; 

export default CaptureFace;