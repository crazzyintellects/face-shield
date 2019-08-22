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
import  initializeMedia from '../../utilities/camera';
import TextField from '@material-ui/core/TextField';

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
      cardAction: {
        justifyContent: `center`,
    },
    hide: {
        display: 'none',
        overflow: 'hidden'
      },


}));

let photosArray =[];
let index = 0;


const CaptureFace = (props) => {

    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const [showSaveBtn, setShowSaveBtn] = React.useState(false);
    
    const getStartedBtnClick = (event) => {
        setChecked(false);

        let videoPlayer = document.querySelector('#player');
        let playerDiv = document.querySelector('#playerDiv');
        let canvasElement = document.querySelector('#canvas');

        initializeMedia(playerDiv,videoPlayer,canvasElement);
    };

     const captureImage = () => {
      
        index = index + 1;
        
        let faceImageShown = '#faceImage' + index;
        
        let videoPlayer = document.querySelector('#player');
        let playerDiv = document.querySelector('#playerDiv');
        let canvasElement = document.querySelector('#canvas');
        //canvasElement.style.display = 'block';

        let faceImage = document.querySelector(faceImageShown);
        let imageGallery = document.querySelector('#imageGallery');
       
        let context = canvasElement.getContext('2d');
        context.drawImage(videoPlayer, 0, 0, 320, 247);
       
        faceImage.src = canvasElement.toDataURL('image/jpeg');
        canvasElement.style.display =' none';
        imageGallery.style.display = 'flex';
        
        //push photos in array
        photosArray.push(faceImage);
        faceImage.style.display = 'block';

        if(index === 3) {
            playerDiv.style.display ='none';
            document.querySelector('#takePicture').style.display = 'none';
            setShowSaveBtn(true);
            videoPlayer.srcObject.getVideoTracks().forEach(function (track) {
                track.stop();
        });
          

        }
    
      }

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
                     
                      <Grid container id="playerDiv" className={`${classes.hide} ${classes.cardAction}`} justify="center" alignItems="center">
                     
                      <Grid item > <video id="player" autoPlay width="320" height="247"></video> </Grid>
                      <Grid item > <canvas id="canvas" width="320" height="247" className={classes.hide}></canvas> </Grid>
                      
                      </Grid>

                
                      <Grid container spacing={1} id="imageGallery" className={classes.hide} justify="center"
                      alignItems="center" >
                      <Grid item xs={12} sm={6} md={4}> <img id="faceImage1" src="" alt="UserImage" className={`${classes.pad2} ${classes.hide}`}/> </Grid>
                      <Grid item xs={12} sm={6} md={4}> <img id="faceImage2" src="" alt="UserImage" className={`${classes.pad2} ${classes.hide}`} /> </Grid>
                      <Grid item xs={12} sm={6} md={4}> <img id="faceImage3" src="" alt="UserImage" className={classes.hide} /> </Grid>
                      </Grid>
                     


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
                        onClick={captureImage}
                        id="takePicture"
                        >
                        Take Picture
                    </Button>
                    </Slide>   

                            <Slide direction="right" in={showSaveBtn} mountOnEnter unmountOnExit>
                            <TextField
                            id="username"
                            label="Name"
                          
                        
                            margin="normal"
                            variant="outlined"
                            />
                            </Slide>
                        
                            <Slide direction="down" in={showSaveBtn} mountOnEnter unmountOnExit>
                            <Button
                                type="submit"   
                                variant="contained"
                                color="primary"
                                id="savePictures"
                                >
                                Save Pictures
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