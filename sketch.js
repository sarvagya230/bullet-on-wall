var dam,weight,speed;

var bullet1,bullet2,bullet3;
var wall,thickness;
var A,B,C;
var speed1,speed2,speed3;



function setup() {
  createCanvas(1600,400);

   bullet1 = createSprite(100,380,10,10);

   bullet2 = createSprite(100,340,10,10);
  
   bullet3 = createSprite(100,300,10,10);
   

   wall = createSprite(1200,200,thickness,height);
   wall.shapeColor=color(80,80,80);

   bullet1.collide(wall);
   bullet2.collide(wall);
   bullet3.collide(wall);

   weight =  random(30,52);

   thickness = random(22,83);

  // console.log(weight);

  speed1=random(223,321);
  console.log(speed1);
  bullet1.velocityX= speed1; 
  bullet1.shapeColor="white";

  speed2=random(280,321);
  console.log(speed2);
  bullet2.velocityX= speed2;
  bullet2.shapeColor="white";
  
  speed3=random(223,280);
  console.log(speed3);
  bullet3.velocityX= speed3;
  bullet3.shapeColor="white";
}

function draw() {
  background(0,0,0); 
  console.log("1234");
  A=damage(bullet1,speed1);
  B=damage(bullet2,speed2);
  C=damage(bullet3,speed3);

  changeColor(A,bullet1);
  changeColor(B,bullet2);
  changeColor(C,bullet3);

  drawSprites();
}
function damage(bullet1,speed1)
{
 // console.log("text");
  if(bullet1.collide(wall)){
    bullet1.velocityX=0;
    dam=(0.5*weight*speed1*speed1)/(thickness*thickness*thickness);
    
    return dam;
  }
}
function changeColor(A,bullet1)
{
  if(A>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  else if(A<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}
