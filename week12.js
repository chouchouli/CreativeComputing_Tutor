
var box = document.querySelector("#box") 

//--------------------------we add an eventlistener to detect whether there is an event happend on an object
//--------------------------there are two parameters for event listner 
//-------------------------- -1- type of event ---- a string
//-------------------------- -2- the function we want to perform ---- only function name, no()is needed


//box.addEventListener("click", onBoxClick)
//declare our own function we can use it by call it name
function onBoxClick(){
//ways to change the div we define like:
//box.style.backgroundColor = "blue"
//box.innerHTML = "BOX"

	if(box.style.backgroundColor == "blue"){
		box.style.backgroundColor = "red"
	}else{
		box.style.backgroundColor = "blue"
	}
}


//document.addEventListener("mousemove", onMouseMove)
//---------------------------document.addEventListener() is used when you dont specify the object you want to observed
function onMouseMove(evt){
	//evt is mouse movement object has tons of properties like screenX...
	var x = evt.x
	var y = evt.y
	console.log(x,y)

	box.style.left = x + "px"   // because x is a number however we need ?px in CSS, so we are adding a "px" string to the number we got to let css successfully read
	box.style.top = y + "px"
}


window.addEventListener("resize", onWindowResize)
function onWindowResize (){
	var r = window.innerWidth
	var g = window.innerHeight
	var b = 255
	
	console.log(r,g)
	
	document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
	
}