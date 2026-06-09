
function greet(name:string) {
    console.log("Hello ,", name);
    
}

console.log(wellCome("Ritam"));


function wellCome(name:string):string {
    return `Hello , ${name}`;
}

greet("Ravi");