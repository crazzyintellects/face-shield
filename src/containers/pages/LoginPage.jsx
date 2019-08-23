import React, {  useEffect } from "react";
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import LoginCardSection from '../../components/LoginCardSection/LoginCardSection';
import LoginOfferSection from '../../components/LoginOfferSection/LoginOfferSection';
import Footer from '../../components/Footer/Footer';
import $ from "jquery";




const headerItems = [
  'My Account',
  'Cards',
  'Travel',
  'Rewards',
  'Business',
];


const buttonName = 'Login';


const LoginPage = () =>

    {

    useEffect(() => {
        $('html').removeClass('blur-screen');

    })
return(
    <div className="loginPage">
      <Header headerItems={headerItems} buttonName={buttonName} />
      <HeroSection />
      <LoginCardSection />
      <LoginOfferSection />
      <Footer />
    </div>)
  }


 
  
  export default LoginPage;
  