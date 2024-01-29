

const board = document.getElementById("board");
const player = document.getElementById("player")
const enemy1 = document.getElementById("enemy1")


// var enemy = new Enemy()
var xPlayer = 390
var yPlayer = 250
var yEnemy = 700
var xEnemy = 390
var playerDirection = 1


function movement(playerDirection){ 
       xPlayer += 10 * playerDirection;
        player.style.left = xPlayer + "px";
        
    }
    
    function enemyMove(){
        checkCollision()
        yEnemy -= 10
        enemy1.style.top = yEnemy + "px"
        
    }
    var enemyID = setInterval(enemyMove, 100);

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

    
    function checkCollision(){ 
    if ( xPlayer <= xEnemy + 25 &&
    yPlayer <= yEnemy + 25  &&
    xPlayer + 25  >= xEnemy &&
    yPlayer + 25 >= yEnemy) {
    return true
    } else {return false}
}









    



    
    
     