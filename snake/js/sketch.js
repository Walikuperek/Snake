let snake;
const scaleGrid = 20;
//food
var _playerDead = false;
// var deadBodyMoved
var deadBodyMoved = false;
//
let score = 0;
let food;
//
//window.addEventListener('resize', windowLayout, false);
// function windowLayout() {
//     width = window.innerWidth;
//     height = window.innerHeight;
// }
VAR = {
    rand:function(min,max) {
        return Math.floor(random()*(max-min+1)) + min;
    }
}
function setup() {
    createCanvas(400,400);
    snake = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation () {
    var cols = floor(width/scaleGrid);
    var rows = floor(height/scaleGrid);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scaleGrid);
}

function scoreUp(){
    if (_playerDead) {
        _playerDead = false;
        score = 0;
        snake.xspeed = 0;
        snake.yspeed = 0;
        snake.total = 0;
        snake.tail = [];
        snake.x = 200;
        snake.y = 200;
    }
    const div_score = document.getElementById("score");
    if(score > 5) {div_score.style.color = "limegreen";}
    if(score > 10) {div_score.style.color = "#21D4FD";}
    if(score > 20) {div_score.style.color = "#19c";}
    if(score > 25) {div_score.style.color = "mediumvioletred";}
    if(score > 30) {div_score.style.color = "gold";}

    score++;
    document.getElementById("score").innerHTML = "Score: <b>" + score + "</b>";
}
function draw() {
    background(51);
    snake.death();
    snake.update();
    snake.show();
    Dot.draw();
    // food

    if (snake.eat(food)) {
        scoreUp();
        pickLocation();
    }

    fill(66, 245, 81);
    rect(food.x, food.y, scaleGrid, scaleGrid);
}

function keyPressed() {
    //
    if (keyCode === 38) {
        if (snake.yspeed <= 0) {
            snake.dir(0, -1);
        } else {
            snake.dir(0, 1);
        }
    } else if (keyCode === 40) {
        if (snake.yspeed >= 0) {
            snake.dir(0, 1);
        } else {
            snake.dir(0, -1);
        }
    } else if (keyCode === 39) {
        if (snake.xspeed >= 0) {
            snake.dir(1, 0);
        } else {
            snake.dir(-1, 0);
        }
    } else if (keyCode === 37) {
        if (snake.xspeed <= 0) {
            snake.dir(-1, 0);
        } else {
            snake.dir(1, 0);
        }
    }
}

