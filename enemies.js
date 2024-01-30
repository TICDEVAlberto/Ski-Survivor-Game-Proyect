function Enemy() {
var self = this
this.x = x;
this.y = y;
this.sprite.document.createElement("div")
this.direction = -1
this.speed 

this.insertEnemy = function() {
    this.sprite.setAttribute('class', 'enemy')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
}

this.move = function () {
    var newY = self.x + self.speed * self.direction
    if (newX >= 0 && newX <= 800)
    self.sprite.style.left = newX + "px"
}
}



