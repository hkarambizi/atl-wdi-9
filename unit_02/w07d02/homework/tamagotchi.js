console.log('tamagotchi file is loaded');

//your constructor function here
function Tamagotchi(name, creatureType) {
	this.name = name;
	this.type = creatureType;
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.cry = function() {
		this.foodInTummy--;
		console.log("This tamagotchi has this much food in tummy: " + this.foodInTummy);
		console.log("WAAAHH!!!!. This tamagotchi is now crying!");
	}
	this.puke = function() {
		this.foodInTummy--;
		console.log("This tamagotchi has this much food in tummy: " + this.foodInTummy);
		console.log("BoooHooo!!. This tamagotchi puked and is now crying!");
	}
	this.yawn = function() {
		this.restedness--;
		console.log(this.name + " has current restedness of: " + this.restedness);
	}
};


//create new Tamagotchis
//1st Tamagotchi named "Earl"
var earl = new Tamagotchi('Earl', 'Drunkard');
	earl.cry();
//2nd Tamagotchi named "Shirley"
var shirley = new Tamagotchi('Shirley', 'Sheriff');
	shirley.cry();
//3rd Tamagotchi named "Elizabeth"
var liz = new Tamagotchi('Elizabeth', 'School Principal');
	liz.yawn();
	liz.puke();
//4th Tamagotchi named "Shawn"
var shawn = new	Tamagotchi('Shawn', 'Lawyer');
	shawn.puke();
	shawn.yawn();
//test out your Tamagotchies below via console.logs
