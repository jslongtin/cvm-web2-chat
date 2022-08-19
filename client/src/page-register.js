import {register} from './chat-api';

import Dog from './sprite/Dog.js';
let spriteList = [];

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this);
    }
    document.onclick = () => {
        spriteList.push(new Dog());
    }
    
    tick();
})
const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const sprite = spriteList[i];
        let alive = sprite.tick();

        if (!alive) {
            spriteList.splice(i, 1);
            i--;
        }
    }

    window.requestAnimationFrame(tick);
}