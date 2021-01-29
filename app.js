// Function Review

// #2.
const sum = (a,b) => {
    const args = [a,b];
    return args.reduce((a, b) => a + b, 0);
}

// #3.  console.log the function, passing in any two numbers as arguments. 

// example: 
// console.log(myAddFunction(1,2))  

// This should log the number three in your console.

console.log(myAddFunction(2,3))

//  #4.  Repeat steps two and three, but with a new function that adds three arguments together.

//  #5.  Repeat steps two and three, but with a new function that adds four arguments together.


//  # 6.

var myDog = {
    "name" : "Roscoe",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["kids", "toys", "dolphins"]
    };
var myKid = {
  "name" : "Aidan",
  "age" : 12,
  "eye color" : "Brown",
  "hobbies" : ["Gaming", "Eating", "Sports"]
};
var myHouse = {
  "address" : "3984 Dickson Ave",
  "color" : "Red and Brown Brick",
  "size" : 2300,
  "upgrades" : ["In home sauna", "Deck addition", "New upgrades coming soon"]

}

//  # 7.
var myDog = {
  "name" : "Roscoe",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["kids", "toys", "dolphins"]
  };
var myKid = {
"name" : "Aidan",
"age" : 12,
"eye color" : "Brown",
"hobbies" : ["Gaming", "Eating", "Sports"]
};
var myHouse = {
"address" : "3984 Dickson Ave",
"color" : "Red and Brown Brick",
"size" : 2300,
"upgrades" : ["In home sauna", "Deck addition", "New upgrades coming soon"]
}

var nameValue = myDog["name"];
var legsValue = myDog["legs"];
var friendsValue = myDog["friends"];

var nameValue = myKid["name"];
var ageValue = myKid["age"];
var hobbiesValue = myKid["hobbies"];

var addressValue = myHouse["address"];
var sizeValue = myHouse["size"];
var colorValue = myHouse["color"];


 

//  # 9.

var ourDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  ourDog.bark = "woof-woof";
  ourDog["legs"] = 2;
  ourDog['tails'] = 2;
  ourDog['friends'] = ["Junebugs", "balls"];
  

//   # 10.

var ourDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

  ourDog.name = "Cooper";
  ourDog.legs = 3;
  ourDog.tails = 0;
  ourDog.friends = ["none"];








