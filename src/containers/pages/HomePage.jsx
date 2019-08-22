import React from 'react';
import Header from '../../components/Header/Header';
import StatementBalance from '../../components/HeroSection/StatementBalance';
import Footer from '../../components/Footer/Footer';
import RecentTransactions from '../../components/HeroSection/RecentTransactions';
import Drawer from '../../components/Drawer/DrawerFixed'

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
      <Drawer />
      <StatementBalance />
      <RecentTransactions />
      <Footer />    
    </div>
  
)

 
  
  export default HomePage;
  
