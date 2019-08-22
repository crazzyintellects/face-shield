import React , {Component} from 'react';
import Header from '../../components/Header/Header';
import CaptureFace from '../../components/VerifyFace/CaptureFace';
import Footer from '../../components/Footer/Footer';
import Divider from '@material-ui/core/Divider';
import  '../../utilities/faceMaster';
//import loadFaceModels from '../../utilities/faceMaster';




const headerItems = [
  'Contact Us',
  'Feedback',
];

const buttonName = 'Log out';

class LoginPage extends Component {
  
  // useEffect(() => {
  //   loadFaceModels();
  // });
// componentDidMount = () => {
//   loadFaceModels();
// }
  
  render () {

    return (
 
    <div className="twoFactorAuthPage">
      <Header headerItems={headerItems} buttonName={buttonName} />
      <CaptureFace /> 
      <Divider />
      <Footer />    
    </div>

    )
  
  }

};

 
  
  export default LoginPage;
  