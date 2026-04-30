const customerBalances=[2000,43000,2110,450,6000];
function findTopCustomer(customerBalances){
    return Math.max(...customerBalances);
}

console.log(findTopCustomer(customerBalances));