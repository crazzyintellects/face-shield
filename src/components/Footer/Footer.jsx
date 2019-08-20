import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({

    '@global': {
        ul: {
          margin: 0,
          padding: 0,
        },
        li: {
          listStyle: 'none',
        },
      },
    footer: {
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),

      },

}));

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          SLC Mavericks
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Coded with Love & Passion.'}
      </Typography>
    );
  }

const footers = [
    {
      title: 'ABOUT',
      description: ['About American Express', 'Investor Relations', 'Careers', 'Site Map', 'Contact Us'],
    },
    {
      title: 'PRODUCTS & SERVICES',
      description: ['Credit Cards', 'Business Credit Cards', 'Corporate Programs', 'Prepaid Cards', 'Savings Accounts & CDs'],
    },
    {
      title: 'LINKS YOU MAY LIKE',
      description: ['Membership Rewards', 'Free Credit Score & Report', 'CreditSecure', 'Bluebird' ,'Accept Amex Cards','Refer A Friend'],
    },
    {
      title: 'ADDITIONAL INFORMATION',
      description: ['Card Agreements', 'Financial Education','Servicemember Benefits','Supplier Management'],
    },
  ];

const Footer = (props) => {

    const classes = useStyles();

    return(

        <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="body2" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>

    )

};

export default Footer;
