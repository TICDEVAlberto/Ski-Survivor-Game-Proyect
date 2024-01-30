function Obstacles(x, y, parent, player) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 25;
    this.height = 25;
    this.sprite = document.createElement('div');
    this.direction = -1;
    this.speed = 10
 
    this.addObstacle = function() {
        this.sprite.setAttribute('class', 'obstacles')
        this.sprite.style.left = this.x + "px"
        this.sprite.style.top = this.y + "px"
        parent.appendChild(this.sprite)
    }
    
    this.moveObstacle = function() {
        self.checkCollision()
        var newY = self.y + self.speed * self.direction
        if (newY >= 0 && newY <= 800) { 
            self.y = newY;
            self.sprite.style.top = self.y + "px" 
        }
        if (self.y <= 200) {
            parent.removeChild(self.sprite)
            clearInterval(self.timerId)
        }
    };

    this.checkCollision = function() {
    if (this.x < player.x + player.width && 
        this.y < player.y + player.height &&
        this.x + this.width > player.x && 
        this.y + this.height > player.y) 
        {
            window.alert("CRASHED!")
        }
    }

    this.timerId = setInterval(this.moveObstacle, 50)
}

export { Obstacles };