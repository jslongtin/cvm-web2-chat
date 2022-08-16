import {signin} from './chat-api';

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
document.body.style.backgroundImage= "url('../img/Backgrounds/9a2aa3ccba5c3bce83e2e3f0a607c147.png')";
console.log("dfds");
});

