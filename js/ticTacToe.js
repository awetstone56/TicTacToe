var currentTurn = "x";
var numOfTurns = 0;
var gameWon=false;

//function that controls a player making their turn
function placeMark(index){
	//if game is finished, don't allow any changes
	if(gameWon === false){
		//if a spot is already taken by an x or o, state that it is an invalid move
		if(document.getElementById(`gamePic${index}`).name !== "n")
			document.getElementById("gameStatus").innerHTML = "<h2>Invalid move</h2>";
		else{
			//if it is player x's turn
			if(currentTurn==="x"){
				document.getElementById(`gamePic${index}`).src = "./images/x.jpg";
				document.getElementById(`gamePic${index}`).name = "x";
				currentTurn = "o";
			//if it is player o's turn
			}else{
				document.getElementById(`gamePic${index}`).src = "./images/o.jpg";
				document.getElementById(`gamePic${index}`).name = "o";
				currentTurn = "x";
			}
		}
		//numOfTurns to increase efficiency so winner is not checked when not needed
		numOfTurns++;
		//calls for winner check when needed
		if(numOfTurns >= 5){
			checkForWinner(document.getElementById(`gamePic${index}`).name);
		}
	}
}

//check all various winning combinations and if won, do appropriate 
function checkForWinner(player){
	//checks the image's name attribute to see if it matches the player
	if(document.getElementById(`gamePic0`).name === player){ 

		//row 012
		if((document.getElementById(`gamePic1`).name === player) && (document.getElementById(`gamePic2`).name === player)){
			document.getElementById("gameStatus").innerHTML = `<h2>${player} wins!</h2><h4>Press restart to start a new game.</h4>`;
			gameWon = true;
		}
		//diagonal 048
		if((document.getElementById(`gamePic4`).name === player) && (document.getElementById(`gamePic8`).name === player)){
			document.getElementById("gameStatus").innerHTML = `<h2>${player} wins!</h2><h4>Press restart to start a new game.</h4>`;
			gameWon = true;
		}
		//diagonal 036
		if((document.getElementById(`gamePic3`).name === player) && (document.getElementById(`gamePic6`).name === player)){
			document.getElementById("gameStatus").innerHTML = `<h2>${player} wins!</h2><h4>Press restart to start a new game.</h4>`;
			gameWon = true;
		}
	}
	if(document.getElementById(`gamePic1`).name === player){

		//column 147
		if((document.getElementById(`gamePic4`).name === player) && (document.getElementById(`gamePic7`).name === player)){
			document.getElementById("gameStatus").innerHTML = `<h2>${player} wins!</h2><h4>Press restart to start a new game.</h4>`;
			gameWon = true;
		}
	}
	if(document.getElementById(`gamePic2`).name === player){

		//diagonal 246
		if((document.getElementById(`gamePic4`).name === player) && (document.getElementById(`gamePic6`).name === player)){
			document.getElementById("gameStatus").innerHTML = `<h2>${player} wins!</h2><h4>Press restart to start a new game.</h4>`;
			gameWon = true;
		}
		//column 258
		if((document.getElementById(`gamePic5`).name === player) && (document.getElementById(`gamePic8`).name === player)){
			document.getElementById("gameStatus").innerHTML = `<h2>${player} wins!</h2><h4>Press restart to start a new game.</h4>`;
			gameWon = true;
		}
	}
	if(document.getElementById(`gamePic3`).name === player){

		//row 345
		if((document.getElementById(`gamePic4`).name === player) && (document.getElementById(`gamePic5`).name === player)){
			document.getElementById("gameStatus").innerHTML = `<h2>${player} wins!</h2><h4>Press restart to start a new game.</h4>`;
			gameWon = true;
		}
	}
	if(document.getElementById(`gamePic6`).name === player){ 

		//row 678
		if((document.getElementById(`gamePic7`).name === player) && (document.getElementById(`gamePic8`).name === player)){
			document.getElementById("gameStatus").innerHTML = `<h2>${player} wins!</h2><h4>Press restart to start a new game.</h4>`;
			gameWon = true;
		}
	}
}

//function to reset game 
function resetGame(){
	//gets all images and changes them to original image and resets variables and attributes to originals
	let images=document.getElementsByTagName("img");
	for(let i=0;i<images.length; i++)
	{
		let pic=images[i];
		pic.src = "./images/gameBackground.jpg";
		pic.name= "n";
	}
	document.getElementById("gameStatus").innerHTML = ``;
	gameWon=false;
	numOfTurns=0;
	currentTurn="x";
}
