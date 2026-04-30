function accountDetails(login){
    return new Promise((resolve,reject)=>{
        if(login){
            resolve({
                id:1,
                name:"harsh",
                accounttype:"current"
            })
        }
        else{
            reject("You are not logged in");
        }
    })
}

async function fetchAccount(){
    try {
        const data=await accountDetails(true);
        if(data){
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchAccount();