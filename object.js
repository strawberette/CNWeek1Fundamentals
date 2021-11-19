

// const person = {
//     name: "Noemi",
//     age: "38",
//     sayHi() {
//         return `Hello, my name is ${this.name}`
//     }
// }
// person.favSongs = [
//     "Holocene",
//     "Terrible Love",
//     "Dark Star"
// ]
// // console.log(person.favSongs)
// // console.log(person.name)
// console.log(person.sayHi())


// let offer = "none";
// let time = 1200;
// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter Coffee",
//         "tea", 
//         "hot chocolate"
//     ],
//     breakfastOffer : "Free croissant with coffee",
//     lunchOffer : "Free drink with surprisingly expensive sandwich",
//     noOffer : "Sorry, no offer",
//     openCafe(){
//         if (this.hasSpecialOffers){
//             return "Time for a special offer!";
//         }
//     },
//     closeCafe(){
//         return "We are close, come back tomorrow!"
//     }
// }
// console.log(cafe.openCafe())

// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
//   } else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
//   }




// const prompt = require('prompt-sync')();
// const alarm = {
//     weekendAlarm : 900,
//     weekdayAlarm : 700
// }
// let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday" ]

// let today = prompt("What day would you like to set your alarm for? ")

//     if (today == day[5] || today == day[6] ) {
//         console.log(`Today's alarm will be set at ${alarm.weekendAlarm}`)
//     }
//     else {
//         console.log(`Today's alarm will be set at ${alarm.weekdayAlarm}`)
//     }


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


drinksOrder = [
    "Espresso",
    "Americano",
    "Latte"
]
foodOrder = [
    "Biscuit",
    "Cake"
]
coffeeShop = {
    branch : "Costa",
    drinks : [
        "Espresso", 
        "Cappuccino", 
        "Latte" ,
        "Americano", 
        "HotChocolate", 
        "Tea"
    ],
    drinkPrices : [
        1.50,
        4,
        3,
        3.50,
        2.50
    ],
    food: [
        "Sandwich",
        "Salad" ,
        "Snack" ,
        "Biscuit" ,
        "Cake"
    ],
    foodPrices: [
        4,
        4.58,
        3,
        1,
        3.50
    ],
    drinksOrdered() {
        drinksBill = []
        for (let i = 0 ; i < drinksOrder.length ; i++) {
            for (let j = 0; j < coffeeShop.drinks.length; j++) {
                if (drinksOrder[i] == coffeeShop.drinks[j]){
                    drinksBill.push(j)
                }
                
            }
        }
    
        console.log('------------------')
        console.log(`Your drinks order is:\n`)
        sum = 0
        for (l = 0; l < drinksBill.length; l++) {
            console.log(`${coffeeShop.drinks[drinksBill[l]]} ${coffeeShop.drinkPrices[drinksBill[l]]}`)
            sum += coffeeShop.drinkPrices[drinksBill[l]]
        }
        console.log('------------------')
        console.log(`Total: £ ${sum} \n`)
        return(sum)
        },
    
    foodOrdered() {
        foodBill = []
        for (let i = 0 ; i < foodOrder.length ; i++) {
            for (let j = 0; j < coffeeShop.food.length; j++) {
                if (foodOrder[i] == coffeeShop.food[j]){
                    foodBill.push(j)
                }
                
            }
        }
    
        console.log('------------------')
        console.log(`Your food order is:\n`)
        sum = 0
        for (l = 0; l < foodBill.length; l++) {
            console.log(`${coffeeShop.food[foodBill[l]]} ${coffeeShop.foodPrices[foodBill[l]]}`)
            sum += coffeeShop.foodPrices[foodBill[l]]
        }
        console.log('------------------')
        console.log(`Total: £ ${sum} \n`)
        return(sum)
    }
    
}
// total
let foodSum = coffeeShop.foodOrdered()
let drinkSum = coffeeShop.drinksOrdered()
console.log(`Grand Total: £ ${foodSum + drinkSum}`)
