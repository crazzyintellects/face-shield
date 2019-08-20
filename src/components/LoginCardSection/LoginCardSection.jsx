import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import goldImg from '../../assets/gold.webp';
import corporateImg from '../../assets/corporate.webp';
import platinumImg from '../../assets/platinum.webp';
import giftCardImg from '../../assets/giftCard.webp';


const useStyles = makeStyles(theme => ({

    section: {
       display : 'flex',
       overflow: 'hidden',
       justifyContent: 'space-around',
       alignItems:'center',
       flexWrap:'wrap',
    },
      image: {
        
          margin: theme.spacing(1),  
          maxWidth: `100%`,
          maxHeight: `150px`, 
      }

}));


const LoginCardSection = (props) => {

    const classes = useStyles();


    return (
    <Container maxWidth='lg'>
        <section className={classes.section}>
           {
            <img
                alt="background"
                src={goldImg}
                className={classes.image}
            />
            }
            {
                <img
                    alt="background"
                    src={platinumImg}
                    className={classes.image}
                />
            }
            {
                    <img
                        alt="background"
                        src={corporateImg}
                        className={classes.image}
                    />
            }
            {
                        <img
                            alt="background"
                            src={giftCardImg}
                            className={classes.image}
                        />
            }
      </section>
    </Container>
  )



};

export default LoginCardSection;