class Boy{
    constructor(x,y){
        this.image=loadImage("Plucking mangoes/boy.png");
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,200,200,options);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,200,200)
    }
}