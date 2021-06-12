/*
// FOR EACH //
const arr = [1,2,,3];
//'this' is particular array we call our function on.

Array.prototype.myEach = function(callbackFn) {
    for(let i =0; i < this.length; i++) {
        if(this[i] === undefined)
            continue; //going to next element if empty . skipping empty element. considering sparse array.
        callbackFn(this[i],i,this); //arguments: (actual element, index, actual array.)
    }
};

    //test
    //so when call myeach, will apply number function on array.
const isEven = (number) => console.log(number%2 === 0);
arr.myEach(isEven); //takes in other functions.

console.log("myEach: ")
arr.myEach((x) => console.log(x));

console.log("forEach: ")
arr.forEach((x) => console.log(x));

*/

//test more
// MAP //
// const array1 = [1, 4, 9, 16];
// Array.prototype.myMap = function(callbackFn) {
//     const new_array = [];
//     for(let i = 0; i < this.length; i++) {
//        // new_array.push(callbackFn(this[i],i,this));  //not sure if i can use anoher high order functions.
//         new_array[i] = callbackFn(this[i],i,this);
//     }
//     return new_array;
// };

// //test
// const map1 = array1.myMap(x=>x*2);
// console.log(map1);

/*
// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};
*/

/*
// PUSH //
//rest parameter: any arguments passed in the function will be stored in args parameter
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;
    for(let i = length; i< length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

arr.myPush(4,5,6);
console.log(arr);
*/

/*
// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
*/