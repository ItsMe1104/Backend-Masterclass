// we cant use this sum and diff function directly in index.js, hence we need to export it


function sum(a,b){
    return a+b;
}
// one way to export it is this syntax
exports.sum=sum;

//another way is to use the exports.arrow function

exports.diff = (a,b)=>{
    return a-b;
}

// All the exports together will be exported in the form of an object

