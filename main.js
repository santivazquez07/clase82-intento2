var mouse_event= "empty";
var last_position_x, last_position_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line=1;
canvas.addEventListener("mouse_down", my_mouse_down);
function my_mouse_down(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouse_event="mouse_down";
}
canvas.addEventListener("mouse_move", my_mouse_move);
function my_mouse_move(e){
    curent_position_mouse_x=e.clientX-canvas.offSetLeft;
    curent_position_mouse_y=e.clientY-canvas.offSetTop;
    
    if (mouse_event=="mouse_down"){
        ctx.beginpath();
        ctx.strokestyle=color;
        ctx.lineWidth=width_of_line;
        console.log("coordenadas de la ultima posicion X y Y=");
        console.log("X="+ last_position_x+"Y="+ last_position_y);
        ctx.moveto(last_position_x, last_position_y);
        console.log("coordenadas de la posicion actual de X y Y=")
        console.log("X="+ current_position_mouse_x+ "Y="+ current_position_mouse_y);
        ctx.lineto(current_position_mouse_x, current_position_mouse_y);
        ctx.stoke();   
    }
    last_position_x=current_position_mouse_x;
    last_position_y=current_position_mouse_y;
}
canvas.addEventListener("mouse_up", my_mouse_up);
function my_mouse_up(e){
    mouse_event="mouse_up";
}
canvas.addEventListener("mouse_leave", my_mouse_leave);
function my_mouse_leave(e){
    mouse_event="mouse_leave";
}
