canvas=new fabric.Canvas("myCanvas");
var player_x=10;
var player_y=10;

block_width=30;
block_height=30;

var player="";
var block="";

function player_load(){
    fabric.Image.fromURL("player.png",function(Img){
        player=Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player);
    });
}
function block_load(get_image){
    fabric.Image.fromURL(function(Img){
        block=Img;
        block.scaleToWidth(block_width);
        block.scaleToHeight(block_height);
        block.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey&&keyPressed=="80"){
       block_width=block_width+10;
       block_height=block_height+10;
       document.getElementById("width").innerHTML=block_width;
       document.getElementById("height").innerHTML=block_height;
    }
    if(e.shiftKey&&keyPressed=="77"){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
    }
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }
    if(keyPressed=="87"){
        block_load("wall.jpg");
    }
    if(keyPressed=="71"){
        block_load("ground.jpg");
    }
    if(keyPressed=="76"){
        block_load("light_green.png");
    }
    if(keyPressed=="84"){
        block_load("trunk.jpg");
    }
    if(keyPressed=="82"){
        block_load("roof.jpg");
    }
    if(keyPressed=="89"){
        block_load("yellow_wall.png");
    }
    if(keyPressed=="68"){
        block_load("dark_green.png");
    }
    if(keyPressed=="85"){
        block_load("unique.png");
    }
    if(keyPressed=="67"){
        block_load("cloud.jpg");
    }
}
function up(){
    if(player_y>=0){
    player_y=player_y-block_height;
    canvas.remove(player);
    player_load();
}
function down(){
    if(player_y<=500){
    player_y=player_y+block_height;
    canvas.remove(player);
    player_load();
}
function left(){
    if(player_x>=0){
    player_x=player_x-block_width;
    canvas.remove(player);
    player_load();
}
function right(){
    if(player_x<=900){
    player_x=player_x+block_width;
    canvas.remove(player);
    player_load();
}