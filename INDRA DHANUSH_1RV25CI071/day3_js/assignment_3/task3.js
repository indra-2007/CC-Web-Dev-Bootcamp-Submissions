let check_age = ((age) => {
    if(age < 0)
        throw "Age must be a positive number!";
    else if(age < 18)
        throw "Too young! Must be 18 or above.";
    else
        console.log("Access granted");
     
})
try{
    check_age(-90);
}
catch(e){
    console.log("Error: "+ e);
}