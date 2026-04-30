const balance=[100,300,400,500];
const calculateInterests=(balance,rate)=>{
    return balance.map((balance)=>balance*rate);
}

console.log(calculateInterests(balance,0.2));