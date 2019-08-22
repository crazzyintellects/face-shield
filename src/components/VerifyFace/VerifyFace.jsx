import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';



const useStyles = makeStyles(theme => ({
    cardGrid: {
        //paddingTop: theme.spacing(3),
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
}));

const VerifyFace = (props) => {

    const classes = useStyles();

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
                     AUTHENTICATE WITH YOUR FACE
                 </Typography>
             </CardMedia>
             <CardContent className={classes.cardContent}>
               <Grid container id="playerDiv" className={`${classes.hide} ${classes.cardAction}`} justify="center" alignItems="center" allow="geolocation; camera ; microphone">
              
               <Grid item > <video id="player" autoPlay width="320" height="247"  allow="autoplay; geolocation; camera ; microphone"></video> </Grid>
               <Grid item > <canvas id="canvas" width="320" height="247" className={classes.hide}  allow="geolocation; camera ; microphone"></canvas> </Grid>
               </Grid>

              

           


             </CardContent>
         </Card>
        </Grid>
    </Grid>  
 </Container>

  )
};

export default VerifyFace;