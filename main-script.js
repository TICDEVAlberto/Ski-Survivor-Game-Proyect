// IMPORTS
import { Player } from "./player.js";
import { Obstacles } from "./obstacles.js";


// Const and variables
var ski_pista = document.querySelector("#ski_pista")
var player = new Player (390, 250, ski_pista)
var playerId = null
var obstacleId = null
var scoreId = null
var obstacles = []
var score = 0
var scoreSpan = document.getElementById("score") 

console.log(score)


// main function

function main() {
    player.addPlayer()
    playerId = setInterval(playerAlive, 50)
    obstacleId = setInterval(createObstacle, 1000)
    scoreId = setInterval(addScore, 1100)
}


// Functions


function createObstacle() {
    var coord = Math.floor(Math.random() *30) *25
    var obstacle = new Obstacles (coord, 750, ski_pista, player, obstacles, scoreId)
    obstacle.addObstacle()
    obstacles.push(obstacle)
}

function playerAlive() {
    if (!player.dead) {
        player.move()
    } else {
        clearInterval(playerId)
        clearInterval(obstacleId)
        obstacles.forEach(function(obstacle) {
            clearInterval(obstacle.timerId)
            checkScore()
            clearInterval(scoreId)
        })
    }
}

let gameStart = document.getElementById("start-boton");
gameStart.addEventListener('click', _ => {
    document.querySelector(".start-screen").style.visibility = "hidden"
    main()
})

let refresh = document.getElementById("reset");
refresh.addEventListener('click', _ => {
            location.reload();
})

window.addEventListener('keydown', function(e) {
    switch (e.key) {
        case "a":
        case "ArrowLeft":
            player.direction = -1;
            player.sprite.style.backgroundImage = "url('images/playerskiizquierda.png')";
            break;
        case "d":
        case "ArrowRight":
            player.direction = 1;
            player.sprite.style.backgroundImage = "url('images/playerskiderecha.png')";
            break;
      }
})

function addScore() {
    score += 1
    scoreSpan.innerText = score
}

function checkScore() {
    let myScore = score
    if (score >= 3600) {
        myScore = (score / 60) / 60
        scoreSpan.innerText = `${Math.round(myScore)} Horas`
    }

    else if (score >= 60 && score < 3600) {
        myScore = score / 60
        scoreSpan.innerText = `${Math.round(myScore)} Minutos`
    }

    else {
        scoreSpan.innerText = `${Math.round(myScore)} Segundos`
    }
}

window.addEventListener('keydown', function(e) {
 switch (e.key)  {
        case "a":
            player.direction = -1
        break
        case "ArrowLeft":
            player.direction = -1
        break

        case "d":
            player.direction = 1
        break
        case "ArrowRight":
            player.direction = 1
        break
    }
})

window.addEventListener('keyup', function() {
    player.direction = 0
})

export{scoreId}
