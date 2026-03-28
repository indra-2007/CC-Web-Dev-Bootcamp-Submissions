function set_pro(messege, timeout, flag = true){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(flag)
                resolve(messege);
            else
                reject(messege);
        }, timeout);
    })
}

let p1 = set_pro("Users Loaded", 1000);
let p2 = set_pro("Orders Loaded", 2000);
let p3 = set_pro("Products Loaded", 3000);

async function runAll(){
    try{
        let a = await p1;
        console.log(a);

        let b = await p2;
        console.log(b);

        let c = await p3;
        console.log(c);

        console.log("All Done!")
    }
    catch(error){
        console.error(error);
    }
    
}

runOperation();