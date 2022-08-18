export default class Dog{
    constructor(id){
        this.node = document.querySelector("#" + id);
        this.node.style.backgroundImage = "url('../../img/sprite sheets/6678d658b4c099e26c077bbc81d0a2e2.gif')"; 
        this.node.style.backgroundPosition = "center";
        this.node.style.width = 50 + "px";
        this.node.style.height = 50 + "px";
        this.node.style.position = "absolute"
        this.node.style.right = 0 + "px";
        this.node.style.bottom = 0 + "px";S

       
    }

    
    tick() {
     
    }
}