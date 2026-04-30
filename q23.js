const accounts=[
    {
        name:"harsh",
        balance:40000
    },
    {
        name:"omkmar",
        balance:20000
    },
    {
        name:"sara",
        balance:90000
    },
    {
        name:"rohit",
        balance:10000
    }
]

function filterHighValueAccounts(accounts,checkAmount){
    return accounts.filter((accounts)=>accounts.balance>checkAmount);
}

console.log(filterHighValueAccounts(accounts,30000));