var canvas = document.getElementById("dotcanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#ff0000";
lastcoos = null;
canvas.addEventListener("click", function(e) {
    e.preventDefault();
    if(lastcoos === null) {
        lastcoos = [e.offsetX, e.offsetY];
    }
    ctx.beginPath();
    ctx.moveTo(lastcoos[0], lastcoos[1]);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 25, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    lastcoos = [e.offsetX, e.offsetY];
});
                     
var clearBut = document.getElementById("clear");
clearBut.addEventListener("click", function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lastcoos = null;
});
