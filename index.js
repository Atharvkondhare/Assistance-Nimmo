let box = document.querySelector(".box");
let btn= document.querySelector("button");

const speakFunc =(input) =>{
    let speakInput = new SpeechSynthesisUtterance(input);
    speakInput.lang='en-IN'
    window.speechSynthesis.speak(speakInput);
}

window.onload =()=>{
  // greetingFunc();
}

const greetingFunc=() =>{
    let date=new Date();
    let hour=date.getHours();

    if(hour >=0 && hour < 12){
        speakFunc("Good mornig sir,how can i help you");
      }else if(hour >=0 && hour < 16){
        speakFunc("Good afternoon sir, How can i help you")
      }else{
        speakFunc("Good evening sir, How can i help you")
      }
}

const startVoiceInput =()=>{
    if('webkitSpeechRecognition' in window)
        {
              let recognition = new webkitSpeechRecognition();
              recognition.lang= 'en-US';
              recognition.onresult=(e)=>{
               let spokenText=e.results[0][0].transcript;

               handleCommands(spokenText.toLowerCase());
               box.classList.remove("btn-box");
               btn.innerHTML=`<i class="fa-solid fa-microphone-lines-slash"></i>`
           

              }
              recognition.start();
        }else{
            alert("Your Browser does not support voice input")
        }
}

btn.onclick=()=>{
    box.classList.add("btn-box");
    btn.innerHTML=`<i class="fa-solid fa-microphone-lines"></i>`
    startVoiceInput();
}

const handleCommands=(command)=>{

    // console.log(command);
    if(command.includes("hey") || command.includes("hi") || command.includes("hello"))
        {
            speakFunc("Hello sir,How can i help you!");
          }  

          else if(command.includes("what is your name") || command.includes("our name") || command.includes("who"))
            {
                speakFunc("My name is Nimmo.. how can i help you");
              } 

         else if(command.includes("who are you") || command.includes("developed") || command.includes("who"))
            {
                speakFunc("I am virtual Assistant, developed by Atharv Kondhare ");
              }  

              else if(command.includes("open Google") || command.includes("google"))
                {
                    speakFunc("Opening ...google");
                    window.open("https://www.google.com/");
                    
                  }  

                  else if(command.includes("open Youtube") || command.includes("Youtbe"))
                    {
                        speakFunc("Opening ...youtube");
                        window.open("https://www.youtube.com/");
                        
                      }  

                      else if(command.includes("open facebook") || command.includes("facebook"))
                        {
                            speakFunc("Opening ...facebook");
                            window.open("https://www.facebook.com/");
                            
                          }  

                          else if(command.includes("open instagram") || command.includes("insta"))
                            {
                                speakFunc("Opening ...instagram");
                                window.open("https://www.instagram.com/");
                                
                              } 
                              else{
                                speakFunc(`This is what i found on interet "${command}"`);
                                    window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`);
                              } 

}