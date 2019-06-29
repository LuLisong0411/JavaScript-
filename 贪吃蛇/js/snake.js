(function (){
    var position = 'absolute';
    var elements = [];
    function Snake(options){
        options = options || {};
        //蛇节
        this.width = options.width || 20;
        this.height = options.height || 20;
        //蛇移动的方向
        this.direction = options.direction || 'right';
        //蛇的身体 第一个元素是蛇头
        this.body = [
            {x: 3,y: 2,color:'red'},
            {x: 2,y: 2,color:'blue'},
            {x: 1,y: 2,color:'blue'},

        ]
    }
    Snake.prototype.render = function(map){
        //把每一个蛇节渲染到地图上
        for(var i = 0 ,len = this.body.length;i < len; i++){
            //蛇节
            var object = this.body[i];
            var div = document.createElement('div');
            map.appendChild(div);
            //记录当前蛇
            elements.push(div);
            div.style.position = position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this .height + 'px';
            div.style.backgroundColor = object.color;
        }
    }
    Snake.prototype.move = function(){
        //删除之前创建的蛇
        remove();
        //控制蛇的身体移动 当前蛇节移动到上一蛇节的位置
        for(var i = this.body.length - 1;i > 0;i--){
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //控制蛇头的移动
        
        //判断蛇移动的方向
        var head = this.body[0];
        switch(this.direction){
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }
    }
    //删除之前创建的蛇
    function remove(){
        for(var i = elements.length - 1;i >= 0 ;i--){
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中的元素
            elements.splice(i,1);
        }
    }
    window.Snake = Snake;
})();
