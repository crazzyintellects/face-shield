import React from 'react';
import Header from '../../components/Header/Header';
import CaptureFace from '../../components/VerifyFace/CaptureFace';
import Footer from '../../components/Footer/Footer';
import Divider from '@material-ui/core/Divider';



const headerItems = [
  'Contact Us',
  'Feedback',
];

const buttonName = 'Log out';

const LoginPage = () => (
 
    <div className="twoFactorAuthPage">
      <Header headerItems={headerItems} buttonName={buttonName} />
      <CaptureFace /> 
      <Divider />
      <Footer />    
    </div>
  
)

 
  
  export default LoginPage;
  