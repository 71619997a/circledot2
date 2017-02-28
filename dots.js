var canvas = document.getElementById("svgcanvas");
var ns = "http://www.w3.org/2000/svg"
lastline = null;
canvas.addEventListener("click", function(e) {
    e.preventDefault();
    if(lastline !== null) {
	lastline.setAttribute("x2", e.offsetX);
	lastline.setAttribute("y2", e.offsetY);
	canvas.appendChild(lastline);
    }
    var circ = document.createElementNS(ns, "circle");
    circ.setAttribute("cx", e.offsetX);
    circ.setAttribute("cy", e.offsetY);
    circ.setAttribute("r", 25);
    circ.setAttribute("fill", "red");
    circ.setAttribute("stroke", "black");
    canvas.appendChild(circ);
    var line = document.createElementNS(ns, "line");
    lastline = line;
    line.setAttribute("x1", e.offsetX);
    line.setAttribute("y1", e.offsetY);
    line.setAttribute("stroke", "black");
});
                     
var clearBut = document.getElementById("clear");
clearBut.addEventListener("click", function(e) {
    e.preventDefault();
    canvas.innerHTML = '';
    lastline = null;
});
