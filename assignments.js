// DotNotations
//Activity

// function matrix_1() {
// for (let i = 0; i <3; i++)
//     {console.log("   |   |   ");}
// console.log("------------");
// };
// matrix_1();
// matrix_1();
// function matrix_2() {
// for (let i = 0; i <3; i++)
// {console.log("   |   |   ");}
// };
// matrix_2();

//Variables_Operators
// Activity 1 + Stretch

// let firstName = "Noemi";
// let age = 7;
// let favouriteColour = "Aquamarine";

// console.log(`Hello, my name is ${firstName}, when I was ${age} my favourite colour used to be ${favouriteColour}`);

// age = 38;
// favouriteColour = "Rose gold";

// console.log(`Now that I am ${age}, I also really love ${favouriteColour}.`);


// Activity 2 + Stretch
// let breakfast = "Soufflé";
// let lunch = "Cauliflower soup";
// let dinner = "Fish curry";

// console.log(`Today's menu is ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

// breakfast = "Yogurt";
// lunch = "Salad";
// dinner = "Risotto";

// console.log(`Tomorrow's menu is ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

// Activity 3
// let todayDate = Date.parse("2021-11-16");
// let birthday = Date.parse("2022-05-22");
// let difference = new Date(birthday - todayDate);
// let days = difference/1000/60/60/24;
// console.log(`There are ${days} until my birthday`);

// // Activity 4
// let x = "X";
// let o = "O";
// let blank = " ";

// function matrix_1(space1, space2, space3) {
//     for (var i = 0; i <3; i++) { 
//         if (i == 1){
//             console.log(` ${space1} | ${space2} |  ${space3}  `);
//         }
//         else {
//             console.log("   |   |   ");
//         }
//     }
// };

// matrix_1(x, o, blank);
// console.log("------------");

// matrix_1(x,x, blank);
// console.log("------------");
// matrix_1(o, blank, blank);




// ifElseSwitch
// Activity 1 + Stretch
// let age = 15;
// let country = "UK"

// if (age > 17 && country == "UK" ) {
//     console.log("Yes, I can serve you");
// }
//  else if (age <= 17 && country == "UK") {
//     console.log("You aren't old enough");
// }
// else {
//     console.log("I don't know the rules of your Country, sorry!")
// }

// Activity2

// let choice = "strawberry";

// let ingredient1 = "burrata";
// let ingredient2 = "tomato sauce";
// let ingredient3 = "truffle";
// let ingredient4 = "pineapple";
// let ingredient5 = "pepperoni";
// let ingredient6 = "cheese";

// switch(ingredient1){
//     case ingredient1:
//     case ingredient2:
//     case ingredient3:
//         console.log(`${ingredient1}, ${ingredient2}, ${ingredient3} are my perfect choice of ingredients for pizza`)
//         break;
//     case ingredient6:
//         console.log("I don't mind some extra cheese!")
//         break;
//     case ingredient4:
//     case ingredient5:
//         console.log(`${ingredient4} and ${ingredient5} are forbidden ingredients on an italian pizza!!!`)
//         break;
//     default:
//         console.log(`I don't mind all the rest, and ${choice} pizza is the best!`)
// // }

// // Activity 3 
// password = "supercalifragilistichespiralidous"
// if(password.length < 8) {
//     console.log("I am afraid this password is too short!");
// }
// else{
//     console.log(`${password}`)
// }

// Stretch
// let num = 15
// if(num % 3 == 0 || num % 5 == 0){
//     if(num % 3 == 0 && num % 5 == 0){
//         console.log("This number is divisible by 3 and 5!!!!")
//     }
//     else {console.log("This number is divisible by 3 or 5!")
//     }
// }

// else{
//     console.log("Guess what? This number is not divisible by 3 or 5!")
// }



// Arrays
// Activity 1
// let favMusic = [
//         "Holocene - Bon Iver",
//         "Terrible Love - The National",
//         "Istituto Majorana - Colapesce"
//     ]
    
