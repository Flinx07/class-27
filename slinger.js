class Slinger{
    constructor(a,b){
    var options={
     bodyA:a,
     bodyB:b,
     length:10,
     stiffness:0.04     
    }
    this.adi=Constraint.create(options)
    World.add(world,this.adi)
    }
    display(){
line(this.adi.bodyA.position.x,this.adi.bodyA.position.y,this.adi.bodyB.position.x,this.adi.bodyB.position.y)
    }
}