// let VelocityX = 0;
// let VelocityY = 0;
let gravity = 1;
let friction = 0.9;
let p1;
let p2;


function setup() {
  createCanvas(1000, 1000);
  p1 = new player(200,200,30,30,3,false,false,0,0)

}

function draw() {
  background(255);
  p1.drawMe();
  p1.moveMe();
  line(10,845,900,845);

}







class player {
  constructor(x,y,w,h,speed,jumping,grounded,velocityX,velocityY){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.jumping = jumping;
    this.grounded = grounded;
    this.VelocityX = velocityX;
    this.VelocityY = velocityY;
  }



  drawMe(){
    rect(this.x,this.y,this.w,this.h,10);
  }
  moveMe(){
    print(this.VelocityY)

    if (keyIsDown(32)) {
    // up arrow or space
    if (this.jumping === false && this.grounded === true) {
        this.jumping = true;
        this.grounded = false;
        this.VelocityY = -20;//how high to jump
    }
}
if (keyIsDown(68)) {
    // right arrow
    if (this.VelocityX < this.speed) {
        this.VelocityX++;
    }
}
if (keyIsDown(65)) {
    // left arrow
    if (this.VelocityX > -this.speed) {
        this.VelocityX--;
    }
}
  if(this.grounded === true){
        this.VelocityY = 0;
   }
   else{
     this.VelocityY += gravity;
   }
   this.VelocityX *= friction;

   this.x += this.VelocityX;
   this.y += this.VelocityY;
   if(this.y >= 799){
     this.grounded = true;
     this.jumping = false;
   }

  }
}
