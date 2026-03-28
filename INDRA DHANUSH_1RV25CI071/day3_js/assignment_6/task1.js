let success = true;
let my_pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(success)
            resolve("Operation Successful!")
        else
            reject("Operation Failed!")
    }, 2000);
})

async function runOperation(){
    try{
        let a = await my_pro;
        console.log(a);
    }
    catch(err){
        console.error(err);
    }
}

runOperation();