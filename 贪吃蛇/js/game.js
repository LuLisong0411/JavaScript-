(function(){
    function Game(map){
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }
    Game.prototype.start = function(){
        //把食物和蛇对象渲染到地图
        this.food.render(this.map);
        this.snake.render(this.map);
        //测试remove方法
        // this.snake.move();
        // this.snake.render(this.map);
        // this.snake.move();
        // this.snake.render(this.map);
        // this.snake.move();
        // this.snake.render(this.map);
        // this.snake.move();
        // this.snake.render(this.map);
        // this.snake.move();
        // this.snake.render(this.map);
        // this.snake.move();
        // this.snake.render(this.map);

        //开始游戏的逻辑
    }
    window.Game = Game;
})();
//测试
var map = document.getElementById('map');
var game = new Game(map);
game.start();