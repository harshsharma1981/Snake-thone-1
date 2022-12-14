//game variables
let inputdirection = { x: 0, y: 0 };
const movesound = new Audio("move.wav");
const foodsound = new Audio("eat.mp3");
const gameoversound = new Audio("gameover.wav");
const musicsound = new Audio("music.mp3");
let speed =10;
let lastpainttime = 0;
let snakeArray = [{ x: 13, y: 15 }];
let poisionfood1 = { x: 10, y: 12 };
let poisionfood2 = { x: 1, y: 4 };
let poisionfood3 = { x: 11, y: 16 };
let poisionfood4 = { x: 5, y: 14 };
let poisionfood5 = { x: 2, y: 12 };
let food = { x: 10, y: 10 };
let score = 0;
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
    return true; }
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
    snakeArray = [{ x: 13, y: 15 }];
    musicsound.play();
    score = 0;
}
//if snake eaten the food add score and regenerate the food
if(snakeArray[0].y === food.y && snakeArray[0].x === food.x){
    foodsound.play();
    score += 1;
    if(score>hiscore){
      hiscore = score;
      localStorage.setItem("highScore", JSON.stringify(hiscore));
      highscorebox.innerHTML = "High Score: " + hiscore;
    }
    
    scorenum.innerHTML = "Score: " + score;
snakeArray.unshift({x: snakeArray[0].x + inputdirection.x, y: snakeArray[0].y + inputdirection.y})
let a = 1;
let b = 17;
let c = 1;
let d = 17;
food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
poisionfood1 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
poisionfood2 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
poisionfood3 = {x: Math.round(c + (d-c)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
// poision food you can uncomment this if required
 poisionfood4 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
poisionfood5 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
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
    movesound.play();
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
  inputdirection.x = 0;
  inputdirection.y = -1;
}

function movedown() {
  inputdirection.x = 0;
  inputdirection.y = 1;
}

function moveleft() {
  inputdirection.x = -1;
  inputdirection.y = 0;
}

function moveright() {
  inputdirection.x = 1;
  inputdirection.y = 0;
}
