import React , {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Drawer from '../../components/Drawer/DrawerFixed'
import Camera from '../../components/VerifyFace/Camera';
import {getFaceMatcher} from '../../utilities/faceMaster';
import {secureHomePage}  from '../../utilities/faceMaster';
import {blurSpecificfields}  from '../../utilities/faceMaster';
import Dashboard from '../../components/HeroSection/Dashboard';
import $ from "jquery";

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
      classesToBeBlurred:[],
      isLoggedIn: true,
      clearScanTimeout: 0
  };

  componentDidMount = () => {
  
    let videoPlayer = document.querySelector('#player');
    let canvasElement = document.querySelector('#canvas');

    setTimeout(
      async () => {
       let userFacesData = JSON.parse(localStorage.getItem("userFacesData")) || [];
       let faceUserName = userFacesData[0].user;
       await getFaceMatcher(userFacesData);
       
       this.setState({
        faceUserName: faceUserName,
           clearScanTimeout:  await secureHomePage(videoPlayer,canvasElement,faceUserName,this.state.isLoggedIn,this.props)
       });



    },800);

}

    logout=(props)=>{
        let videoPlayer = document.querySelector('#player');
        let canvasElement = document.querySelector('#canvas');
        let userFacesData = JSON.parse(localStorage.getItem("userFacesData")) || [];
        let faceUserName = userFacesData[0].user;


        $('html').removeClass('blur-screen');
        if(videoPlayer && videoPlayer.srcObject.getVideoTracks().length > 0) {
            videoPlayer.srcObject.getVideoTracks().forEach(function (track) {
                track.stop();
            });

        }
        clearInterval(this.state.clearScanTimeout);
        props.history.push(`/`);
        $('html').removeClass('blur-screen');
      /*this.setState({
          isLoggedIn:false,
      }, ()=>{

           secureHomePage(videoPlayer,canvasElement,faceUserName,this.state.isLoggedIn,props);
      })*/
    }

getSelectedClassesToBeBlurred=(event)=>{
   let classesToBeBlurred = [...this.state.classesToBeBlurred];
    if(event.target.checked)
    {
        if(event.target.value === 'FullPage')
        {
            classesToBeBlurred=[];
            classesToBeBlurred.push(event.target.value);
        }else {
            classesToBeBlurred.push(event.target.value);
        }

    }else {
        classesToBeBlurred.pop(event.target.value);
    }
    this.setState({classesToBeBlurred});

    // making dynamic blur
    if(classesToBeBlurred.includes('FullPage'))
    {
        $('html').removeClass('blur-screen');
        clearInterval(this.state.clearScanTimeout);
        let videoPlayer = document.querySelector('#player');
        let canvasElement = document.querySelector('#canvas');
        let userFacesData = JSON.parse(localStorage.getItem("userFacesData")) || [];
        let faceUserName = userFacesData[0].user;

        this.setState({

            clearScanTimeout:   secureHomePage(videoPlayer,canvasElement,faceUserName,this.state.isLoggedIn,this.props)
        });
    }else {


        $('html').removeClass('blur-screen');
        clearInterval(this.state.clearScanTimeout);

        let videoPlayer = document.querySelector('#player');
        let canvasElement = document.querySelector('#canvas');
        this.setState({

            clearScanTimeout: blurSpecificfields(videoPlayer, canvasElement, this.state.faceUserName, classesToBeBlurred)
        });


    }
   


}


render ()
{
 
  return (
    <div className="homepage">
      <Header headerItems={headerItems} logout={this.logout} buttonName={buttonName} />
      <Drawer selectedClasses={this.state.classesToBeBlurred} getSelectedClassesToBeBlurred={this.getSelectedClassesToBeBlurred} />
      <Camera />
      <Dashboard />
      <Footer />    
    </div>
  )
}

}
  
export default HomePage;
  
