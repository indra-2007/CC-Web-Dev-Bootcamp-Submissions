let success = true;
let my_pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(success)
            resolve("Operation Successful!")
        else
            reject("Operation Failed!")
    }, 2000);
})
my_pro
    .then((suc,err) =>{
        console.log(suc);
        console.log(err);
    })
    .catch((err) =>{
        console.log(err)
    })
