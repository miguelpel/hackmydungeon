import Component from "./Component";

import './scss/main.scss';
import './sass/main.sass';
import './css/app.css';


let component = new Component();

document.body.appendChild(component.element);

console.log('Hello, world!');