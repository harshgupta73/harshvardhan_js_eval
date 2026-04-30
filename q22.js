const balance=[3000,20000,34000,90000];
const increaseBalance=(balance)=>{
    return balance.map((balance)=>balance+1000);
}

console.log(increaseBalance(balance));