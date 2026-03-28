let div_pro = ((a,b) =>new Promise((resolve, reject) => {
    if(b == 0)
        reject("Division by 0 not at all possible");
    else
        resolve(a/b);
}))

async function safeDivide(){
    try{
        const res = await div_pro(5,0);
        console.log(res);
    }
    catch(msg){
        console.error(msg);
    } 
}

safeDivide();