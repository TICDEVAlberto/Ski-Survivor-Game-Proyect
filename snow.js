/* function Snow (x, y, parent) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 800;
    this.height = 5000;
    this.sprite = document.createElement('div');
    this.direction = -1;
    this.speed = 10
  
 
    this.addSnow = function() {
        this.sprite.setAttribute('class', 'snow')
        this.sprite.style.left = this.x + "px"
        this.sprite.style.top = this.y + "px"
        parent.appendChild(this.sprite)
    }
    
    this.moveSnow = function() {
        var newY = self.y + self.speed * self.direction
        if (newY >= 0 && newY <= 800) { 
            self.y = newY;
            self.sprite.style.top = self.y + "px" 
        }
        if (self.y <= 90) {
            parent.removeChild(self.sprite)
            clearInterval(self.timerId)
        }
    }}

    export {Snow}
 */