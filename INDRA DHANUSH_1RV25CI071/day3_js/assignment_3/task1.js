let quotient = ((a,b) =>{
    if(b==0)
        throw "not possiblee"
    return a / b;
})

try{
    console.log(quotient(7,0));
}
catch(e){
    console.log("Not possible");
}