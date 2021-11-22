// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever is new"
// ]
// console.log(coffeeOrder[2]);
// coffeeOrder.push("Donna - espresso"); //add an element to the end of the array
// coffeeOrder.pop(); //removes the last element of the array
// console.log(coffeeOrder);

// let favMusic = [
//     "Holocene - Bon Iver",
//     "Terrible Love - The National",
//     "Istituto Majorana - Colapesce"
// ]
// favMusic.unshift("Dark Star - Poliça", "Youth - Daughter");
// favMusic.pop();
// // console.log(favMusic);
// for (let i = 0; i < favMusic.length; i++) {
//     console.log(favMusic[i])
// }

// let cards = ["Diamonds", "Spade", "Heart", "Club"];
// let currentCard = "Club";
// while (currentCard != "Spade") {
//     console.log(currentCard);
//     currentCard = cards [Math.floor(Math.random()*4)];
// }
// console.log(currentCard);

// let favMovies = ["Call me by your name", "His Secret Life", "Life is beautiful", "All about my mother", 'Amélie'];
// favMovies.push("Edmond Rostand", "The science of sleep");
// for ( let i = 0; i < favMovies.length; i++) {
// console.log(favMovies[i]);
// }


// let num = (Math.round(Math.round()*50));
// for (  num = 0; num <= 6; num++ ){
//     console.log(num);
// }

// let array = [];
// for ( let i =0; i <= 9; i++ ) {
//     let num = Math.round(Math.random()*50);
//     array.push(num);
//     }

// console.log(array.reverse())


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


// for ( let i = 1; i <= 6; i++ ){
//     let num = (Math.round(Math.random()*30));
//     if (num % 7 == 0)
//     console.log(`${num} is divisible by 7`);
//     else {
//         console.log(`${num} is not divisible by 7`);
//     }
// }

// let bobsFollowers = ["Annabelle", "Hélöise", "Esteban", "Joshua"]
// let hannahsFollowers = ["Joshua", "Samantha", "Annabelle", "Amélie"]
// for ( let i = 0; i < bobsFollowers.length ; i++ ) {
//     for (let l = 0; l < hannahsFollowers.length ; l++) {
//         if (bobsFollowers[i] == hannahsFollowers[l]) {
//             console.log(`${bobsFollowers[i]} is both a follower of Bob and Hanna`)
//         }
//     }
// }

// let x = 0
// while (x < 70) {
//     x++;
//     console.log(x);
// }

// let word =["s", "u", "p","e","r","c","a","l","i","f","r","a","g","i","l","i","s","t","i","c","e","x","p","i","a","l","i","d","O","c","i","o","u","s"]
// do {
//     word.push("s");
//     console.log(word);
// } while (word.length < 50)

num = 15
if (num % 3 == 0  && num % 5 == 0) {
    console.log("This number is indivisible by either 5 or 3!");
} else if (num % 5 == 0){
    console.log("This number is divisble by 5.");
} else if  (num % 3 == 0) {
    console.log("This number is divisible by 3!");
} else {
    console.log("This number is indivisible by either 5 or 3!") ;
}