//     console.log(favMusic);
   
    

// Stretch
// let favMusic = [
//         "Holocene - Bon Iver",
//         "Terrible Love - The National",
//         "Istituto Majorana - Colapesce"
//     ]
//     favMusic.push("Dark Star - Poliça", "Youth - Daughter");
//     favMusic.pop();
//     console.log(favMusic);
  
// Activity 2, same example as before but using unshift()
// let favMusic = [
//         "Holocene - Bon Iver",
//         "Terrible Love - The National",
//         "Istituto Majorana - Colapesce"
//     ]
//     favMusic.unshift("Dark Star - Poliça", "Youth - Daughter");
//     console.log(favMusic);
    
// Loops
// Activity1
// let favMovies = [
//     "Call me by your name",
//     "His Secret Life", 
//     "Life is beautiful", 
//     "All about my mother", 
//     'Amélie'
// ];
// favMovies.push("Edmond Rostand", "The science of sleep");
// for ( let i = 0; i < favMovies.length; i++) {
// console.log(favMovies[i]);
// }

// Activity2
// for ( let num = 0; num <6; num++ ){
//     let num = (Math.round(Math.random()*50));
//     console.log(num);
// }

// Activity3:

// let array = [];
// for ( let i =0; i <= 9; i++ ) {
//     let num = Math.round(Math.random()*50);
//     array.push(num);
//     }

// console.log(array.reverse())

// Activity4
// let favMovies = ["Call me by your name", "His Secret Life", "Life is beautiful", 'Amélie'];
// for ( let i = 0; i < favMovies.length; i++) {
// console.log(favMovies[i]);
// }
// if (favMovies[2] == "Ghostbusters") {
//     console.log("Yaaay! It's Ghostbusters!!!! :)");
// }
// else {
//     console.log("Nooooo! We want Ghostbusters! :(")
// }

// Activity5
// for ( let i = 1; i <= 6; i++ ){
//         let num = (Math.round(Math.random()*30));
//         if (num % 7 == 0)
//         console.log(`${num} is divisible by 7`);
//         else {
//             console.log(`${num} is not divisible by 7`);
//         }
//     }

// Activity6
// let bobsFollowers = ["Annabelle", "Hélöise", "Esteban", "Joshua"]
// let hannahsFollowers = ["Joshua", "Samantha", "Annabelle", "Amélie"]
// for ( let i = 0; i < bobsFollowers.length ; i++ ) {
//     for (let l = 0; l < hannahsFollowers.length ; l++) {
//         if (bobsFollowers[i] == hannahsFollowers[l]) {
//             console.log(`${bobsFollowers[i]} is both a follower of Bob and Hanna`)
//         }
//     }
// }

// Acitivy7

// while loop

// let x = 0
// while (x < 70) {
//     x++;
//     console.log(x);
// }

// Do...While loop
// let word =["s", "u", "p","e","r","c","a","l","i","f","r","a","g","i","l","i","s","t","i","c","e","x","p","i","a","l","i","d","O","c","i","o","u","s"]
// do {
//     word.push("s");
//     console.log(word);
// } while (word.length < 50)


// Functions
// Activity1
//  const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }
// console.log(factorial(33));

// Activity2
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log (`Pizza with ${topping1} and ${topping2}`);
//     orderCount++;
// }
// takeOrder("burrata", "truffle")

// Activity3
// const prompt = require('prompt-sync')();

// pin = 447
// balance = 7499

// const cashMachine = () => {
//     let insertedPin = prompt("Please insert your pin: ")
//     for (let i = 0; i < 3; i++) {
//         if (insertedPin == pin) {
//             break
//         }

//         if (insertedPin != pin && i == 2 ) {
//             console.log("I am afraid you tried your pin too many times. Unfortunately it is now blocked. Check it in with your bank")
//             return
//         }

