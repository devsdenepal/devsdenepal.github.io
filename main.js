
var message = "Devs d'e Nepal is an independent private/non-commercial reasearch platform related to cyber and cyber-security.";

let wpmil = 50; 
let i=0;
typeWriter();
function typeWriter() {
  if (i < message.length) {
    document.getElementById("message").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, wpmil);
  }
  else{
    document.getElementById("post-message").style.display = "block";
    document.getElementById("audio").innerHTML="";
  }
}
