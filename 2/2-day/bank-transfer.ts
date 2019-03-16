'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];
// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(input) {
  let show = [];
  for (let person of accounts) {
    if (input === person.accountNumber) {
      show.push(person.clientName)
      show.push(person.balance)
    }
  }
  return show
}
console.log(getNameAndBalance(23456311));


// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.


let list = [];
function transferAmount(accounts, from, to_account, amount) {

  for (let account of accounts) { list.push(account.accountNumber)

    if (list.indexOf(from) === -1 || list.indexOf(to_account) === -1) { console.log('404 is not found') }

    if (account.accountNumber == from) { account.balance -= amount }
    if (account.accountNumber == to_account) { account.balance += amount }
  }
}
//transferAmount(accounts, 43546731, 11234543, 800000) 
 transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);



//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
