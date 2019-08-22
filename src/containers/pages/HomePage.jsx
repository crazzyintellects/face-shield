import React , {Component} from 'react';
import Header from '../../components/Header/Header';
import StatementBalance from '../../components/HeroSection/StatementBalance';
import Footer from '../../components/Footer/Footer';
import RecentTransactions from '../../components/HeroSection/RecentTransactions';
import Drawer from '../../components/Drawer/DrawerFixed'
import Camera from '../../components/VerifyFace/Camera';
import {getFaceMatcher} from '../../utilities/faceMaster';
import {secureHomePage}  from '../../utilities/faceMaster';
import Dashboard from '../../components/HeroSection/Dashboard';

const headerItems = [
  'Home',
  'Statements & Activity',
  'Payments',
  'Account Services',
  'Rewards',
  'Benefits',
];

const buttonName = 'Log Out';


class HomePage extends Component {

  state = {
    faceUserName : "",
      classesToBeBlurred:[]
  };

  componentDidMount = () => {
  
    let videoPlayer = document.querySelector('#player');
    let canvasElement = document.querySelector('#canvas');

    // setTimeout(
    //   async () => {
    //    let userFacesData = JSON.parse(localStorage.getItem("userFacesData")) || [];
    //    let faceUserName = userFacesData[0].user;
    //    await getFaceMatcher(userFacesData);
       
    //    this.setState({
    //     faceUserName: faceUserName,
    //    });
    //    await secureHomePage(videoPlayer,canvasElement,faceUserName);


    // },800);

}


getSelectedClassesToBeBlurred=(event)=>{
   const classesToBeBlurred = [...this.state.classesToBeBlurred];
    if(event.target.checked)
    {
        classesToBeBlurred.push(event.target.value);

    }else {
        classesToBeBlurred.pop(event.target.value);
    }
    this.setState({classesToBeBlurred})
}


render ()
{
 
  return (
    <div className="homepage">
      <Header headerItems={headerItems} buttonName={buttonName} />
      <Drawer getSelectedClassesToBeBlurred={this.getSelectedClassesToBeBlurred} />
      <Camera />
      <Dashboard />
      <Footer />    
    </div>
  )
}

}
  
export default HomePage;
  
