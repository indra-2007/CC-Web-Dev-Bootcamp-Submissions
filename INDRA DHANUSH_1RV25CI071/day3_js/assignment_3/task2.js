//json parse

let a = '{"name":"sundra", "occupation":"playboy"}';
try{
    let b = JSON.parse('hey i am an error');
    console.log(b["name"]);
}
catch(e){
    console.log("Invalid JSON");
}
finally{
    console.log("Done Parsing");
}