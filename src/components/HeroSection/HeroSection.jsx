import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import heroImg from '../../assets/heroBG.jpg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({

    mainHeroSection: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.2)',
      },
      heroContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        }
            
    },
   loginContent: {
        position: 'relative',
        margin: theme.spacing(1.5),
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(3),
            paddingRight: 0,
        }
      },
      paper: {
        margin: theme.spacing(2, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },

}));


const HeroSection = (props) => {

    const classes = useStyles();


    return (
    <Container maxWidth='lg'>
         <main>
            <Paper className={classes.mainHeroSection}>
            {
            <img
                style={{ display: 'none' }}
                alt="background"
                src={heroImg}
            />
            }
            <div className={classes.overlay} />
            <Grid container>
                <Grid item  xs={12} sm={5} md={4} component={Paper} elevation={6} square className={classes.loginContent}>
                   <div className={classes.paper}>
                    <form className={classes.form}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="User ID"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Log In
                      </Button>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                          <Link href="#" variant="body2">
                          Forgot User ID or Password?
                          </Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                          <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </div>         
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                    <div className={classes.heroContent}>
                    <Typography component="h2" variant="h4" color="inherit" gutterBottom>
                      Kick Off Fall with Amex Offers 
                    </Typography>
                    <Typography variant="subtitle1" color="inherit" paragraph>
                    Browse offers from great brands, add them to your Card, and save. Terms apply.
                    </Typography>
                    <Button variant="contained" color="secondary">
                     View Offers
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Paper>
      </main>
    </Container>
  )



};

export default HeroSection;