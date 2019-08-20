import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import LoginCardSection from '../../components/LoginCardSection/LoginCardSection';
import LoginOfferSection from '../../components/LoginOfferSection/LoginOfferSection';
import Footer from '../../components/Footer/Footer';



const headerItems = [
  'My Account',
  'Cards',
  'Travel',
  'Rewards',
  'Business',
];

const buttonName = 'Login';

const LoginPage = () => (
 
    <div className="loginPage">
      <Header headerItems={headerItems} buttonName={buttonName} />
      <HeroSection />
      <LoginCardSection />
      <LoginOfferSection />
      <Footer />    
    </div>
  
)

 
  
  export default LoginPage;
  