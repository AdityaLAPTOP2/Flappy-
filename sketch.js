var bird
var ground
var wall1
var wall2
var birdi
var groundi
var wall1i
var wall2i
var game = 0
var score = 0
var gift = 0
var ww = 0
 var bg 
function preload() {
birdi = loadImage("../sprites/bird.png")
  groundi = loadImage("../sprites/base.png")
 wall1i = loadImage("../sprites/wall.png")
 wall2i = loadImage("../sprites/wall2.png")
  bg = loadImage("../sprites/bg.png")


}

function setup() {
  localStorage["high"] = 0

  createCanvas(800,400);
  wall1 = createSprite (1000,200)
  wall1.addImage(wall1i)
bird = createSprite(400, 200);
bird.addImage(birdi)
ground = createSprite(400,400)
ground.addImage(groundi)
wall2 = createSprite(1000,200);
wall2.addImage(wall2i)



wall1.scale = 0.5
wall2.scale = 0.5
gift= Math.round(random(1800,5000))
}

function draw() {

if(score===gift){
  game=6
}





if(score>localStorage["high"]){
  localStorage["high"] = score
}

  if(game===0){
    wall1.velocity.x=-3
    if(wall1.x>800){

      wall1.y=Math.round(random(600,300))
    }
    wall2.velocity.x=-3
    if(wall2.x>800){

      wall2.y=wall1.y-Math.round(random(540,600))
    }


    if(wall1.x<0){
      wall1.x=1000
    }
    if(wall2.x<0){
      wall2.x=1000
    }
    score=score+0.5
    if(bird.collide(ground)||bird.isTouching(wall2)||bird.isTouching(wall1)){
      game=1
    }
      bird.velocity.y=4
    
    
    if(keyCode===38){
     bird.velocity.y=-4
    
    }
    if(keyCode===40){
      bird.velocity.y=4

    }
    
  }



 
  background(255,255,255);  
  drawSprites();
  text("Your score :"+score,100,100)
  text("High score :"+localStorage["high"],700,100)

  if(game===1){
    if(score<200){
      text("You lose press space",400,200)

    }
    if(score>200&&score<500){
      text("You done better but loose press space",400,200)

    }
    if(score>500&&score<1300){
      text("You done amazing but lose press space",400,200)

    }
    if(score>1300){
      text("You done amazing but lose press space Try to reach "+gift ,400,200)

    }
    if(keyCode===32){
    bird.x=400
    bird.y=200
    score=0
    
    
      game=0
    }
    
    
      }
    if(game===6){

      ww=ww+1

      if(ww<600)
        text("You won the game keep playing or hit wall or pipe . On you  ",400,200)

        


    }
          if(ww>6000){
            ww=0
          }
}