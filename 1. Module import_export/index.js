// Every file in node is a module
// everything in a file cannont be accessed by anyone from outside as it is protected by module
// If we want to export then we must need module export and import

// In node server inside main file we will write minimum code and export maximum modules to use

//for importing from other modules we first have to declare them in a variable same as file name(good practice) then we need to use require() function and in that specify the location of module we want to import

const lib = require("./lib.js");
// This lib will receive the object hat is exported in lib.js and hence lib variable will also turn into an object

// for accessing any element we use the dot operator
console.log(lib);  // will show the entire lib object
console.log();
console.log(lib.sum(4,5), lib.diff(3,2));  //using.operator to access