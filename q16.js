function withdrawal(amount){
    if(amount<0){
        throw new Error("Insufficient Bank balance");
    }
    const random=Math.random();
    if(random<0.3){
        throw new Error("Network Failure");
    }
    else if(random<0.6){
        throw new Error("Payment failure");
    }
    else{
        console.log("payment successfull");
    }

    
    
}

function test(){
    try{
        withdrawal(-1);
    }
    catch(err){
        console.log(err.name+":"+err.message);
    }
}

test();