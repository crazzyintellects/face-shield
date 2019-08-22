import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    hide: {
        display: 'none',
      },
      cardAction: {
        justifyContent: `center`,
    },
}));

const Camera = (props) => {

    const classes = useStyles();
    return (
    <Grid container id="playerDiv" className={`${classes.hide} ${classes.cardAction}`} justify="center" alignItems="center" allow="geolocation; camera ; microphone">
       <Grid item > <video id="player" autoPlay width="320" height="247"  allow="autoplay; geolocation; camera ; microphone"></video> </Grid>
       <Grid item > <canvas id="canvas" width="320" height="247" className={classes.hide}  allow="geolocation; camera ; microphone"></canvas> </Grid>                
    </Grid>
    )
};
export default Camera;