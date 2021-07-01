class Particles {
    constructor(x, y) {
        var options = {
            restitution: 0.6,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.c = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.c);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};