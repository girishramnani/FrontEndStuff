var defualt_size = 20;
var canvas = document.getElementById("container");
var context = canvas.getContext("2d");


var data = {};
data.context = context;
data.canvas = canvas;
data.size = 20;


context.stroke();
var block = function (x, y) {
    this.x = x;
    this.y = y;
    this.color = "black";
};


var drawWalls = function (data) {
    var height = data.canvas.height;
    var width = data.canvas.width;
    var blockSize = data.size;
    
    var drawRect = function(x,y,w,h) {
     data.context.strokeRect(x,y,w,h);   
    }
    
    for (var i=0;i*blockSize<width;i++){
        drawRect(i*blockSize,0,blockSize,blockSize);
        drawRect(i*blockSize,height-blockSize,blockSize,blockSize);
    }
    for (var i=0;i*blockSize<height;i++){
        drawRect(0,i*blockSize,blockSize,blockSize);
        drawRect(width-blockSize,i*blockSize,blockSize,blockSize);
    }
    
    data.context.stroke();
    
}

var movement = {
 up : [0,1];    
 down : [0,-1];    
 left : [1,0];
 right : [-1,0];
}

console.log(movement.up);
var snake = function(x,y) {
 head = new block(x,y);
 head.color = "red";
 body = [];
 heading = moment.up;
 
 var move = function() {
     
     
 }
    
    
 var draw = function(data){
    data.context.fillRect(this.head.x,this.head.y,data.size,data.size);
 }
    
}

var gameLoop(){
       
drawWalls(data);
    
}
gameLoop();