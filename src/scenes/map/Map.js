import { mapLayout } from './layout';

export default class Map {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList = "map";
        this.element.innerHTML = mapLayout;
    }
}