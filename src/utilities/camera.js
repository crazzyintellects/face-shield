
 const initializeMedia = (playerDiv,videoPlayer,canvasElement) => {

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
       // canvasElement.style.display = 'none';
        playerDiv.style.display = 'flex';
        videoPlayer.style.display = 'block';
       

      })
      .catch(function (err) {
        console.log(err);
       
      });

  };




  export default initializeMedia;