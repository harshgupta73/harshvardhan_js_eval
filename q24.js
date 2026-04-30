const amounts=[20,40,60,80];

//map
function interests(amounts){
    return amounts.map(amounts=>amounts+(amounts*0.6)); //added 0.6 interests to balances
}

console.log(interests(amounts));

//filter
function filterHighValue(amounts){
    return amounts.filter(amounts=>amounts>30);
}
console.log(filterHighValue(amounts));

//reduce

function totalBankDeposits(amounts){
    return amounts.reduce((tot,amounts)=>tot+amounts);
}

console.log(totalBankDeposits(amounts));