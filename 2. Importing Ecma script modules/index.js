// importing and exporting through es modules (Ecma script modules)
// Same as how we use in react using structuring and destructuring


//To import we use keyword import and then just like we structured we destructure it here 
// Remember the order of elements should be same in structuring and destructuring
// then we write "from" and the module location in quotes.
import {sum,diff} from "./lib.js";


// remember since here we are simply destructuring it and not storing in an object like previously hence we dont use object_name.sum or object_name.diff
// Instead we simply use them as they are part of the current file
console.log(sum(4,5), diff(9,8));


/* 

To run ecmascript export we must define 
{
    "type": "module"
}

by making an important file package.json
*/

// Later while using npm this json file is already written and hence we dont need to make any changes there