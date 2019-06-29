function getInnerWindow() {
				  var w = window.innerWidth;
				  var h = window.innerHeight;
				  document.getElementById("demo").innerHTML = "Width: " + w + "<br>Height: " + h;
				}

function Datetest() {
	var d = new Date;
	document.getElementById("test").innerHTML = d;
}