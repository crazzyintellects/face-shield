import React from 'react';
import Header from '../../components/Header/Header';
import StatementBalance from '../../components/HeroSection/StatementBalance';
import Footer from '../../components/Footer/Footer';
<<<<<<< HEAD
import RecentTransactions from '../../components/HeroSection/RecentTransactions';
=======
import Drawer from '../../components/Drawer/DrawerFixed'
>>>>>>> 793af974921e211712d04b36d2f6b1a74e0fac6c

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
  
