class Tree{
    constructor(x,y){
        this.image=loadImage("Plucking mangoes/tree.png");
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,100,100,options);
        World.add(world,this.body);
    }
    display(){
        push ();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,500,300)
        pop ();
    }
}