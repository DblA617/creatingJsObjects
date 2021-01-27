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

//  # 7.

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  var hatValue = testObj.hat;      
  var shirtValue = testObj.shirt; 
  
//   # 8.

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  var entreeValue = testObj["an entree"];   
  var drinkValue = testObj["the drink"]; 

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








