
let b;
let anotherBall
let squish
let anotherSquish
let funinthesun;

function setup() {
  createCanvas(700, 230);
  b = new Ball(10,124,"green"); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(600,120,"orange");
  squish = new Ball(15, 140,"blue");
  anotherSquish = new Ball(20, 165, "red");
  funinthesun= new Ball(34,180,"purple");

}

function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    squish.drawBall();
    squish.moveBall();
    anotherSquish.drawBall();
    anotherSquish.moveBall();
    funinthesun.drawBall();
    funinthesun.moveBall();
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;

	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,10,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
        this.x = this.x+3;
if  funinthesun then this.x = this.x+10;
	}
}
