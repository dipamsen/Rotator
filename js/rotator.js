class Rotator{
    constructor(bodyA){
        var options = {
            bodyA: bodyA,
            pointB: bodyA.position,
            stiffness: 1,
            length: 0
        };
        this.body = Bodies.Constraint(options);
    }
    display(){
        
    }
}