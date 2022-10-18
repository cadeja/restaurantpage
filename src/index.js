import './css/reset.css';
import './css/style.css';

import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const content = document.getElementById('content');


function InitPage(){
    
    const header = document.createElement('header');
    header.innerHTML = 
        `<nav>
            <ul>
                <li id='home-btn'>Home</li>
                <li id='menu-btn'>Menu</li>
                <li id='contact-btn'>Contact</li>
            </ul>
        </nav>`

    const main = document.createElement('main');

    const footer = document.createElement('footer');
    footer.textContent = 'copyright Cade England 2022';


    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}

InitPage();
loadHome();

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
contactBtn.addEventListener('click', loadContact);

