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
	this.start = function() {
		console.log("Starting timers for: " + this.name);
		var that = this;
		this.hungerTimer = setInterval(function() {
			that.cry()}, 6000); 
		this.yawnTimer = setInterval(function() {
			that.yawn()}, 10000);
		this.sickTimer = setInterval(function() {
			that.puke()}, 20000);
		}
	this.stop = function(){
    console.log("Stopping timers for: " + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
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
