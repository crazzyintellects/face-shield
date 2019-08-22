import React from 'react';
import Header from '../../components/Header/Header';
import StatementBalance from '../../components/HeroSection/StatementBalance';
import Footer from '../../components/Footer/Footer';

const headerItems = [
  'Home',
  'Statements & Activity',
  'Payments',
  'Account Services',
  'Rewards',
  'Benefits',
];

const buttonName = 'Log Out';

const HomePage = () => (
 
    <div className="homepage">
      <Header headerItems={headerItems} buttonName={buttonName} />
      <StatementBalance />
      <Footer />    
    </div>
  
)

 
  
  export default HomePage;
  
