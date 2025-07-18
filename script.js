let speech = new SpeechSynthesisUtterance(); // its an inbuilt js class for web speech api it has properties like text,lang,rate ,pitch

// adding changing voices option 
let voices=[];
let voiceSelect= document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices= window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i)=> (voiceSelect.options[i]= new Option(voice.name,i))); // activating drag drop 
};

voiceSelect.addEventListener("change",()=>{
    speech.voice= voices[voiceSelect.value];
// changing speech voice // value from select
});

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value; //ng value to text property 
    window.speechSynthesis.speak(speech); // function that trigger speech
});

