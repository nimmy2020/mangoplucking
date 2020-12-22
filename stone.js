class Stone{
    constructor(x,y){
        this.image=loadImage("Plucking mangoes/stone.png");
        var options={
            isStatic:false,
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,30,30,options);
        World.add(world,this.body);
    }
    display(){
        push ();
        image(this.image,this.body.position.x,this.body.position.y,30,30);
        pop ();
    }
}