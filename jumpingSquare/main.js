// JavaScript source code


function updateTime() {
    // please note 'var' will be file-scoped
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var dateStr = date + "-" + (month + 1) + "-" + year;
    var time_hours = currentDate.getHours();
    var time_min = currentDate.getMinutes();
    var time_sec = currentDate.getSeconds();

    if (time_sec < 10) {
        time_sec = "0" + time_sec;
    }
    if (time_min < 10) {
        time_min = "0" + time_min;
    }
    if (time_hours < 10) {
        time_hours = "0" + time_hours;
    }

    dateStr += " : " + time_hours + ":" + time_min + ":" + time_sec;

    document.getElementById('time_span').innerHTML = dateStr;
}


// grab doc:
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const g = 2;
let dx = 0;
let dy = 0;
// player object
player = {
    posX: 0,
    posY: canvas.height - 5
};


// listeners for user input:
document.addEventListener('keydown', event => {

    //console.log(event.key);

    if (event.key == 'd') {
        dx = 2;
    }
    else if (event.key == 'a') {
        dx = -2;
    }
    else if (event.key == ' ' && player.posY == 145) {
        dy = -5;
    }


});

document.addEventListener('keyup', event => {

    if (event.key == 'd') {

        dx = 0;
    }
    else if (event.key == 'a') {
        dx = 0;
    }
    else if (event.key == ' ') {
        dy = 0.75;
    }

});


// main func to run the game
function game() {

    drawPlayer();
}

function start() {

    ctx.fillStyle = "#000000";
    
    ctx.fillRect(player.posX, canvas.height - 5, 10, 5);

}


// driver func
function drawPlayer() {

    console.log(dx);

    ctx.fillStyle = "#000000";

    if (player.posY > 145) {
        player.posY = canvas.height - 5;
        start();
        dy = 0;
    }
    if (player.posY < 125) {
        dy = 0.75;
    }

    player.posX += dx;
    player.posY += dy;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(player.posX, player.posY, 10, 5);

}


// note const cannot reassign and is block-scoped


console.log(canvas.height);
console.log(canvas.width);
 // player posY starts at 145
start();
setInterval(updateTime, 10);
setInterval(game, 10);
