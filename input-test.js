const prompt = require('prompt-sync')();

pin = 447
balance = 7499

const cashMachine = () => {
    let insertedPin = prompt("Please insert your pin: ")
    for (let i = 0; i < 3; i++) {
        if (insertedPin == pin) {
            break
        }

        if (insertedPin != pin && i == 2 ) {
            console.log("I am afraid you tried your pin too many times. Unfortunately it is now blocked. Check it in with your bank")
            return
        }

        console.log("Your pin is incorrect, please try again")
        insertedPin = prompt("Please insert your pin: ")
    }

    const requestedBalance = prompt("Please insert the amount you would like to withdraw: ")
    if (requestedBalance > balance) {
        console.log("I am afraid you don't have enough credit in your bank account, sorry! Try with a different amount")
        return
    }

    console.log("Here is your money, enjoy it!")
}

cashMachine()