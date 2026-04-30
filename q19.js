class InvalidAccountException extends Error{
    constructor(message){
        super(message);
        this.name="InvalidAccountException!";
    }
}

function checkAccount(id){
    try{
        if(id<1){
            throw new InvalidAccountException("ID must be greater than 0");
        }
        else{
            console.log("Account Logged in successfully");
        }
    }
    catch(err){
        console.log(err.name+":"+err.message);
    }
}

checkAccount(-1);