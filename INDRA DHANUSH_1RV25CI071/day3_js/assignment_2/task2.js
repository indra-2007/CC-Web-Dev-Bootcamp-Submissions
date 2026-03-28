let count = 0
const i = setInterval(() => {
    console.log("Tick...\n");
    count++
    if(count==5)
    clearInterval(i)
}, 1000);
