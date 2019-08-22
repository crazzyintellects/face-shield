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

//secureHomePage full page blur
export const secureHomePage = async (videoPlayer,canvasElement,faceUserName) => {

   let context = await startCamera(videoPlayer,canvasElement);
   
   setInterval(async () => {

    context.drawImage(videoPlayer, 0, 0, 320, 247);
       
    let allFacesDetection = await faceapi.detectAllFaces(canvasElement).withFaceLandmarks().withFaceDescriptors();

    if(allFacesDetection.length) {
         
        allFacesDetection.forEach(async item => {
            const bestMatch = await globalFaceMatcher.findBestMatch(item.descriptor);
            let matchedUser = bestMatch.toString();
            console.log("matched user : " + matchedUser);
            
            //Blur
             let regUserName = new RegExp(faceUserName, 'g');
             
             if(matchedUser.match(/unknown/g)){
                $('html').addClass('blur-screen');
             } else if (matchedUser.match(regUserName) && bestMatch._distance > 0.2) {
                $('html').removeClass('blur-screen');
             }



    });

    } else {
        $('html').addClass('blur-screen');
    }

   }, 60/1000);
   
  

};



//verifyLogin 
export const verifyLogin = async (videoPlayer,canvasElement,faceUserName) => {

  let context = await startCamera(videoPlayer,canvasElement);
  let scan = document.querySelector('.face-id-wrapper');

  let loginCount = 0;
  let unknownCount = 0;
  
  const scanForVerify = setInterval(async () => {

   context.drawImage(videoPlayer, 0, 0, 320, 247);
      
   let allFacesDetection = await faceapi.detectAllFaces(canvasElement).withFaceLandmarks().withFaceDescriptors();

   if(allFacesDetection.length) {
        
       scan.classList.add('animate-scan');
        
       allFacesDetection.forEach(async item => {

           const bestMatch = await globalFaceMatcher.findBestMatch(item.descriptor);
           let matchedUser = bestMatch.toString();
           console.log("matched user : " + matchedUser);
           
           //Blur
            let regUserName = new RegExp(faceUserName, 'g');
            
            if(matchedUser.match(/unknown/g)){
               loginCount = 0;
               unknownCount++;

               if(unknownCount > 20) {
                scan.classList.remove('animate-scan');
                scan.classList.add('scan-error');
                unknownCount = 0;
               }

            } else if (matchedUser.match(regUserName) && bestMatch._distance > 0.2) {
              loginCount++;
              console.log("loginCount : " + loginCount);

               if(loginCount === 7) {
                scan.classList.remove('animate-scan');
                scan.classList.remove('scan-error');
                scan.classList.add('scan-success');

                //stop player
                videoPlayer.srcObject.getVideoTracks().forEach(function (track) {
                  track.stop();
                });

                clearInterval(scanForVerify);


               }

            }



   });

   } else {
       
   }

  }, 60/1000);
  
 

};






export default { loadFaceModels , getFaceMatcher  , startCamera , secureHomePage  , verifyLogin} ;