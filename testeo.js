import { Player } from "./Player.js";
import { Enemy } from "./enemies.js";

var board = document.querySelector("#board")
var player = new Player (390,250,board)



function gameLoop() {
    player.addPlayer()
    var playerId = setInterval(player.move, 50)
    var enemyId = setInterval(createEnemy, 3000)
}

function createEnemy() {
    var enemy = new Enemy (390, 750, board, player)
    enemy.addEnemy()
}

window.addEventListener('keydown', function(e) {
 switch (e.key)  {
        case "a":
        player.direction =-1
        break
        case "d":
        player.direction = 1
        break

    }
})

window.addEventListener('keyup', function() {
    player.direction = 0
})
 
gameLoop()


