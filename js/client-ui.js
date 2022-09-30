/*
  ** copyright 2022. Vlavar Inc **
  ** All Rights Reserved **
  ** Built and developed by  Only1Drhex  **
*/
"use strict"

const mobileMenu =  document.querySelector(".mobile-nav");
const burger = document.querySelector(".hamburger");
const mobileNav = document.getElementById("mobile-navbar");
const fadedText = document.getElementsByClassName("text-fade");
const desktopNav = document.getElementById("desktop");
const container = document.getElementById("container");
const logo = document.getElementById("logo");
const input = document.querySelector(".form");
const search = document.getElementById("search");
const searchmobile = document.getElementById("search-mobile");
const anchorTags = document.getElementsByTagName("a");
const footer = document.querySelectorAll(".footer-slct");
const body = document.getElementsByTagName("body")[0];
const items = document.querySelector(".items");
const navLink = document.querySelectorAll(".nav-link");


burger.addEventListener("click", function(){
    this.classList.toggle("active");
     mobileMenu.classList.toggle("active");
    fadeTheTexts();
     
    if(mobileMenu.classList.contains("active")){
            body.style.cssText = "background-color:  #00000099;";
            document.style.cssText = "background-color:  #00000099;";
            logo.style.cssText = "color: var(--navy);"
            footer.forEach((x) => x.classList.remove("footer-bg").add("footer-bg-grey"));
          

}

else {
body.style.cssText = "background-color: var(--light);"
logo.style.cssText = "color: var(--dark);"
}

 });

 footer.forEach((x) => x.addEventListener("click", function(e){
    burger.classList.remove("active");
    mobileMenu.classList.remove("active");
    body.style.cssText = "background-color: #fcfcfc;"
    fadeTheTexts();
 }));


 input.addEventListener("submit", function(e){
    e.preventDefault();
    let text = document.getElementById("x").value.trim().replace(/[\s]+/g,"+");
    if(text == "" || text == " "){
        alert("Invalid query string.");
    }
    else {
        location.href = "/searchdb/" + text
    }
    
    });
    

search.addEventListener("click", function(e){
  let searchContainer = document.querySelector(".search"); 
  searchContainer.classList.toggle("active");
    });
searchmobile.addEventListener("click", function(e){
    let searchContainer = document.querySelector(".search"); 
    searchContainer.classList.toggle("active");
    });

container.addEventListener("click", function(e){
burger.classList.remove("active");
mobileMenu.classList.remove("active");
body.style.cssText = "background-color: #fcfcfc;"
fadeTheTexts();
});

navLink.forEach((x) => x.addEventListener("click", function(){
burger.classList.remove("active");
mobileMenu.classList.remove("active");
body.style.cssText = "background-color: #fcfcfc;"
fadeTheTexts();
}));

const fadeTheTexts = function(){
    let i = 0;
    while(i<fadedText.length){
    fadedText[i].classList.toggle("animated");
    fadedText[i].classList.toggle("animatedFadeInUp");
    fadedText[i].classList.toggle("fadeInUp");
    i++
    }
}

try {
    renderMathInElement(document.querySelector('body'), {  
    delimiters: [
{left: "$$", right: "$$", display: true},
// {left: "$", right: "$", display: false},
{left: "\\(", right: "\\)", display: false},

{left: "\\begin{align}", right: "\\end{align}", display: true},
{left: "\\begin{align*}", right: "\\end{align*}", display: true},
{left: "\\begin{alignat}", right: "\\end{alignat}", display: true}, 
{left: "\\begin{alignat*}", right: "\\end{alignat*}", display: true},  
{left: "\\begin{alignedat}", right: "\\end{alignedat}", display: true},
{left: "\\begin{array}", right: "\\end{array}", display: true},
{left: "\\begin{CD}", right: "\\end{CD}", display: true},
{left: "\\begin{equation}", right: "\\end{equation}", display: true},
{left: "\\begin{equation*}", right: "\\end{equation*}", display: true},
{left: "\\begin{gather}", right: "\\end{gather}", display: true},
{left: "\\begin{matrix}", right: "\\end{matrix}", display: true},
{left: "\\begin{bmatrix}", right: "\\end{bmatrix}", display: true},
{left: "\\[", right: "\\]", display: true}
],
throwOnError : false
});

} catch (e) {
if (e instanceof katex.ParseError) {
  html = ("Error in LaTeX '" + texString + "': " + e.message)
            .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
} else {
  throw e;
}
}






