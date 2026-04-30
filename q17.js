function transaction(server){
    if(server!=true){
        throw new Error("server not found");
    }
    else{
        return "Server found";
    }
    
}

function checkServer(){
    console.log(transaction(false));
}

function test(){
    try {
        checkServer();
    } catch (error) {
        console.log(error.name+":"+error.message);
    }
}

test();