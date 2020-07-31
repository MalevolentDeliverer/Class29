class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,25);
        image(this.image2,175,30);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke("#54270F")
            if(pointA.x < 200){
                strokeWeight(4);
                line(pointA.x-23, pointA.y, pointB.x-10, pointB.y+10);
                line(pointA.x+26, pointA.y+5, pointB.x+30, pointB.y+5);
                image(this.image3,pointA.x-24,pointA.y-5,10,20)
    

            }
            if(pointA.x > 200){
                strokeWeight(7);
                line(pointA.x-23, pointA.y, pointB.x-10, pointB.y+10);
                line(pointA.x+26, pointA.y+5, pointB.x+30, pointB.y+5);
                image(this.image3,pointA.x-24,pointA.y-5,10,20)
    

            }
            
        }
    }
    
}