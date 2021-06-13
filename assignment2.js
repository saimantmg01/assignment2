// FOR EACH //
//executes callbackfn once for each array element in ascending order.
Array.prototype.myEach = function(callbackFn) {
    for(let i =0; i < this.length; ++i) {
        //`this` represents the array or object which we call our function on.
        //considering sparse array. If element is undefined, go to next element . skipping that empty element or undefined value.  
        if(this[i] === undefined) {
            continue;  
        }
        callbackFn(this[i],i,this); //arguments: (current element, index, array.)
    }
};


//MAP //
// returns a new array with result of callback function applied on every element in original array.
Array.prototype.myMap = function(callbackFn) {
    //new array which is empty
    let new_array = [];
    //iterates every element in original array.
    for(let i = 0; i < this.length; i++) {
        //invoking callback function for indexes of array with values including undefined and putting that result into new array.
        new_array[i] = callbackFn(this[i],i,this);
    }
    //new array with value from callback function applied on every element of original array.
    return new_array;
};


//FILTER // 
//creates new array with all elements from original array which pass certain condition set on callback function.
Array.prototype.myFilter = function(callbackFn) {
    //create new empty array
    let new_array = [];
    //iterate through each element in original array
    for(let i = 0; i < this.length; i++) {
        //checking whether array element meets the criteria set by callback function.
        if(callbackFn(this[i],i,this) === true) {
            //if met then put on the element in new array
            new_array.push(this[i]);  
        }
    }
    //new array with all the element from original array which met condition set by callback function.
    return new_array;
};


// SOME // 
//tells whether at least one element in array pass the test set by call back function.
Array.prototype.mySome = function(callbackFn) {
    //bool variable set to false
    let bool = false;
    //iterate through each element in array.
    for(let i = 0; i< this.length; i++){
        //if element exists in array change bool to true 
        if(callbackFn(this[i],i,this) === true) {
            bool = true;
            //break from loop once element which pass the test exists.
            break;
        }
    } 
    //returns true if at least one element exists which pass the test, otherwise false.
    return bool;
};


// EVERY // 
//this function test whether all element in given array pass the condition
//set by a callback function
Array.prototype.myEvery = function(callbackFn) {
    //bool variable set to true
    let bool = true;
    //loop through each element in an array
    for(let i =0; i< this.length; i++) {
        //if any instance the element fails the condition set by callback function
        if(!callbackFn(this[i],i,this)) {
            //set bool to false
            bool = false;
            //and break out of the loop
            break;
        }
    }
    //returns true if all element in array pass the test otherwise false.
    return bool;
};


// REDUCE // 
//execute callback function on each element of array giving a single output value.
Array.prototype.myReduce = function(callbackFn, initialValue) {
    //accumulator is set to 0
    let accumulator = 0;
    //if initialvalue exists then start from there
    if(initialValue !== undefined) {
        accumulator = initialValue;
    }
    //iterate through every element in array
    for(let i = 0; i< this.length; i++) {
        //accumulator holds all return values from the callback function.
        accumulator = callbackFn(accumulator, this[i],i, this);
    }
    //single value returned at the end
    return accumulator;
};


// INCLUDES // 
//returns true or false based on whether an element exists in array or not.
Array.prototype.myIncludes = function(searchElement, fromIndex) {
    let startpoint = 0;
    //bool set to false
    let bool = false;
    //ternary operator if from index exists startpoint is from there otherwise 0.
    (fromIndex !== undefined) ? startpoint=fromIndex : 0;
    //if fromIndex is negative value
    if(fromIndex < 0) {
        //start from array length + fromIndex
        startpoint = this.length + fromIndex;
        //if value originated is less than 0. set it to 0.
        if(startpoint < 0) {
            start = 0;
        }
    }
    //iterate through every element in an array.
    for(let i =startpoint; i < this.length; i++) {
        //if targeted element exists in array
        if(this[i] === searchElement) {
            //set bool to true
            bool = true;
            //get out of the loop
            break;
        }        
    }
    //returns true if targeted element exists in array, otherwise false
    return bool;
};

