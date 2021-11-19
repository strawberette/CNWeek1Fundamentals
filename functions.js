//Arrow functions
// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();
// pressGrindBeans();

// We use parameters when declaring a function, arguments when we are calling the function

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from ${accnum}`);
// }
// cashWithdrawal(300, 50449921);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
// addUp(7,3); // this won't show unless we console.log the function
// console.log(addUp(2,5));

//Functions Declarations:
// function square (number) {
//     return number * number;
// };
// square(5);

// Functions expression:
// const square = function(number){
//     return number * number;
// };
// square(5);

// Functions arrow:
// const square = (number) => {
//     return number * number;
// };
// square(5);

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }
// console.log(factorial(33));

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log (`Pizza with ${topping1} and ${topping2}`);
//     orderCount++;
// }
// takeOrder("burrata", "truffle")

// const prompt = require('prompt-sync')();
// pin = 447
// balance = 7499

// const cashMachine = () => {
//     let insertedPin = prompt("Please insert your pin: ")
//         if (insertedPin == pin) {
//             const requestedBalance = prompt("Please insert the amount you would like to withdraw: ")
//          if (insertedPin == pin && requestedBalance <= balance) {
//         console.log("Here is your money, enjoy it!")
//          }
    
//         else {
//         console.log("I am afraid you don't have enough credit in your bank account, sorry! Try with a different amount")
//         }
//     }
//         else{
//         for (let i =0 ; i < 3 ; i++){
//             if (insertedPin != pin) {
//                 console.log("Your pin is incorrect, please try again")
//                 insertedPin = prompt("Please insert your pin: ")
//                 if (i==2){
//                     console.log("I am afraid you tried your pin too many times. Unfortunately it is now blocked. Check it in with your bank")
//                 }
//             } else{
//                 break
//             }
//         } 
        
//         }
    

// }



// cashMachine()

const prompt = require('prompt-sync')();
pin = 447
balance = 7499
const cashMachine = () => {
    let insertedPin = prompt("Please insert your pin: ")
    if (insertedPin != pin){
        for (let i =0 ; i < 2 ; i++) {
                if (insertedPin != pin) {
                    console.log("Your pin is incorrect, please try again")
                    insertedPin = prompt("Please insert your pin: ")
                }
                else if (insertedPin != pin && i>=2) {
                    console.log("I am afraid you tried your pin too many times. Unfortunately it is now blocked. Check it in with your bank")
                }
                else {
                    break
                }
        }
    }

    else {
        const requestedBalance = prompt("Please insert the amount you would like to withdraw: ")
            if (insertedPin == pin && requestedBalance <= balance) {
                console.log("Here is your money, enjoy it!")
                }
                
            else {
                console.log("I am afraid you don't have enough credit in your bank account, sorry! Try with a different amount")
                }
            }
}

cashMachine();
