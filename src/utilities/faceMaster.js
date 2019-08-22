import * as faceapi from 'face-api.js';
//import $ from "jquery";

const MODEL_URL = '/model';






//load all models
const loadFaceModels = async () => {

   // await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
    await faceapi.loadFaceLandmarkModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);

};



// $( document ).ready(function() {
//     loadFaceModels().then(result => {
//         // this parse may fail
//         const data = JSON.parse(result)
//         console.log(data)
//       })
//       //  handle asynchronous errors
//        .catch((err) => {
//          console.log(err)
//        })
// });

export default loadFaceModels;