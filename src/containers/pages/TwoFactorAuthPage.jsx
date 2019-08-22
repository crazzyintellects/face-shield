import React , {Component} from 'react';
import Header from '../../components/Header/Header';
import CaptureFace from '../../components/VerifyFace/CaptureFace';
import Footer from '../../components/Footer/Footer';
import Divider from '@material-ui/core/Divider';
import  '../../utilities/faceMaster';
import VerifyFace from '../../components/VerifyFace/VerifyFace';
//import loadFaceModels from '../../utilities/faceMaster';




const headerItems = [
  'Contact Us',
  'Feedback',
];

const buttonName = 'Log out';

class LoginPage extends Component {

  state = {
    showVerifyPage :false,
  };

  
  // useEffect(() => {
  //   loadFaceModels();
  // });
// componentDidMount = () => {
//   loadFaceModels();
// }
  
componentDidMount = () => {
  
     if(typeof(Storage) !== undefined){
       if(localStorage.userDataStored){
        this.setState({
          showVerifyPage: true,
        });
   
       }
     }

}


  render () {

    return (
 
    <div className="twoFactorAuthPage">
      <Header headerItems={headerItems} buttonName={buttonName} />
      {
        this.state.showVerifyPage ? (<VerifyFace />)   : (<CaptureFace /> )
      }
      
      <Divider />
      <Footer />    
    </div>

    )
  
  }

};

 
  
  export default LoginPage;
  