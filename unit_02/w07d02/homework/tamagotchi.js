console.log('tamagotchi file is loaded');

//your constructor function here
function Tamagotchi(foodInTummy, restedness, health) {
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.cry = function() {
		this.foodInTummy--;
		console.log("This tamagotchi has this much food in tummy: " + this.foodInTummy);
		console.log("WAAAHH!!!!. This tamagotchi is now crying!");
	}
	this.puke = function() {
		this.food
	}
};

//create new Tamagotchis
//1st Tamagotchi named "Shirley"
var earl = new Tamagotchi();
	earl.name = "Earl";
	earl.creatureType = "Drunkard";
	earl.cry();
//2nd Tamagotchi named "Shirley"
var shirley = new Tamagotchi();
	shirley.name = "Shirley";
	shirley.creatureType = "Sheriff";
	shirley.cry();


//test out your Tamagotchies below via console.logs
