function determineSeason(month, latitude){
	if (Math.abs(latitude) >= 25 && Math.abs(latitude) <= 60 ) {
		if ( latitude > 0 )	{	
			if ( (month >= 1 && month <= 3) || month === 12 ){
				currentSeason = 'winter';
				winter();
			} else if (month >= 4 && month <= 6) {
				currentSeason = 'spring';
				spring();
			} else if (month >= 7 && month <= 8) {
				currentSeason = 'summer';
				summer();
			} else if (month >= 9 && month <= 11){
				currentSeason = 'fall';
				fall();
			}
		}	else {
			if ( (month >= 1 && month <= 3) || month === 12 ){
				currentSeason = 'summer';
				summer();
			} else if (month >= 4 && month <= 6) {
				currentSeason = 'fall';
				fall();
			} else if (month >= 7 && month <= 8) {
				currentSeason = 'winter';
				winter();
			} else if (month >= 9 && month <= 11){
				currentSeason = 'spring';
				spring();
			}
		}		
	} else if (Math.abs(latitude) > 60) {
		currentSeason = 'arctic';
		arctic();
	} else   {
		currentSeason = 'tropical';
		tropical();
	}
	console.log("currentSeason = " + currentSeason)	
}

function winter(){
	currentSeason = 'winter'
	drawTree(currentSeason);
	drawGrass('aliceblue', 'white');
	drawLeaves();
	console.log(currentSeason)
};
function spring(){
	currentSeason = 'spring'
	drawTree(currentSeason);
	drawLeaves(currentSeason);
	drawGrass('darkgreen', 'green', 'spring');
	console.log(currentSeason)
};
function summer(){
	currentSeason = 'summer'
	drawTree(currentSeason);
	drawGrass('darkgreen', 'green');
	drawLeaves(currentSeason);
	console.log(currentSeason)
};
function fall(){
	currentSeason = 'fall'
	drawTree(currentSeason);
	drawLeaves(currentSeason);
	drawGrass('darkgreen', 'green');
	console.log(currentSeason)
};

function arctic() {
	currentSeason = 'artcic'
	drawGrass('aliceblue', 'white');
	drawTree(currentSeason);
	drawLeaves();
	console.log(currentSeason);
}

function tropical() {
	currentSeason = 'tropical'
	drawGrass('tan', 'blanchedalmond');
	drawTree(currentSeason);
	drawLeaves();
	console.log(currentSeason);
}