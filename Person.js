class Person{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.person = Constraint.create(options);
        World.add(world, this.person);
    }
   
        fly(){
            this.person.bodyA = null;
        }
        attach(body){
            this.person.bodyA = body;
        }
    
    display(){
        if(this.person.bodyA){
            var pointA = this.person.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                //line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                //line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            else{
                strokeWeight(3);
                //line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                //line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            }
           
            
            pop();
        }
    }
    
}