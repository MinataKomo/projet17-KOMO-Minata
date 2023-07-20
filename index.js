// selecteurs
// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");

// click event
const questionContainer = document. querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
   const btn2 = document.getElementById('btn-2');
   const response = document.querySelector("p");
   
    
   
// console.log(questionContainer);
questionContainer.addEventListener("click", () => {
   questionContainer.classList.toggle("question-clicked");
});
 
btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
});

/*<div> > #id > .class > baliseHTML */ 



// -------------------------------------------------
// mouse mouve
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
   mousemove.style.left = e.pageX + "px"; 
   mousemove.style.top = e.pageY + "px"; 
});

window.addEventListener("mousedown" , () => {
   mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
   
window.addEventListener("mouseup" , () => {
   mousemove.style.transform = "scale(2) translate(-50%, -50%)";
   mousemove.style.border = "2px solid teal"; 
});
questionContainer.addEventListener("mouseenter", () => {
   questionContainer.style.background = "rgb(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout" , () => {
   questionContainer.style.background = "pink";
});
response.addEventListener("mouseover" , () => {
   response.style.transform = "rotate(2deg)";
});
//------------------------------------------------------
//keypress
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
   const audio = new Audio();
   audio.src = key + ".mp3";
   // console.log("audio.src");
   audio.play();
};


document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  
  if(e.key === "j") {
     keypressContainer.style.background = "pink";
  }
  else if (e.key === "h") {
     keypressContainer.style.background = "teal";
  }
  else{
     keypressContainer.style.background = "red";
  }
  if (e.key === "Z") ring("e.key");
});
//------------------------------------------------------
//scroll event

const nav = document.querySelector("nav");
// console.log(nav);
window.addEventListener("scroll", () => {
   console.log(window.scrollY);
   
   if (window.scrollY > 120){
      nav.style.top = 0;
   } else{
      nav.style.top = "-50px"
   }
});


//-----------------------------------------------------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let langage = "";



inputName.addEventListener('input',(e) => {
   pseudo  = e.target.value;
});

select.addEventListener("input", (e) => {
   // console.log("e.target.value");
   langage = e.target.value;
});

form.addEventListener("submit", (e) => {
   e.preventDefault();
   
   
   
   if (cgv.checked) {
   document.querySelector("form > div").innerHTML = `
   <h3>pseudo : ${pseudo}</h3>
   <h4>langage préféré : ${langage}</h4>
   `;
   
   } else{
      alert("veuillez accepter les CGV");
   }
   
});

//-------------------------------------------------------

//LOad event
window.addEventListener("load", () => {
   console.log("document chargé");
});
//----------------------------------------------------
//ForEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
console.log(boxes);
// boxes.addEventListener("click", () => console.log("text"))
boxes.forEach((box) => {
   box.addEventListener("click", (e) => {
      e.target.style.transform = "scale(0.7)";
   });
});
//----------------------------------------------------------
// addEventListener vs onclick
// 
//BUBBLING => fin (de base l'eventlisner est parametré en mode bubbling)
document.body.addEventListener("click", () => {
   console.log("click 1 !");
});
// Usecapture
document.body.addEventListener("click", () => {
   console.log("click 2 !");
},
 true
); 
//https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/
//---------------------------------------------------------------------
//stop propagation
// questionContainer.addEventListener("click", (e) => {
//    alert("test !");
//    e.stopPropagation();
// });


//removeEventlistener
//----------------------------------------------------------
//BOM
// console.log(window.innerHeight);
// console.log(window.scrollY);
//window.open("http://google.com", "cours js", "heigth=600, width=800");
// window.close()


//evenement adossée a windows
// window.alert("hello")
btn2.addEventListener("click", () => {
   confirm("voulez vous vraiment vous tromper ?");
});

//prompt
btn1.addEventListener("click", () => {
   let answer = prompt("Entrez votre nom");
   
   questionContainer.innerHTML += "<h3>Bravo" + answer + "</h3>";
});

setTimeout(() => {
   //logique a executer
   questionContainer.style.borderRadius = "300px";
}, 2000);

let interval = setInterval(() => {
   document.body.innerHTML += 
   `
      <div class='box'>
         <h2> Nouvelle boite !</h2>
      </div>
   `;
}, 1000);
document.body.addEventListener("click", (e) => {
   e.target.remove();
   clearInterval(interval);
});
 //location
//  console.log(location.href);
//  console.log(location.host);
//  console.log(location.pathname);
//  console.log(location.search);
 // localisation.replace("http://lequipe.fr");
 
//  window.onload = () => {
//     location.href = "http://twiter.fr";
//  }

//navigator
// console.log(navigator.userAgent);

//https://developer.mozilla.org/fr/docs/web/API/Geolocation/getCurrentPosition


//HISTORY
// console.log(history);
// window.history.back();
// history.go(-2);
//---------------------------------------------------------------
window.addEventListener("mousemove", (e) => {
   nav.style.setProperty("---x", e.layerX + "px");
   nav.style.setProperty("---y", e.layery + "px");
});