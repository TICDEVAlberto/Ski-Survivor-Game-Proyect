// IMPORTS
import { Player } from "./player.js";
import { Obstacles } from "./obstacles.js";

// Const and variables
var ski_pista = document.querySelector("#ski_pista")
var player = new Player (390, 250, ski_pista)
var playerId = null
var barrierId = null 
var obstacleId = null
var obstacles = []


// main function
function main() {
    player.addPlayer()
    playerId = setInterval(playerAlive, 50)
    enemyId = setInterval(createObstacle, 1000)
}


// Functions

function createObstacle() {
    // var obstacle = new Obstacles(390, 750, ski_pista, player)
    // obstacle.addObstacle()
    var coord = Math.floor(Math.random() *30) *25
    var obstacle = new Obstacles (coord, 750, ski_pista, player, obstacles)
    console.log(coord)
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
            
        })
    }
}

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
    }
})

window.addEventListener('keyup', function() {
    player.direction = 0
})
 
main()