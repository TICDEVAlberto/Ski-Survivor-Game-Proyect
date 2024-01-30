// IMPORTS
import { Player } from "./player.js";
import { Obstacles } from "./obstacles.js";


// Const and variables
var ski_pista = document.querySelector("#ski_pista")
var player = new Player (390, 250, ski_pista)


// main function
function main() {
    player.addPlayer()
    var playerId = setInterval(player.move, 50)
    var enemyId = setInterval(createObstacle, 3000)
}


// Functions

function createObstacle() {
    var obstacle = new Obstacles(390, 750, ski_pista, player)
    obstacle.addObstacle()
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

    console.log(e)
})

window.addEventListener('keyup', function() {
    player.direction = 0
})
 
main()