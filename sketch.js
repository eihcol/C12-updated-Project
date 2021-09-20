var garden,rabbit,apple,grass,leaf,redleaf;
var gardenImg,rabbitImg,appleImg,grassImg,leafImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
  leafImg = loadImage("leaf.png");
  redImg = loadImage("redImage.png");
  orangeImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  
  
  

  var rand =  Math.round(random(1,100));
  console.log(rand);

  
}

function draw() {
  background(0);

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites = Math.round(random(1,4)); 
  if (frameCount % 80 === 0) { 
    if (select_sprites === 1) { 
      createApples(); 
    } 
    else if (select_sprites === 2) { 
        createOrange(); 
     }
    else if (select_sprites === 3) {
      createRedLeafs();
    }
    else if (select_sprites === 4){
      createLeafs();
    }     
       
      
      }
}

function createApples(){
  
  
    apple = createSprite(random(50,350),10,40,10);
    apple.addImage(appleImg);
    apple.velocityY = 4;
    apple.scale = 0.07;
    apple.lifetime = 100;
    
}

function createLeafs(){
  
  
    leaf = createSprite(random(50,350),10,40,10);
    leaf.addImage(leafImg);
    leaf.velocityY = 4;
    leaf.scale = 0.07;
    leaf.lifetime = 100;

    
     
 
}


function createRedLeafs(){
  
  
    redleaf = createSprite(200,10,40,10);

    redleaf.addImage(redImg);
    redleaf.x = Math.round(random(400,0));
    redleaf.velocityY = 4;
    redleaf.scale = 0.07;
    redleaf.lifetime = 100;
 }


function createOrange(){

  orange = createSprite(random(50,250),10,40,10);
  orange.addImage(orangeImg);
  orange.velocityY = 5
  orange.scale = 0.07
  orange.lifetime = 80;
}
