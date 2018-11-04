import Map from "./scenes/map/Map";

//import { mapLayout } from './scenes/map/layout';

import './scss/main.scss';
import './sass/main.sass'; 
import './css/app.css';

let map = new Map();
let gameContainer = document.getElementById('game_container')
gameContainer.appendChild(map.element);

console.log('Hello, world!');