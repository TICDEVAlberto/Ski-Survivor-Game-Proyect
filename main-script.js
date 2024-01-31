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


// main function
function main() {
    player.addPlayer()
    playerId = setInterval(playerAlive, 50)
    obstacleId = setInterval(createObstacle, 1000)
    scoreId = setInterval(addScore, 1000)
}


// Functions
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
            player.direction = 1;
            player.sprite.style.backgroundImage = "url('images/playerskiderecha.png')";

            break;
      }
    }
)

window.addEventListener('keyup', function() {
    player.direction = 0
})