export default class Dog{
    constructor(){
        let x = screen.width + 10;
        
        
    
        this.node = document.createElement("div");
        this.node.classList.add("dog");
        this.parentNode = document.querySelector(".register");
        this.parentNode.append(this.node);
        
        this.node.style.width = 200 + "px";
        this.node.style.height = 150 + "px";
        this.node.style.position = "absolute"
        this.node.style.left = x + "px";
        this.node.style.bottom = 2 + "px";
        
        this.speed = -5.0;
        
    }

    
    tick() {
        let posX = this.node.offsetLeft ;
        posX += this.speed;
        this.node.style.left = posX + "px";
        
        let alive = true;

        if (posX  < 0) {
            alive = false;
            this.node.remove();
        }
        
        return alive;
    }
    }
