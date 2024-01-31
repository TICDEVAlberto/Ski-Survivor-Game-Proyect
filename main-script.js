// IMPORTS
import { Player } from "./player.js";
import { Obstacles } from "./obstacles.js";
//import { Snow } from "./snow.js";


// Const and variables
var ski_pista = document.querySelector("#ski_pista")
var player = new Player (390, 250, ski_pista)
var playerId = null
var obstacleId = null
var scoreId = null
var obstacles = []



// main function
function main() {
    player.addPlayer()
    playerId = setInterval(playerAlive, 50)
    obstacleId = setInterval(createObstacle, 1000)
    scoreId = setInterval(addScore, 1000)
}


// Functions

let refresh = document.getElementById("reset");
refresh.addEventListener('click', _ => {
            location.reload();
})

function createObstacle() {
    var coord = Math.floor(Math.random() *30) *25
    var obstacle = new Obstacles (coord, 750, ski_pista, player, obstacles)
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
        })
    }
}

function addScore() {
    player.score += 1
    console.log(player.score)
}

function checkScore() {
    if (player.score >= 3600) {
        player.score = (player.score / 60) / 60
        console.log(`Horas ${Math.round(player.score)}`)
    }

    else if (player.score >= 60 && player.score < 3600) {
        player.score = player.score / 60
        console.log(`Minutos ${Math.round(player.score)}`)
    }

    else {
        console.log(`Segundos ${player.score}`)
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
 
main()