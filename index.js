var canvas = document.getElementById("thecanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#0000ff";
canvas.addEventListener("click", function(e) {
    ctx.fillRect(e.pageX - 50, e.pageY - 50, 100, 100);
});
                     
var clearBut = document.getElementById("clear");
clearBut.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
