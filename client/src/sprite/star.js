export default class Star{
    constructor(){
        this.element = document.createElement("div");
        this.element.classList.add("star");
        this.parentNode = document.querySelector(".index");
        this.parentNode.append(this.element);
        this.deg = Math.random() * 810;
        this.element.style.transform = "rotate(" + this.deg + "deg)";
        this.speed = Math.random() * 5;
        this.element.style.left = Math.random() * screen.width + "px";
        this.element.style.top = Math.random() * screen.height + "px";
       
    }
    

    tick() {
        this.deg += this.speed;
        this.element.style.transform = "rotate(" + this.deg + "deg)";
        

            let alive = true;
    
            setTimeout (() => {
                alive = false
                this.element.remove();
            },10000)
            
          
            return alive;
       
    }
}