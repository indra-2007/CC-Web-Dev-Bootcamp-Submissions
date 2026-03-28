let count = 7;
let i = setInterval(() => {
    console.log(count)
    count--;
    if(count == -1){
        console.log("time up")
        clearInterval(i)
    }
        
}, 1000);