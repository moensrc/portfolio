// Define variables/arrays
// var urlList = ["./portfoliopages/willemwalvis.html", "./portfoliopages/noted.html", "./portfoliopages/hvacations.html", "./portfoliopages/boekenzoeker.html", "./portfoliopages/loafely.html", "./portfoliopages/powerup.html"];
// var children = document.getElementById("gallery").children;
var hours = new Date().getHours(); // collects time of day
var greeting = document.getElementById("greeting"); 
var myTitle = document.querySelector(".intro p span");
var titlesArr = ["visual designer", "front-end developer", "student cmd", "creatieveling", "ui/ux designer"];
var currentTitleIndex = 0;

// var favicon_images = ["./images/moon.png", "./images/star.png", "./images/heart.png", "./images/flower.png"],
// image_counter = 0

// function changes first h1 on home to time of day
if (greeting) {
  if (hours > 6 && hours < 12) {
    greeting.textContent = "Goedemorgen!";
  } else if (hours >= 12 && hours < 18) {
    greeting.textContent = "Goedemiddag!";
  } else if (hours >= 18 && hours < 24){
    greeting.textContent = "Goedenavond!";
  } else {
    greeting.textContent = "Goede nacht!"
  }
};

const configs =
  [
    { button: "prototypebutton", img: "prototypeimg", imgName: "block", pathPrefix: "../images" },
    { button: "pdfbutton", img: "pdfimg", imgName: "pdf-icon", pathPrefix: "../images" },
    { button: "githubbutton", img: "githubimg", imgName: "github", pathPrefix: "../images" },
    { button: "videobutton", img: "videoimg", imgName: "play-video-icon", pathPrefix: "../images" },
    { button: "webbutton", img: "webimg", imgName: "web1", pathPrefix: "../images" },
    { button: "portfoliobutton", img: "portfolioimg", imgName: "portfolio", pathPrefix: "./images" },
    { button: "contactbutton", img: "contactimg", imgName: "conversation", pathPrefix: "./images" },
    { button: "linkedinbutton", img: "linkedinimg", imgName: "linkedin-icon", pathPrefix: "./images" },
    { button: "instabutton", img: "instaimg", imgName: "insta-icon", pathPrefix: "./images" },
  ]

for (let configEntry of configs) {

  console.log(configEntry);
  let button = document.querySelector("." + configEntry.button) // this will get us the button ("." + "prototypebutton")
  if (!button) continue;
  let image = document.querySelector("." + configEntry.img); // the same as above.

  button.addEventListener("mouseover", function() {
    image.src = configEntry.pathPrefix + "/" + configEntry.imgName + "-yellow.png" 
  }, false)
  button.addEventListener("mouseleave", function() {
    image.src = configEntry.pathPrefix + "/" + configEntry.imgName + ".png" 
  }, false)
}

function changeTitle() {
  if (currentTitleIndex == titlesArr.length) {
    currentTitleIndex = 0;
  } 

  myTitle.textContent = titlesArr[currentTitleIndex];
  currentTitleIndex++
}

changeTitle()

setInterval(changeTitle, 2000);



// setInterval(function() {
//       // remove current favicon
//   if  (document.querySelector("link[rel='shortcut icon']") !== null) {
//     document.querySelector("link[rel='shortcut icon']").remove();
//   }
      
//   // add new favicon image
//   document.querySelector("head link:first-of-type") = '<link rel="shortcut icon" href="' + favicon_images[image_counter] + '" type="image/gif">';
  
//   // If last image then go to first image
//   // Else go to next image    
//   if (image_counter == 4) {
//     image_counter = 0;
//   }
//   else {
//     image_counter++;
//   }
// }, 400);
