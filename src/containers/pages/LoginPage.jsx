import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import LoginCardSection from '../../components/LoginCardSection/LoginCardSection';



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
      <div className="loginPage__offer-section">offer section</div>
      <div className="loginPage__footer">Footer</div>    
    </div>
  
)

 
  
  export default LoginPage;
  