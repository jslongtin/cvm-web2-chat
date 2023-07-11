import {register} from './chat-api';

import Dog from './sprite/Dog.js';
let spriteList = [];

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this);
    }
    document.querySelector("img").onclick = () => {
        spriteList.push(new Dog());
    }
    document.querySelector(".box").onmouseenter = () => {
        document.querySelector("button").style.color = "orange";
        document.querySelector("button").style.border = 2 + "px solid orange";
    }
    document.querySelector(".box").onmouseleave = () => {
        document.querySelector("button").style.color = "";
        document.querySelector("button").style.border = 0 + "";
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