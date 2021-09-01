// load the chai library with assert style 
let assert = require("chai").assert;
let name ="Raj"
let id = 100;
let result = true;
let num =[10,20,30,40,50,60];
function dis() {

}
assert.isTrue(result);
assert.typeOf(name,"string");
assert.typeOf(id,"number");
assert.typeOf(result,"boolean");
assert.isFunction(dis);
assert.isArray(num);
assert.lengthOf(num,6);     // size 
assert.include(num,20)      // number must be present

//assert.isFalse(result);
