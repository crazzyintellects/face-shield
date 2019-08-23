let synth;
let voices;

if('speechSynthesis' in window) {
    synth = window.speechSynthesis;
    voices = synth.getVoices();
}

speechSynthesis.onvoiceschanged = () => {
  voices = synth.getVoices();

}

const speakMsg = (utterMsg) => {

    let utterThis = new SpeechSynthesisUtterance(utterMsg);

    utterThis.onend = (event) => {
        console.log("onend");
    }

    utterThis.onerror = (event) => {
        console.log("onerror");
    }

    utterThis.pitch =1;
    utterThis.rate = 1;
    utterThis.voice = voices[48];

    synth.speak(utterThis);

};

export default speakMsg;