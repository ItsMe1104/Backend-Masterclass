// normally write the functions without any fancy syntax and then export them using export keyword and structuring

function sum(a,b){
    return a+b;
}

//remember to use variable type(const or let or var) while using arrow function else we cannot export
const diff = (a,b)=>{
    return a-b;
}

// Using structuring export
// By usng this we directly send the sum and differents as elements in object {}.
export {sum,diff};