// Credits to Developer GautamKumar for developing such a script.
// NO LICENSE REQUIRED FOR RUNNUNG THIS SCRIPT
// Purpose: For emergency use only
var original_elements = document.body.innerHTML;
var last_edit;
const key = 10927;
let debug_modes = true;
const prevention_mode = false;
const default_alert = true;
var default_style = '<link rel = "stylesheet" href="default.css"></link>';
function run() {

    document.write(default_style + "</head><body><script>" + document.getElementById("editor").value + "</script></body>");
}
let th_author = "123456_7umar";
let the_author= th_author.replace("1","G").replace("2","a").replace("3","u").replace("4","t").replace("5","a").replace("6","m").replace("7","K");
if(default_alert == false){
    function alert(text, position, top, left, right, bottom) {

        console.log(position);
        if (text == undefined) {
    
            alert("Alert Succeded -Gautam");
            console.warn("undefined value");
    
        }
        else {
            last_edit = original_elements;
            document.body.innerHTML = '<div class="blur-bg"><div class="popup-alert"><div class="x" onclick="cancel_alerts()">X</div>' + text + '</div>' + original_elements + '</div>';
        }
    }
    
    function cancel_alerts() {
        document.body.innerHTML = last_edit;
    }
}
function Validate(sek){
     var q = new XMLHttpRequest();
    q.open("POST", "validate.php" +sek,true);
  if(q.onreadystatechange && q.status == 200){
    prevention_mode = this.Response;
  }
  else{
    console.log(sek);
  }
    q.send();
}
if(prevention_mode == true) {
    // Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
    Validate(key);
    function warn() {
        console.warn("We don't accept peepers 😈");
    }
    setInterval(warn, 580);
    setInterval(console.clear, 600);

}
if(debug_modes == true){
    debug_mode();
function debug_mode(){
    window.onerror = function(error, page, line) {  
        let getUrl = window.location;
        let baseUrl = getUrl .protocol + "//" + getUrl.host[1];
        let error_art = error.charAt(0).toLowerCase();
        if(error_art == "a" ||error_art == "e"||error_art == "i"||error_art == "o"||error_art == "u"){
             a_an = "an";
    
        }
        else{
             a_an = "a"
        }
        
        alert("OOPS!\nWe found "+a_an +" "+error.toLowerCase()+" in line " + line+" of "+page.replace(window.location.protocol+"//"+window.location.host,""));
      };
}
}
function subscribe(){
    window.open("https://youtube.com/c/devcommunitynepal/?sub_confirmation=1",);
}
function navigate(page){
   let link = page + ".php";
    window.open(link,"_blank");
}
// const observer = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible

const author = the_author;
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('right-slider');
//       }
//     });
//   });
  
//   observer.observe(document.querySelector('dcn-grids'));
  const observer_for_hr = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('expanded');
      }
    });
  });
  
  observer_for_hr.observe(document.querySelector('dcn-hr'));
let slide = document.getElementById("preview").src;
let slided = 0;
setTimeout(change_slide,6000);
function change_slide(){
  if(document.getElementById("preview").src && slided==0){
    document.getElementById("preview").src = "assets/images/intro_6s.webp"
 setTimeout(slide2,1500);
    function slide2(){
  document.getElementById("preview").src = "assets/images/30dc_6s.webp"

 }
 setTimeout(slide3,1500);
 function slide3(){
  document.getElementById("preview").src = "assets/images/c_6.webp"

 }
 setTimeout(slide4,1500);
 function slide4(){
  document.getElementById("preview").src = "assets/images/s_6.webp"

 }
}
setTimeout(change_slide2,12000);
function change_slide2(){
 setTimeout(slide5,1500);
 function slide5(){
  document.getElementById("preview").src = "assets/images/l_6.webp"

 }
 setTimeout(slide6,1500);
 function slide6(){
  document.getElementById("preview").src = "assets/images/m_6.webp"

 }
 setTimeout(slide7,1500);
 function slide7(){
  document.getElementById("preview").src = "assets/images/n_6.webp"

 }
     }
  slided = 0;
  console.log(document.getElementById("preview").src);
}
//making dcn-link href working
let link = document.getElementsByTagName("dcn-link")
document.getElementsByTagName("dcn-link").onclick = function(){
window.open(link,"_blank");
}
function toggle_theme(theme){
if(theme<2){
  document.getElementById(theme).id += 1;
if(theme="0"){
 var body = document.body;
  body.classList.toggle("dark-theme");
var header = document.getElementById("hdr");
header.classList.toggle("dark-theme");
var caption = document.getElementById("cptn");
caption.classList.toggle("dark-theme");
var special_button = document.getElementById("wtb");
special_button.classList.toggle("dark-theme");
}
}
}