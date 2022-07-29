let inputdirection = { x: 0, y: 0 };
const movesound = new Audio("move.mp3");
const foodsound = new Audio("eat.mp3");
const gameoversound = new Audio("gameover.mp3");
const musicsound = new Audio("music.mp3");
let speed = 4;
let lastpainttime = 0;
let snakeArray = [{ x: 13, y: 17 }];
let poisionfood1 = { x: 2, y: 4 };
let poisionfood2 = { x: 8, y: 5 };
let poisionfood3 = { x: 4, y: 10 };
let poisionfood4 = { x: 15, y: 14 };
let poisionfood5 = { x: 8, y: 12 };
let food = { x: 10, y: 10 };
let score = 0;
let power = 0;
// let snakecharmer = {x: 8, y: 1}

// player description
const name1 = prompt('write your name')
document.getElementById('result').innerHTML = "Name: " + name1;
// document.getElementById('result').max;
if (name1.length > 10) {
  alert("pls write your name in under 10 words reload to write your name")
  document.getElementById('result').style.display = 'none';
}

// food power





//game functions

function main(ctime) {
  window.requestAnimationFrame(main);
  if((ctime - lastpainttime)/1000 < 1/speed){
    return;
  }
  lastpainttime = ctime;
  gameEngine()
  
}
function iscollide(snake) {
   //if snake go under snake tail
   for (let i = 1; i < snakeArray.length; i++) {
    if(snake[i].x === snake[0].x && snake[i].y === snake[0].y)
    return true;
   }
   //if you go under wall
   if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <= 0){
    return true;
   }
   
   
   //if snake eat posion food
    if(snake[0].x === poisionfood1.x  &&  snake[0].y === poisionfood1.y){
  
        return true;
    }
 
    if(snake[0].x === poisionfood2.x  &&  snake[0].y === poisionfood2.y){
      return true;
    }
 
     if(snake[0].x === poisionfood3.x  &&  snake[0].y === poisionfood3.y){
      return true;
    }
  // poision food you can uncomment this if required
     if(snake[0].x === poisionfood4.x  &&  snake[0].y === poisionfood4.y){
      return true;
    }
     if(snake[0].x === poisionfood5.x  &&  snake[0].y === poisionfood5.y){
      return true;
    }
  
     
 
}

function gameEngine() {
  // 1. updating the snakearray and food
 
if(iscollide(snakeArray)){
    gameoversound.play();
    musicsound.pause();
    inputdirection = { x: 0, y: 0 };
    alert('Game Over. press any key to continue');
  snakeArray = [{ x: 13, y: 17 }];
    speed = 5
  

    if (power >= 8) {
      // confirm("use your energy point to continue or cancel to start")
     
      if (confirm("use your energy point to continue or cancel to start") == true ) {
        power -= 8;
        return false
      }  else{
        score = 0
        return true;
        
      }
      
   
    }

    if (power >= 12){
      power -= 12;
    }
   
    // musicsound.play();
    // musicsound.volume = 0.3;
  
  
    score = 0;
    speed = 6;
    let a = 1;
let b = 17;
let c = 2;
let d = 16;

food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
poisionfood1 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
poisionfood2 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
 poisionfood3 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
//poision food you can uncomment this if required
   poisionfood4 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
  poisionfood5 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
}
//if snake eaten the food add score and regenerate the food
if(snakeArray[0].y === food.y && snakeArray[0].x === food.x){
    foodsound.play();
    score += 1;
    speed += 0.5;
    power += 1;
    if(score>hiscore){
      hiscore = score;
      localStorage.setItem("highScore", JSON.stringify(hiscore));
      highscorebox.innerHTML = "High Score: " + hiscore;
    }
    if(snakeArray[0].y === food.y && snakeArray[0].x === food.x){
      foodsound.play();
      foodsound.volume = 0.3
      speed += 1;
    }
    numpower.innerHTML = "<img src=\'frog-food.png\' width=\'44px\' height=\'40px\' position=\absolute\ right=\52px\>  " + power
    scorenum.innerHTML = "Score: " + score;
snakeArray.unshift({x: snakeArray[0].x + inputdirection.x, y: snakeArray[0].y + inputdirection.y})
 a = 2;
b = 16;
 c = 2;
d = 16;

food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
poisionfood1 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
poisionfood2 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
 poisionfood3 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
//poision food you can uncomment this if required
 poisionfood4 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
 poisionfood5 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}



}



if(poisionfood1.y === food.y && poisionfood1.x === food.x){
  a = 1
  b = 17
  food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
}
if(poisionfood2.y === food.y && poisionfood2.x === food.x){
  a = 1
  b = 17
  food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
}
if(poisionfood3.y === food.y && poisionfood3.x === food.x){
  a = 1
  b = 17
  food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
}
if(poisionfood4.y === food.y && poisionfood4.x === food.x){
  a = 1
  b = 17
  food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
}
if(poisionfood5.y === food.y && poisionfood5.x === food.x){
  a = 1
  b = 17
  food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
}



