import * as faceapi from 'face-api.js';
import $ from "jquery";

const MODEL_URL = '/model';
let globalFaceMatcher;

//load all models
 export const loadFaceModels = async () => {

   // await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
    await faceapi.loadFaceLandmarkModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);

};


$( document ).ready(function() {
    // loadFaceModels().then(result => {
    //     // this parse may fail
    //     const data = JSON.parse(result);
    //     console.log(data);
    //   })
    //   //  handle asynchronous errors
    //    .catch((err) => {
    //      console.log(err);
    //    })
    loadFaceModels();

});


//get face matcher 
export const getFaceMatcher = async (userfaces) => {
    const labeledDescriptors = [];
    let descriptors = userfaces[0].descriptor.map(desc => {
       
        if(desc.descriptor) {
             let descArray = [];
             for (var i in desc.descriptor){
                descArray.push(parseFloat(desc.descriptor[i]));
             }
           return new Float32Array(descArray);
        }

    });

    if(descriptors.length) {
        labeledDescriptors.push(
            new faceapi.LabeledFaceDescriptors (
                userfaces[0].user,
                descriptors
            ));
    }
    globalFaceMatcher = await new faceapi.FaceMatcher(labeledDescriptors);
     

};

//start camera 
export const startCamera = async (videoPlayer,canvasElement) => {

    let context = canvasElement.getContext('2d');

    if (!('mediaDevices' in navigator)) {
        navigator.mediaDevices = {};
      }
  
      //Polyfill
      if (!('getUserMedia' in navigator.mediaDevices)) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  
          if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented!'));
          }
  
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        }
      }
  
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
  
          videoPlayer.srcObject = stream;
         
  
        })
        .catch(function (err) {
          console.log(err);
         
        });

        return context;
};
/*const killCamera =()=>{

}*/
//secureHomePage full page blur
export const secureHomePage = async (videoPlayer,canvasElement,faceUserName,isLoggedIn,props) => {
    let scanInterval;
    if(isLoggedIn) {

        let context = await startCamera(videoPlayer, canvasElement);

         scanInterval= setInterval(async () => {

            context.drawImage(videoPlayer, 0, 0, 320, 247);

            let allFacesDetection = await faceapi.detectAllFaces(canvasElement).withFaceLandmarks().withFaceDescriptors();
            //debugger;
            if (allFacesDetection.length) {
                //debugger;

                allFacesDetection.forEach(async item => {
                    const bestMatch = await globalFaceMatcher.findBestMatch(item.descriptor);
                    let matchedUser = bestMatch.toString();
                    console.log("matched user : " + matchedUser);

                    //Blur
                    let regUserName = new RegExp(faceUserName, 'g');

                    if (matchedUser.match(/unknown/g)) {
                        $('html').addClass('blur-screen');
                    } else if (matchedUser.match(regUserName) && bestMatch._distance > 0.2) {
                        $('html').removeClass('blur-screen');
                    }


                });

            } else if(!isLoggedIn){
                clearInterval(scanInterval)
                $('html').removeClass('blur-screen');
            }
            else {
                $('html').addClass('blur-screen');
            }

        }, 60 / 1000);
    }else{
        $('html').removeClass('blur-screen');
        let videoPlayer = document.querySelector('#player');
        if(videoPlayer && videoPlayer.srcObject.getVideoTracks().length > 0) {
            videoPlayer.srcObject.getVideoTracks().forEach(function (track) {
                track.stop();
            });

        }
        clearInterval(scanInterval)
        props.history.push(`/`);
        $('html').removeClass('blur-screen');
    }
  return scanInterval;

};



export default { loadFaceModels , getFaceMatcher  , startCamera , secureHomePage } ;