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
let p2 = set_pro("Server error", 2000, false);
let p3 = set_pro("Products Loaded", 3000);

let log_pro = Promise.allSettled([p1, p2, p3])
    .then((msg) => {
        console.log(msg);
    })
    .catch((msg) => {
        console.log(msg);
    })