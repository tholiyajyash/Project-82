canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var previous_position_of_x, previous_position_of_y;
color = "red";
width_of_line = 11;

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mousedown")
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;

console.log ("last position of x and y coordinates =");
console.log("x = " + previous_position_of_x + "y = " + previous_position_of_y);
ctx.moveTo(previous_position_of_x, previous_position_of_y);

console.log ("Current position of x and y coordinates =");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();

}
previous_position_of_x = current_position_of_mouse_x;
previous_position_of_y = current_position_of_mouse_y;
 
}

canvas.addEventListener("mousedown" ,my_mousedown )
function my_mousedown(e)
{
mouseEvent="mousedown";

}

canvas.addEventListener("mouseup" ,my_mouseup )
function my_mouseup(e)
{
mouseEvent="mouseup";

}

canvas.addEventListener("mouseleave" ,my_mouseleave )
function my_mouseleave(e)
{
mouseEvent="mouseleave";

}