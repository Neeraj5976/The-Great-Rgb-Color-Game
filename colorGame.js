var colors = genrateRandomColor(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var massegeDisplay=document.querySelector("#massege");
var header=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easybtn");
var hardBtn=document.querySelector("#hardbtn");
var numSquares=6;
 // do easy mode events
  easyBtn.addEventListener("click",function(){
  	   easyBtn.classList.add("selected");
  	   hardBtn.classList.remove("selected");
       numSquares=3;
        // generate random colors with numbers
       colors = genrateRandomColor(numSquares);
         // pick color
         pickedColor=pickColor();
          // set rgb value to match
         colorDisplay.textContent=pickedColor;
       for(var i=0;i<squares.length;i++)
       	   if(colors[i])
       	   	  squares[i].style.background=colors[i];
       	   else
       	     squares[i].style.display="none";	
       	 // alert(squares.length);
  });
    // in hard mode events

      hardBtn.addEventListener("click",function(){
  	   hardBtn.classList.add("selected");
  	   easyBtn.classList.remove("selected");
       numSquares=6;
        // generate random colors with numbers
       colors = genrateRandomColor(numSquares);
         // pick color
         pickedColor=pickColor();
           // set rgb value to match
           colorDisplay.textContent=pickedColor; 
       for(var i=0;i<squares.length;i++){
       	   	  squares[i].style.background=colors[i];
       	       squares[i].style.display="block";
       	 }	
  });

resetButton.addEventListener("click",function(){
    // generate random colors to play
    colors=genrateRandomColor(6);
    // pick a random color
    pickedColor=pickColor();
     // chang massege 
     massegeDisplay.textContent="";
    // change collorDisplay with random color
    colorDisplay.textContent=pickedColor;
    // change all suare color
    for(var i=0;i<squares.length;i++)
    	 squares[i].style.background=colors[i];
   header.style.background="steelblue"; 	
});
for(var i=0;i<squares.length;i++){
	 // set backgroundColor in squares
	squares[i].style.background=colors[i];
   squares[i].addEventListener("click",function(){
   	       // select the clicked color
        var clickColor=this.style.background;
         if(clickColor===pickedColor){
         	  massegeDisplay.textContent="Correct!";
             changeColor(clickColor);
             header.style.background=clickColor;
             resetButton.textContent="Play Again?";
         }
         else{
            this.style.background="#232323"
         	massegeDisplay.textContent="Try Again!";
         }
            
   });


}
    // change color of each squares
function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

  // pick random colors
 
 function pickColor(){
 	var random=Math.floor(Math.random()*colors.length);
 	return colors[random];
 }
    // generate random colors functions
function genrateRandomColor(n){
	var arr=[];
	for (var i = 0; i < n; i++) {
		   arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


