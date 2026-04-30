function transaction(status){
    return new Promise((resolve,reject)=>{
        if(status){
            resolve("transaction successfull");
        }
        else{
            reject("transaction failed");
        }
    })
}

transaction(false) .then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});