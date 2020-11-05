import "./styles.css";

let face1 = document.getElementById("face1");
let faceImg = document.getElementById("face");

let laughs = [
  "haha, that is so funny",
  "wow. hilarious",
  "L O L",
  "I swear I am laughing inside",
  "L M F A O"
];

let laughCount = 0;

function enableAutoTTS() {
  if (typeof window === "undefined") {
    return;
  }
  const isiOS =
    navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  if (!isiOS) {
    return;
  }
  const simulateSpeech = () => {
    const lecture = new SpeechSynthesisUtterance("hello");
    lecture.volume = 0;
    speechSynthesis.speak(lecture);
    document.removeEventListener("click", simulateSpeech);
  };

  document.addEventListener("click", simulateSpeech);
}

enableAutoTTS();

console.log("hello from script");
const synth = window.speechSynthesis;

const speak = (text) => {
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }
  let utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis);
};

function speakFunction() {
  speak(laughs[laughCount]);
  console.log("speaking");
}

function laughSelected() {
  laughCount = (laughCount + 1) % laughs.length;
  speakFunction();
}

let notSmile = true;

function laughBot() {
  if (notSmile) {
    notSmile = false;
  } else {
    notSmile = true;
  }
  switchFace();
}

function switchFace() {
  if (notSmile) {
    faceImg.src = "./img/face1.svg";
  } else {
    faceImg.src = "./img/face2.svg";
  }
}

face1.addEventListener("click", laughSelected);

face1.addEventListener("click", laughBot);