// INDEXOF // 
//returns the first index of matched element in array as specified by target element. if not present returns -1.
Array.prototype.myIndexOf = function(searchElement, fromIndex) {
    //set index to -1.
    let index = -1;
    //set start to 0
    let start = 0;
    //if from index is greater than or equal to array length then returns -1
    //indicating no search.
    if(fromIndex >= this.length) {
        return -1;
    }
    //if from index is defined, start from there
    if(fromIndex !== undefined) {
        start = fromIndex;
    }
    //if fromIndex is negative starts from offset value from array length + fromIndex.
    if(fromIndex < 0) {    
        start = this.length + start;
        //if value originated is less than 0. set it to 0.
        if(start < 0) {
            start = 0;
        }
    }
    //loop through an array from specified start point to end of array.
    for(let i =start; i< this.length; i++) {
        //if targeted element is found
        if(this[i] === searchElement) {
            //capture the index where it was found in index variable
            index = i;
            //break from the loop
            break;
        }
    }
    // returns index if targeted element is found in array otherwise -1.
    return index;
};


// PUSH //
//this function adds one or many element to end of array and give back the updated length of array.
//rest parameter: any arguments passed in the function will be stored in args parameter
Array.prototype.myPush = function(...args) {    
    let index_of_arg = 0;
    //get the length of original array
    let length = this.length;
    //starting to go through each arguments or elements in paramter to add at end of current array.
    for(let i = length; i< length + args.length; i++) {
        //adding elements in args at end of array
        this[i] = args[index_of_arg];
        //incrementing and updating argument index to get through every argument passed in parameter.
        index_of_arg++;
    }
    //return the newly updated array length
    return this.length;
};


// LASTINDEXOF //  
//this function returns last index at which a targeted element can be found. if not found at all returns -1.
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    let index = -1;
    //array starts searching from backwards.
    let start = this.length -1; 
    //if fromIndex is greater than or equal to length of array, whole array is searched.
    if(fromIndex >= this.length) {
        start = this.length -1;
    }
    //if fromindex is less than 0, calculate offset 
    if(fromIndex < 0) { //not sure about offset
        start = this.length + fromIndex;
        //if calculated index is still less than 0. dont search the array at all.
        if(start < 0) {
            return index;
        }
    }
    //array search from backwards or specified by fromIndex 
    for(let i = start; i >= 0; i--) {
        //if targeted element is found in array. 
        if(this[i] === searchElement) {
            //capture the index
            index = i;
            //get out of the loop
            break;
        }
    }
    //returns the last index where element can be found in array if it exists. otherwise -1.
    return index;
};


// KEYS // 
//this method returns a new array with enumerable property names of given object.
Object.grabKeys = function(obj) {
    //a new empty array.
    let new_array = [];
    //for...in loop which gives all enumerable properties of given elements in object.
    for(let i in obj) {
        //push those enumerable property name in new array.
        new_array.push(i);
    }
    //return a new array with all enumerable property names of given object.
    return new_array;
};

// VALUES // 
//this method returns a new array with enumerable property value of given object.
Object.grabValues = function(obj) {
    //a new empty array.
    let new_array = [];
    //for...in loop which gives all enumerable properties of given elements in object.
    for(let i in obj) {
        //push those enumerable property value in a new array.
        new_array.push(obj[i]);
    }
    //return a new array with all  enumerable property values of given object.
    return new_array;
};

//for unit testing.
exports.myEach;
exports.myMap;
exports.myFilter;
exports.mySome;
exports.myEvery;
exports.myReduce;
exports.myIncludes;
exports.myIndexOf; 
exports.myPush;
exports.myLastIndexOf;
exports.grabKeys;
exports.grabValues; 