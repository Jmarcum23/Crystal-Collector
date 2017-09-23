var numbers;
var putNumber;
var score;
var crystalRed;
var crystalBlue;
var crystalYellow;
var crystalGreen;
var wins = 0;
var losses = 0;

window.onload = function() {

  $("#red-crystal").click(crystalNumbers.red);
  $("#blue-crystal").click(crystalNumbers.blue);
  $("#yellow-crystal").click(crystalNumbers.yellow);
  $("#green-crystal").click(crystalNumbers.green);
};

var crystalNumbers = {

	red: function(){
		$("#score").html(score += crystalRed);
		checkScore();
	},
	blue: function(){
		$("#score").html(score += crystalBlue);
		checkScore();
	},
	yellow: function(){
		$("#score").html(score += crystalYellow);
		checkScore();
	},
	green: function(){
		$("#score").html(score += crystalGreen);
		checkScore();
	},
};
//console.log(crystalNumbers);

function reset(){
	numbers = Math.floor(Math.random()*101)+19;
	putNumber = $("#game-number").html(numbers);
	score = 0;
	$("#score").html(score);
	$("#wins").html(wins);
  	$("#losses").html(losses);
  	crystalRed = Math.floor(Math.random()*12)+1;
  	crystalBlue = Math.floor(Math.random()*12)+1;
  	crystalYellow = Math.floor(Math.random()*12)+1;
  	crystalGreen = Math.floor(Math.random()*12)+1;
}
reset();

function checkScore (){
	if(score === numbers){
	    wins++;
	    alert("You Won!");
	    reset();
	}
	if(score > numbers){
		losses++;
		alert("You Lose!");
		reset();
	}
}



