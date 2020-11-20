var bullet1,bullet2,bullet3,bullet4, wall1,wall2,wall3,wall4;
var speed,weight,thickness;
var border1,border2,border3;
var destroy;

function setup() {
  createCanvas(1600,900);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
 bullet1 =  createSprite(50, 95, 25, 15);
 bullet1.shapeColor = 'white';
 bullet1.lifetime = 1590;

 bullet2 =  createSprite(50, 315, 25, 15);
 bullet2.shapeColor = 'white';
 bullet2.lifetime = 1590;

 bullet3 =  createSprite(50, 535, 25, 15);
 bullet3.shapeColor = 'white';
 bullet3.lifetime = 1590;

 bullet4 =  createSprite(50, 755, 25, 15);
 bullet4.shapeColor = 'white'; 
 bullet4.lifetime = 1590;


wall1 = createSprite(1500,95,20,height/6);
wall1.shapeColor = 'pink';
wall2 = createSprite(1500,315,20,height/6);
wall2.shapeColor = 'pink';
wall3 = createSprite(1500,535,20,height/6);
wall3.shapeColor = 'pink';
wall4 = createSprite(1500,755,20,height/6);
wall4.shapeColor = 'pink';


 border1 = createSprite(800,200,1600,10)
 border1.shapeColor = 'yellow';
 border2 = createSprite(800,425,1600,10);
 border2.shapeColor = 'yellow';
 border3 = createSprite(800,650,1600,10);
 border3.shapeColor = 'yellow';



}

function draw() {
  background('black');  

  bullet1.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
  bullet4.velocityX = speed;



  var destroy = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2){
    bullet1.velocityX= 0;
    bullet1.x = 1480;
    

    if(destroy > 10){
      bullet1.shapeColor = color(255,0,0);
    }
  
    if(destroy < 10){
      bullet1.shapeColor = color(0,255,0);
    }
    
    
  }

  if(wall2.x-bullet2.x < (bullet2.width+wall2.width)/2){
    bullet2.velocityX= 0;
    bullet2.x = 1480;
    if(destroy > 10){
      bullet2.shapeColor = color(255,0,0);
    }
   
    if(destroy < 10){
      bullet2.shapeColor = color(0,255,0);
    }
    
    
  }

  if(wall3.x-bullet3.x < (bullet3.width+wall3.width)/2){
    bullet3.velocityX= 0;
    bullet3.x = 1480;
    

    if(destroy > 10){
      bullet3.shapeColor = color(255,0,0);
    }
   
    if(destroy < 10){
      bullet3.shapeColor = color(0,255,0);
    }
    
    
  }

  if(wall4.x-bullet4.x < (bullet4.width+wall4.width)/2){
    bullet4.velocityX= 0;
    bullet4.x = 1480;
    
    if(destroy > 10){
      bullet4.shapeColor = color(255,0,0);
    } 
    if(destroy < 10){
      bullet4.shapeColor = color(0,255,0);
    }
    
    
  }


   drawSprites();
}
