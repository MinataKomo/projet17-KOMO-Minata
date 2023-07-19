// selecteurs
// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");

// click event
const questionContainer = document.querySelector(".click-event");
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
const mousemouve = document.querySelector(".mousemouve");

window.addEventListener("mousemove", (e) => {
   mousemouve.style.left = e.pageX + "px"; 
});