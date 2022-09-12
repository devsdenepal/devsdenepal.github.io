// Credits to Developer Nikhil Anand for developing such a script.
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
let the_author = th_author.replace("1", "G").replace("2", "a").replace("3", "u").replace("4", "t").replace("5", "a").replace("6", "m").replace("7", "K");
if (default_alert == false) {
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
function Validate(sek) {
  var q = new XMLHttpRequest();
  q.open("POST", "validate.php" + sek, true);
  if (q.onreadystatechange && q.status == 200) {
    prevention_mode = this.Response;
  }
  else {
    console.log(sek);
  }
  q.send();
}
if (prevention_mode == true) {
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
if (debug_modes == true) {
  debug_mode();
  function debug_mode() {
    window.onerror = function (error, page, line) {
      let getUrl = window.location;
      let baseUrl = getUrl.protocol + "//" + getUrl.host[1];
      let error_art = error.charAt(0).toLowerCase();
      if (error_art == "a" || error_art == "e" || error_art == "i" || error_art == "o" || error_art == "u") {
        a_an = "an";

      }
      else {
        a_an = "a"
      }

      alert("OOPS!\nWe found " + a_an + " " + error.toLowerCase() + " in line " + line + " of " + page.replace(window.location.protocol + "//" + window.location.host, ""));
    };
  }
}
function subscribe() {
  window.open("https://youtube.com/c/devcommunitynepal/?sub_confirmation=1",);
}
function navigate(page) {
  let link = "../"+page;
  window.open(link, "_self");
  let spinner = document.createElement("div");
  spinner.className = "spinner";
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
//   const observer_for_hr = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('expanded');
//       }
//     });
//   });

//   observer_for_hr.observe(document.querySelector('dcn-hr'));

// setTimeout(change_slide,6000);

//making dcn-link href working
let link = document.getElementsByTagName("dcn-link")
document.getElementsByTagName("dcn-link").onclick = function () {
  window.open(link, "_blank");
}
function toggle_theme(theme) {

  var body = document.body;
  body.classList.toggle("dark-theme");
  if (document.getElementById(theme).src = "../assets/icons/night.png") {
    document.getElementById(theme).src = "../assets/icons/sun-rotating.gif";
    setTimeout(document.getElementById(theme).src = "../assets/icons/sun.png", 2000);
    // 
  }
  else {
    document.getElementById("0").src = "../assets/icons/night.gif";
  }
}
const URL =
  "posts.json";
setTimeout(feed_more, 2500);
setInterval(feed_more, 10000);
feed_more();
function feed_more() {
  let main = document.querySelector("div");
  main.className = "main";
  console.log("Succesfully loaded more data.");
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      // data.posts[].thumbnail, data.posts[].name
      data.post.forEach(post => {
        let container = document.createElement("div");
        container.className = ".container";
        let card = document.createElement("div");
        card.className = "card";
        //card elements{
        let card_header = document.createElement("div");
        card_header.className = "card_header";


        let card_body = document.createElement("div");
        card_body.className = "card_body";
        let category_span = document.createElement("span");
        category_span.textContent = post.category;
        category_span.classList += "tag tag-blue";
        if (post.thumbnail !== "not-available") {
          
        }

        let card_article = document.createElement("p");
        card_article.textContent = post.article;
        let card_footer = document.createElement("div");
        card_footer.className = "card_footer";
        let card_source = document.createElement("div");
        card_source.className = "user";
        let card_source_info = document.createElement("div");
        card_source_info.className = "user_info";
        let card_source_info_h5 = document.createElement("span");
        // card_source_info_h5.style.textAlign = "center";
        card_source_info_h5.textContent = post.source.replace("fb", "Facebook Page");
        let card_src_img = document.createElement("img");
        card_src_img.classList = "icon round";
        card_src_img.src = `../assets/icons/${post.source}.jpg`;
        let card_headings = document.createElement("h4");
        main.appendChild(container);
        container.appendChild(card);
        card_headings.textContent = post.name;
        card_body.appendChild(card_headings);
        card_body.appendChild(card_article);
        if (post.thumbnail != "not-available") {
          let thumbnail = document.createElement("img");
          thumbnail.src = `http://localhost/github/devsdenepal.github.io/dcn.com/assets/images/${post.thumbnail}`;
          thumbnail.alt = post.name;
          thumbnail.className = "card_image";
          card_header.appendChild(thumbnail);
        }
        card.appendChild(card_header);
        card_header.appendChild(category_span);
        card.appendChild(card_body);
        card.appendChild(card_footer);
        card_footer.appendChild(card_source);
        card_footer.appendChild(card_source_info);
        card_source_info.appendChild(card_source_info_h5);
        card_source.appendChild(card_src_img);
        card_footer.appendChild(document.createElement("br"));
        card_headings.appendChild(document.createElement("br"));
        card_footer.appendChild(document.createElement("br"));
      });
    });
}