//moving snake
for (let i = snakeArray.length - 2; i>=0; i--) {
    const element = snakeArray[i];
    snakeArray[i+1] = {...snakeArray[i]};
}

snakeArray[0].x  += inputdirection.x;
snakeArray[0].y  += inputdirection.y;
  //2.display the snake and food
  //display the snake
  display.innerHTML = "";
  snakeArray.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if(index === 0){
      
         snakeElement.classList.add('head');
    }
    else{
        snakeElement.classList.add('snake');
    }
    display.appendChild(snakeElement);
  });
  //display the food
  foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  display.appendChild(foodElement);
  //display poision food
   poisionfood1Element = document.createElement('div');
   poisionfood1Element.style.gridRowStart = poisionfood1.y;
   poisionfood1Element.style.gridColumnStart = poisionfood1.x;
   poisionfood1Element.classList.add('poisionfood1');
   display.appendChild(poisionfood1Element);
  //2nd poision food
  poisionfood2Element = document.createElement('div');
  poisionfood2Element.style.gridRowStart = poisionfood2.y;
  poisionfood2Element.style.gridColumnStart = poisionfood2.x;
  poisionfood2Element.classList.add('poisionfood2');
  display.appendChild(poisionfood2Element);
  //3rd poision food
   poisionfood3Element = document.createElement('div');
   poisionfood3Element.style.gridRowStart = poisionfood3.y;
   poisionfood3Element.style.gridColumnStart = poisionfood3.x;
 poisionfood3Element.classList.add('poisionfood3');
   display.appendChild(poisionfood3Element);
  //4rt poision food  poision food you can uncomment this if required
    poisionfood4Element = document.createElement('div');
    poisionfood4Element.style.gridRowStart = poisionfood4.y;
    poisionfood4Element.style.gridColumnStart = poisionfood4.x;
    poisionfood4Element.classList.add('poisionfood4');
    display.appendChild(poisionfood4Element);
   //5th poision food you can uncomment this if required
  poisionfood5Element = document.createElement('div');
  poisionfood5Element.style.gridRowStart = poisionfood5.y;
  poisionfood5Element.style.gridColumnStart = poisionfood5.x;
poisionfood5Element.classList.add('poisionfood5');
  display.appendChild(poisionfood5Element);


  // // display snake charmer
  // snakecharmerElement = document.createElement('div')
  // snakecharmerElement.style.gridRowStart = snakecharmer.y;
  // snakecharmerElement.style.gridColumnStart = snakecharmer.x;
  // snakecharmerElement.classList.add("charmer")
  // display.appendChild(snakecharmerElement);

}




//main logic
let highscore = localStorage.getItem("highscore");
if(highscore === null){
  hiscore = 0;
  localStorage.setItem("highscore", JSON.stringify(hiscore));
}
else{
  hiscore = JSON.parse(highscore)
  highscorebox.innerHTML = "High Score: " + highscore;
}


window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputdirection = {x:0, y:1};
    musicsound.play();
    musicsound.volume = 0.3;
    movesound.play();
    movesound.volume = 0.3;
    switch (e.key) {
        case "ArrowUp":
            console.log("Arrowup");
            inputdirection.x = 0;
            inputdirection.y = -1;
            break;

        case "ArrowDown":
            console.log("Arrowdown");
            inputdirection.x = 0;
            inputdirection.y = 1;
            break;
        
        case "ArrowLeft":
            console.log("Arrowleft");
            inputdirection.x = -1;
            inputdirection.y = 0;
            break;

        case "ArrowRight":
            console.log("Arrowright");
            inputdirection.x = 1;
            inputdirection.y = 0;
            break;
         default:
            break;
    }
})



function moveup() {
  musicsound.play();
  musicsound.volume = 0.3;
  movesound.play();
  movesound.volume = 0.3;
  inputdirection.x = 0;
  inputdirection.y = -1;
}

function movedown() {
  musicsound.play();
  musicsound.volume = 0.3;
  movesound.play();
  movesound.volume = 0.3;
  inputdirection.x = 0;
  inputdirection.y = 1;
 
}

function moveleft() {
  musicsound.play();
  musicsound.volume = 0.3;
  movesound.play();
  movesound.volume = 0.3;
  inputdirection.x = -1;
  inputdirection.y = 0;
}

function moveright() {
  musicsound.play();
  musicsound.volume = 0.3;
  movesound.play();
  movesound.volume = 0.3;
  inputdirection.x = 1;
  inputdirection.y = 0;
}
