//1. Log each word in words in upper case using forEach.
var words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
//Solution=> logs ["HO", "CHI", "MINH", "CITY", "WAS", "ONCE", "KNOWN", "AS", "PREY", "NOKOR"]
words.forEach(function(word, i, words){
	words[i]= words[i].toUpperCase();
});

console.log(words);

//2. Log each number in squareMe square value in the array using forEach.
var squareMe = [0, 1, 10, 24, 595]
//Soulution => logs [0, 1, 100, 576, 354025]
squareMe.forEach(function(n, i, squareMe) {
	squareMe[i] = n * n;
});
console.log(squareMe);


//3. Log the average as a Number for the numbers in the numbers array using forEach.
var numbers = [5,7,9,12,20]


//Solution => logs 10.6

//NEXT: forEach: iterating an array of objects

var products = [
  { name: 'flower vase',   price: 75 },
  { name: 'lamp',  price: 85 },
  { name: 'jar of honey',   price: 95 },
  { name: 'seashell frame', price: 65 },
  { name: 'lumber',  price: 55 }
];

//For the following 3 questions, use the products array above.

//4. Log an array of each products' price using forEach. Upgrade this array so that the prices are in ascending order.

products.forEach(function(v) {
	prices.push(v.price).sort;
});

console.log(prices);



//Expected Output:
//each products' price
//=>logs [ 75, 85, 95, 65, 55 ]
//in ascending order
//=>logs [55, 65, 75, 85, 95 ]

//5. We're having a clearance sale, everything's 1/2 off! For each object, add a new key value pair for discount and assign it a value of that object's price at 50% off.




//Expected Output:
/*=> logs [ { name: 'flower vase', price: 75, discount: 37.5 },
{ name: 'lamp', price: 85, discount: 42.5 },
{ name: 'jar of honey', price: 95, discount: 47.5 },
{ name: 'coil', price: 65, discount: 32.5 },
{ name: 'lumber', price: 55, discount: 27.5 } ]*/

//6. Sales were so good for our top-of-the-line products that we are extending the sale! Only odd-indexed products are going to be on sale though. The rest will not have a discounted price.


/*Expected output:
[ { name: 'flower vase', price: 75 },
{ name: 'lamp', price: 85, discount: 42.5 },
{ name: 'jar of honey', price: 95 },
{ name: 'coil', price: 65, discount: 32.5 },
{ name: 'lumber', price: 55 } ]*/


//NEXTnested forEach

var myOrder = [
   ["beef", "turkey", "chicken", "veggie"],
   ["cheese", "pickles", "lettuce", "onion"],
   ["coke", "sprite", "iced tea", "water"]
];

//7. Use a nested forEach to console.log the element in index position 1 in the inner arrays.




/*Expected Output:

turkey
pickles
sprite
*/