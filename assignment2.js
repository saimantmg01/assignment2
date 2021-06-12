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

//test more --need to test with original function.
//MAP //
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


//FILTER //  --> works but gives empty items
// Array.prototype.myFilter = function(callbackFn) {
//     const new_array = [];
//     for(let i = 0; i<this.length; i++) {
//     if(callbackFn(this[i],i,this)) {
//         new_array.push(this[i]);   //cnt use push function.
//     }
//     }
//     return new_array;
// };

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.myFilter(word => word.length > 6);

// console.log(result);


// SOME // --> test more
// Array.prototype.mySome = function(callbackFn) {
//     let bool = false;
//     for(let i = 0; i< this.length; i++){
//         if(callbackFn(this[i],i,this)) {
//             bool = true;
//             break;
//         }
//     }
    
//     return bool;
// };

// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.mySome(even));
// expected output: true


// EVERY // --> test properly more.
// Array.prototype.myEvery = function(callbackFn) {
//     let bool = true;
//     for(let i =0; i< this.length; i++) {
//         if(!callbackFn(this[i],i,this)) {
//             bool = false;
//             break;
//         }
//     }
//     return bool;
// };

// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.myEvery(isBelowThreshold));
// // expected output: true


// REDUCE // --> test more
// Array.prototype.myReduce = function(callbackFn, initialValue) {
//     let result = 0;
//     if(initialValue) {
//         result = initialValue;
//     }
//     for(let i = 0; i< this.length; i++) {
//         result = callbackFn(result, this[i],i, this);
//     }
//     return result;
// };

// //test
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.myReduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.myReduce(reducer, 5));
// // expected output: 15


// INCLUDES //  --> test more
// Array.prototype.myIncludes = function(searchElement, fromIndex) {
//     let startpoint = 0;
//     let bool = false;
//     (fromIndex !== undefined) ? startpoint=fromIndex : 0;
//     for(let i =startpoint; i < this.length; i++) {
//         if(this[i] === searchElement) {
//             bool = true;
//             break;
//         }        
//     }
//     return bool;
// };

// const array1 = [1, 2, 3];

// console.log(array1.myIncludes(2));
// // expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.myIncludes('cat'));
// // expected output: true

// console.log(pets.myIncludes('at'));
// // expected output: false


// INDEXOF // --> more test needed
// Array.prototype.myIndexOf = function(searchElement, fromIndex) {
//     let index = -1;
//     let start = 0;
//     if(fromIndex >= this.length) {
//         return -1;
//     }
//     if(fromIndex < 0) {    //not sure about this part
//         start = this.length + fromIndex;
//     }
//     if(fromIndex !== undefined) {
//         start = fromIndex;
//     }
//     for(let i =start; i< this.length; i++) {
//         if(this[i] === searchElement) {
//             index = i;
//             break;
//         }
//     }
//     return index;
// };

// //test
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.myIndexOf('bison'));
// // expected output: 1

// // start from index 2
// console.log(beasts.myIndexOf('bison', 2));
// // expected output: 4

// console.log(beasts.myIndexOf('giraffe'));
// // expected output: -1


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

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    let index = -1;
    let start = this.length -1; 
    if(fromIndex >= this.length) {
        start = this.length -1;
    }
    if(fromIndex < 0) { //not sure about offset
        start = this.length + fromIndex;
        if(start < 0) {
            return index;
        }
    }
    for(let i = start; i >= 0; i--) {
        if(this[i] === searchElement) {
            index = i;
            break;
        }
    }
    return index;
};

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.myLastIndexOf('Dodo'));
// expected output: 3

console.log(animals.myLastIndexOf('Tiger'));
// expected output: 1

/*
// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
*/