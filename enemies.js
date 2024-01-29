function Enemy() {
this.yEnemy;
this.xEnemy;
this.enemyHeight = 25;
this.enemyWidth = 25;
this.sprite = document.getElementById("enemy1")
this.create = function(){
    this.sprite.style.height = this.enemyHeight;
    this.sprite.style.width = this.enemyWidth;

}

}

export{Enemy}

