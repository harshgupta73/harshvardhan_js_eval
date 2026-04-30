function transaction(amount){
    if(amount<0){
        throw new Error("Insufficient Bank balance");
    }
    else{
        console.log("transaction successfull");
    }
    
}

function test(){
    try{
        transaction(-1);
    }
    catch(err){
        console.log(err.name+":"+err.message);
    }
    finally{
        console.log("Hello User");
        console.log("this will execute no matter whether the error is handled or not handled");
    }
}

test();