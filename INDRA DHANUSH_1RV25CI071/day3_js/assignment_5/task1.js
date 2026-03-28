function set_pro(messege, timeout){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(messege);
        }, timeout);
    })
}

let p1 = set_pro("Users Loaded", 1000);
let p2 = set_pro("Orders Loaded", 2000);
let p3 = set_pro("Products Loaded", 3000);

let my_pro = Promise.all([p1, p2, p3])
    .then((msg) => {
        msg.forEach((i) => {
            console.log(i);      
        })
    })