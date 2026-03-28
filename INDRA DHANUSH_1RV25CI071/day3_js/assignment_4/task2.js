let s = "i AM tHe dAngEr";

let my_pro = new Promise((resolve, reject)=>{
    resolve("1. to lowercase ");
    // resolve();
    // resolve();
    // reject();
})
my_pro
    .then((msg1) => {
        console.log(msg1 + s.toLowerCase() + "\n")
    })
    .then(() => {
        console.log("2. to uppercase " + s.toUpperCase() + "\n")
    })
    .then(() => {
        console.log("3. Done " + s.toUpperCase() + "\n");
    })
    .catch(() => {
        console.log("Some error occured");
    })