const board = document.getElementById("board");
const player = document.getElementById("player")
const enemy1 = document.getElementById("enemy1")
const enemy2 = document.getElementById("enemy2")
const enemy3 = document.getElementById("enemy3")


var xPlayer = 390
var playerDirection = 1

function movement(playerDirection){ 
       xPlayer += 10 * playerDirection;
        player.style.left = xPlayer + "px";
    }
    


window.addEventListener('keydown', function(e) {  
  
    if (e.key === "d" && xPlayer < 780) {
        playerDirection = 1
        movement(playerDirection)
    }

    if (e.key === "a" && xPlayer > 0) {
        playerDirection = -1
        movement(playerDirection)
     }
}) 

// //function checkCollision(){
  
//     //if (xPlayer <= 10 || xPlayer >= 780) {
//         //playerDirection = -1 
//         return true
//     } else { return false}
// }
        

    



    
    
     