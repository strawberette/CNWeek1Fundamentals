// let i = 10;
// console.log(i);
// i +=2;
// console.log(i);

// let firstName = "Noemi";
// let age = 38;
// let favouriteDrink = "coffee";
// // console.log("My favourite drink is " + favouriteDrink);
// console.log(`Hello, my name is ${firstName}, I am ${age}, and my favourite drink is ${favouriteDrink}`);
// //With Template literals we can inject variables into strings very easily
// let firstName = "Noemi";
// let age = 7;
// let favouriteColour = "Aquamarine";

// console.log(`Hello, my name is ${firstName}, when I was ${age} my favourite colour used to be ${favouriteColour}`);

// age = 38;
// favouriteColour = "Rose gold";

// console.log(`Now that I am ${age}, I also really love ${favouriteColour}.`);


// let breakfast = "Soufflé";
// let lunch = "Cauliflower soup";
// let dinner = "Fish curry";

// console.log(`Today's menu is ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

// breakfast = "Yogurt";
// lunch = "Salad";
// dinner = "Risotto";

// console.log(`Tomorrow's menu is ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

// let todayDate = Date.parse("2021-11-16");
// let birthday = Date.parse("2022-05-22");
// let difference = new Date(birthday - todayDate);
// let days = difference/1000/60/60/24;
// console.log(days);

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

// let weather = "sunny" 
// if (weather == "sunny"){
//     console.log("Well, I better wear some sun screen");
// } else if (weather == rainy){
//     console.log("Better take un ambrella");
// } else {
//     console.log("Hmmmm, it could go either ways");
// }

// = (compare the real value 1+1 = 2 true but 1 = "1" false)
// == (compare the absolute value 1 == "1" true )
// == (compare the strict value, that means that the other two are true 1 = "1" false)

// == Equal
// === Strict Equal
// != Not Equal
// !== Strict Not Equal

// let place = "Manc";
// let weather = "Cloudy";
// if (place == "Manc" && weather == "Sunny"){
//     console.log("Check again");
// }
//     else if (place == "Manc" && weather == "Rain"){
//         console.log("Obvs");
//     }
//     else {
//     console.log("What?It isn't raining?");

//     }
    
// Logical operators:
// && and (both conditions have to be met for the code to run)
// || or (either conditions can be met for the code to run)

// swith(expression){
//     case x:
//         code here
//         break;
//     case y:
//         code here
//         break;
//     default:
//         code here
//     }


// const grade = 87;

// switch (true) {
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//     case grade >= 50:
//         console.log("Pass");
//         break;
//     case grade >= 70:
//         console.log("Fail");
//         break;
//     default:
//         console.log("Failed");
// }

// let age = 15;
// let country = "France"

// if (age > 17 && country == "UK" ) {
//     console.log("Yes, I can serve you");
// }
//  else if (age <= 17 && country == "UK") {
//     console.log("You aren't old enough");
// }
// else {
//     console.log("I don't know the rules of your Country, sorry!")
// }


// let ingredient = "strawberry";
// let ingredient1 = "burrata";
// let ingredient2 = "tomato sauce";
// let ingredient3 = "truffle";
// let ingredient4 = "pineapple";
// let ingredient5 = "pepperoni";
// let ingredient6 = "cheese";

// switch(ingredient){
//     case ingredient1:
//     case ingredient2:
//     case ingredient3:
//         console.log("These are my perfect choice of ingredients for pizza")
//         break;
//     case ingredient6:
//         console.log("I don't mind some extra cheese!")
//         break;
//     case ingredient4:
//     case ingredient5:
//         console.log("These ingredients are forbidden on an italian pizza!!!")
//         break;
//     default:
//         console.log("I don't mind all the rest")
// }


// password = "supercalifragilispichespiralidous"
// if(password.length < 8) {
//     console.log("I am afraid this password is too short!");
// }
// else{
//     console.log(`${password}`)
// }

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

// let num = 1001;