//         console.log("Your pin is incorrect, please try again")
//         insertedPin = prompt("Please insert your pin: ")
//     }

//     const requestedBalance = prompt("Please insert the amount you would like to withdraw: ")
//     if (requestedBalance > balance) {
//         console.log("I am afraid you don't have enough credit in your bank account, sorry! Try with a different amount")
//         return
//     }

//     console.log("Here is your money, enjoy it!")
// }

// cashMachine()

// Objects
// Activity1
// const person = {
//         name: "Noemi",
//         age: "38",
//         sayHi() {
//             return `Hello, my name is ${this.name}`
//         }
//     }
//     person.favSongs = [
//         "Holocene",
//         "Terrible Love",
//         "Dark Star"
//     ]
//     // console.log(person.favSongs)
//     // console.log(person.name)
//     console.log(person.sayHi())
    


// Activity2
    // const pet = {
    //     name : "Miki",
    //     typeOfPet : "cat",
    //     age : "3",
    //     colour : "Blue grey",
    //     eat() {
    //         return `${this.name} is eating `
    //     },
    //     drink() {
    //         return `${this.name} is drinking`
    //     }
    //     }
    // console.log(pet.eat() + pet.drink())


// Activity3
// drinksOrder = [
//     "Espresso",
//     "Americano",
//     "Latte"
// ]
// foodOrder = [
//     "Biscuit",
//     "Cake"
// ]
// coffeeShop = {
//     branch : "Costa",
//     drinks : [
//         "Espresso", 
//         "Cappuccino", 
//         "Latte" ,
//         "Americano", 
//         "HotChocolate", 
//         "Tea"
//     ],
//     drinkPrices : [
//         1.50,
//         4,
//         3,
//         3.50,
//         2.50
//     ],
//     food: [
//         "Sandwich",
//         "Salad" ,
//         "Snack" ,
//         "Biscuit" ,
//         "Cake"
//     ],
//     foodPrices: [
//         4,
//         4.58,
//         3,
//         1,
//         3.50
//     ],
//     drinksOrdered() {
//         drinksBill = []
//         for (let i = 0 ; i < drinksOrder.length ; i++) {
//             for (let j = 0; j < coffeeShop.drinks.length; j++) {
//                 if (drinksOrder[i] == coffeeShop.drinks[j]){
//                     drinksBill.push(j)
//                 }
                
//             }
//         }
    
//         console.log('------------------')
//         console.log(`Your drinks order is:\n`)
//         sum = 0
//         for (l = 0; l < drinksBill.length; l++) {
//             console.log(`${coffeeShop.drinks[drinksBill[l]]} ${coffeeShop.drinkPrices[drinksBill[l]]}`)
//             sum += coffeeShop.drinkPrices[drinksBill[l]]
//         }
//         console.log('------------------')
//         console.log(`Total: £ ${sum} \n`)
//         return(sum)
//         },
    
//     foodOrdered() {
//         foodBill = []
//         for (let i = 0 ; i < foodOrder.length ; i++) {
//             for (let j = 0; j < coffeeShop.food.length; j++) {
//                 if (foodOrder[i] == coffeeShop.food[j]){
//                     foodBill.push(j)
//                 }
                
//             }
//         }
    
//         console.log('------------------')
//         console.log(`Your food order is:\n`)
//         sum = 0
//         for (l = 0; l < foodBill.length; l++) {
//             console.log(`${coffeeShop.food[foodBill[l]]} ${coffeeShop.foodPrices[foodBill[l]]}`)
//             sum += coffeeShop.foodPrices[foodBill[l]]
//         }
//         console.log('------------------')
//         console.log(`Total: £ ${sum} \n`)
//         return(sum)
//     }
    
// }
// // total
// let foodSum = coffeeShop.foodOrdered()
// let drinkSum = coffeeShop.drinksOrdered()
// console.log(`Grand Total: £ ${foodSum + drinkSum}`)
