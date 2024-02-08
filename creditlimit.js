const prompt = require("prompt-sync")();
let accountNumber = prompt("enter account number : ");
while(accountNumber!==-1){
    let balanceAtTheBeginningOfTheMonth = prompt("Enter balance at the beginning of the month : ");
    let  totalOfAllItemsChargedByTheCustomerThisMonth =prompt("Enter total of all items charged by the customer this month: ");
    let totalOfAllCreditsAppliedToTheCustomerAccountThisMonth = prompt("Enter total of all credits applied to the customer’s account this month: ");
    let allowedCreditLimit =prompt("Enter allowed credit limit: ");
    let newBalance = balanceAtTheBeginningOfTheMonth + totalOfAllItemsChargedByTheCustomerThisMonth - totalOfAllCreditsAppliedToTheCustomerAccountThisMonth ;
    if (newBalance > allowedCreditLimit){
        console.log("your credit limit has exceed");
    }
    else{
        console.log("im okay");
        let accountNumber =("Enter your account Number(or -1 to end): ")
    }
}