class Dog{

    constructor(id){
        // this pour conserver la vriable, let va la supprimer en sortant du constructeur
        this.node = document.querySelector("#" + id);
        this.node.style.top = (Math.random() * 40)+ "px";
        this.node.style.left = (Math.random() * 400) + "px";

        this.speed = 2;
        this.velocityY = 0.5; //acceleration
    }

    // va etre appelet chaque 60ms
    tick() {
        this.speed += this.velocityY;
        let y = this.node.offsetTop;
         y += this.speed;

            if( y > 220){
                this.speed = -this.speed/1.5;
                y=220;
            }

         this.node.style.top = y + "px";
    }
}