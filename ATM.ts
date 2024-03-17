import inquirer from "inquirer";
let input = await inquirer.prompt([
    {message: "Enter ATM card"},
    {message: "Enter 4_digit pin",type: "number",name: "pin"},
]);
console.log(input);
if(input.pin !== "0"){
    console.log("Entered pin is right, card accepted");
}
else {
    console.log("Entered pin is wrong, card rejected!");
}
let screen = await inquirer.prompt([
    {message: "Select an option",type: "list",name:"options",choices: ["Reset pin","Cash Deposit","Cash Withdraw","Balace Inquiry"]},
]);
console.log(screen);
if(screen.options == "Reset pin"){
    console.log("Enter previous pin");
    let changePin = await inquirer.prompt([{
        message: "Enter new pin",type: "number",name: "newPin",
    },]);
    changePin.newPin = input.pin;
    console.log("Pin has been changed succuessfully!");
}
else if(screen.options == "Cash Deposit"){
    let balance = 120000;
    let cash = await inquirer.prompt([{
        message: "Enter amount of cash you want to deposit",type: "number",name: "cash_deposit",
    },]);
    let Cash_Deposit = balance + cash.cash_deposit;
    console.log("Cash has been deposit successfully!, your new balance is: ",Cash_Deposit);
}
else if(screen.options == "Cash Withdraw"){
    let balance = 120000;
    let cash = await inquirer.prompt([{
        message: "Enter amount of cash you want to withdraw",type: "number",name: "cash_withdraw",
    },]);
    if(cash.cash_withdraw > balance){
        console.log("Not enough balance");
    } else {
        let Cash_Withdraw = balance - cash.cash_withdraw;
        console.log("Cash withdraw successfully!, your current balance is: ",Cash_Withdraw);
    }
}
else if(screen.options == "Balance Inquiry"){
    let balance = 120000;
    console.log("Your balance is: ",balance);
}
else {
    console.log("Invalid option try again!");
}