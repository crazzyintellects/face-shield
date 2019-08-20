import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import LoginCardSection from '../../components/LoginCardSection/LoginCardSection';
import LoginOfferSection from '../../components/LoginOfferSection/LoginOfferSection';



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
      <div className="loginPage__footer">Footer</div>    
    </div>
  
)

 
  
  export default LoginPage;
  