const bodyElement = document.querySelector("body");
bodyElement.style.backgroundColor = "#e9e9e9";

const zpravy = document.querySelector(".news");
zpravy.style.backgroundColor = "white";
zpravy.style.maxWidth = "60rem";

const nadpis = document.querySelector("h1");
nadpis.classList.add("news__title");
nadpis.textContent = "Aktuální novinky";

const zprava1 = document.querySelector("#zprava1");
zprava1.classList.add("post--main");

const obrazek = document.querySelector("#zprava3 .post__picture");
obrazek.src = "images/zprava3-novy.jpg";