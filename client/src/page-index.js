import { signin } from './chat-api';
import Dog from './sprite/Dog.js';

let spriteList = [];

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }

    let node = document.createElement("div");
    node.id = "dog";
    let parentNode = document.querySelector(".index");
    parentNode.append(node);
    spriteList.push(new Dog("dog"));
    tick();
});

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
