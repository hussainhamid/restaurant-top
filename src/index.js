import './styles.css';
import './menu.js';
import './homepage.js';


import { menuComponent } from './menu.js';
import { homeComponent } from './homepage.js';
import { contactComponent } from './contact.js';



const content = document.getElementById("content");


const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {

    content.innerHTML = "";

   document.body.appendChild(menuComponent())
   

});


const homeBtn = document.querySelector(".home");

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(homeComponent());
});

homeBtn.addEventListener("click", () => {

    content.innerHTML = '';

   document.body.appendChild(homeComponent());
});


const contactBtn = document.querySelector(".contact");

contactBtn.addEventListener('click', () => {

    content.innerHTML = "";

    document.body.appendChild(contactComponent());
});