(function(){
    var this_;    //记录游戏对象
    function Game(map){
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        this_ = this;
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
       
        //开始游戏的逻辑
        //让蛇动起来
        runSnake();
        //当蛇遇到边界游戏结束 
        //通过键盘控制蛇的移动方向

        //当蛇遇到食物 做相应的处理

        
    }
    function runSnake(){
        var timerId = setInterval(function(){
            //让蛇走一格
            //定时器的function中的this是指向window的，可以定义一个变量记录this。this_ = this.
            //获取游戏对象中的蛇的属性
            this_.snake.move();
            this_.snake.render(this_.map);
            //当蛇遇到边界游戏结束 
            //获取蛇头坐标
            var maxX = this_.map.offsetWidth / this_.snake.width;
            var maxY = this_.map.offsetHeight / this_.snake.height; 
            var headX = this_.snake.body[0].x;
            var headY = this_.snake.body[0].y;
            if(headX < 0 || headX >= maxX){
                alert('Game Over');
                clearInterval(timerId);
            }
            if(headY < 0 || headY >= maxY){
                alert('Game Over');
                clearInterval(timerId);
            }

        },100)
    }
    window.Game = Game;
})();
//测试
var map = document.getElementById('map');
var game = new Game(map);
game.start();