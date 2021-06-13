// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i =0; i < this.length; i++) {
        if(this[i] === undefined)
            continue; //going to next element if empty . skipping empty element. considering sparse array.
        callbackFn(this[i],i,this); //arguments: (actual element, index, actual array.)
    }
};

//test more --need to test with original function.
//MAP //
Array.prototype.myMap = function(callbackFn) {
    const new_array = [];
    for(let i = 0; i < this.length; i++) {
       // new_array.push(callbackFn(this[i],i,this));  //not sure if i can use anoher high order functions.
        new_array[i] = callbackFn(this[i],i,this);
    }
    return new_array;
};



//FILTER //  --> works but gives empty items
Array.prototype.myFilter = function(callbackFn) {
    const new_array = [];
    for(let i = 0; i<this.length; i++) {
    if(callbackFn(this[i],i,this)) {
        new_array.push(this[i]);   //cnt use push function.
    }
    }
    return new_array;
};


// SOME // --> test more
Array.prototype.mySome = function(callbackFn) {
    let bool = false;
    for(let i = 0; i< this.length; i++){
        if(callbackFn(this[i],i,this)) {
            bool = true;
            break;
        }
    } 
    return bool;
};


// EVERY // --> test properly more.
Array.prototype.myEvery = function(callbackFn) {
    let bool = true;
    for(let i =0; i< this.length; i++) {
        if(!callbackFn(this[i],i,this)) {
            bool = false;
            break;
        }
    }
    return bool;
};


// REDUCE // --> test more
Array.prototype.myReduce = function(callbackFn, initialValue) {
    let result = 0;
    if(initialValue) {
        result = initialValue;
    }
    for(let i = 0; i< this.length; i++) {
        result = callbackFn(result, this[i],i, this);
    }
    return result;
};


// INCLUDES //  --> test more
Array.prototype.myIncludes = function(searchElement, fromIndex) {
    let startpoint = 0;
    let bool = false;
    (fromIndex !== undefined) ? startpoint=fromIndex : 0;
    for(let i =startpoint; i < this.length; i++) {
        if(this[i] === searchElement) {
            bool = true;
            break;
        }        
    }
    return bool;
};

// INDEXOF // --> more test needed
Array.prototype.myIndexOf = function(searchElement, fromIndex) {
    let index = -1;
    let start = 0;
    if(fromIndex >= this.length) {
        return -1;
    }
    if(fromIndex < 0) {    //not sure about this part
        start = this.length + fromIndex;
    }
    if(fromIndex !== undefined) {
        start = fromIndex;
    }
    for(let i =start; i< this.length; i++) {
        if(this[i] === searchElement) {
            index = i;
            break;
        }
    }
    return index;
};


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


// LASTINDEXOF //  --> test more
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


// KEYS // --> test more
Object.grabKeys = function(obj) {
    let new_array = [];
    for(let i in obj) {
        new_array.push(i);
    }
    return new_array;
};

// VALUES // --> test more
Object.grabValues = function(obj) {
    let new_array = [];
    for(let i in obj) {
        new_array.push(obj[i]);
    }
    return new_array;
};


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