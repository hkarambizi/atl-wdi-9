console.log('tamagotchi file is loaded');

//your constructor function here
function Tamagotchi(foodInTummy, restedness, health) {
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.cry = function() {
		this.foodInTummy--;
		console.log(this.foodInTummy);
		console.log("WAAAHH!!!!");
	}
};

//create new Tamagotchis


//test out your Tamagotchies below via console.logs
