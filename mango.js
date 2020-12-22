class Mango{
    constructor(x,y){
        this.image=loadImage("Plucking mangoes/mango.png")
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }
    display(){
        push ();
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop ();
    }
}