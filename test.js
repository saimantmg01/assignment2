const {myEach} = require('./assignment2');
const {myMap} = require('./assignment2');
const {myFilter} = require('./assignment2');
const {mySome} = require('./assignment2');
const {myEvery} = require('./assignment2');
const {myReduce} = require('./assignment2');
const {myIncludes} = require('./assignment2');
const {myIndexOf} = require('./assignment2');
const {myPush} = require('./assignment2');
const {myLastIndexOf} = require('./assignment2');
const {grabKeys} = require('./assignment2');
const {grabValues} = require('./assignment2');


/*******Tests made from MDN docs examples and some own created */

/**************for myEach*******/
const arr = [1,2,,3];
//'this' is particular array we call our function on.
    //test
    //so when call myeach, will apply number function on array.
    const isEven = (number) => console.log(number%2 === 0);
    arr.myEach(isEven); //takes in other functions.
    
    console.log("myEach: ")
    arr.myEach((x) => console.log(x));
    
    console.log("forEach: ")
    arr.forEach((x) => console.log(x));  
   
    //expected result:
    /*   a
         b
         c
    */
    console.log('Another test: ');
    const arry1 = ['a', 'b', 'c'];
    arry1.forEach(element => console.log(element));
  
console.log('-----------------------');
/**************for myMap*******/
console.log("for myMap: ");
const array1 = [1, 4, 9, 16];
const map1 = array1.myMap(x=>x*2);
console.log(map1);

let numbers = [1,4,9];
let roots = numbers.myMap(function(num) {
    return Math.sqrt(num)
})
console.log(roots); //[1,2,3]
console.log('-----------------------');
/**************for myFilter*******/

console.log("for myFilter: ");
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.myFilter(word => word.length > 6);
console.log(result);

function isBig(value) {
 return value >= 10;   
}
let filtered = [12,5,8,130,44].myFilter(isBig);
console.log(filtered); //12,130,44

const ary = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(ary.myFilter(isPrime)); // [2, 3, 5, 7, 11, 13]

console.log('-----------------------');
/**************for mySome*******/

console.log("for mySome: ");
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.mySome(even));
//expected output: true

console.log([2,5,8,1,4].mySome(x => x> 10)); //false
console.log([12,5,8,1,4].mySome(x => x> 10)); //true

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.mySome(arrVal => val === arrVal);
}

console.log(checkAvailability(fruits, 'kela'));   // false
console.log(checkAvailability(fruits, 'banana')); // true

console.log('-----------------------');
/**************for myEvery*******/
console.log("for myEvery: ");

const isBelowThreshold = (currentValue) => currentValue < 40;

const array5 = [1, 30, 39, 29, 10, 13];

console.log(array5.myEvery(isBelowThreshold)); //true
console.log([12, 5, 8, 130, 44].every(x => x >= 10));   // false
console.log([12, 54, 18, 130, 44].every(x => x >= 10)); // true
console.log('-----------------------');
/**************for myReduce*******/
console.log("for myReduce: ");
const array6 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array6.myReduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array6.myReduce(reducer, 5));
// expected output: 15

console.log([0, 1, 2, 3, 4].myReduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue ));
//should return 10

console.log('-----------------------');
/**************for myIncludes*******/
console.log("for myIncludes: ");

const array7 = [1, 2, 3];

console.log(array7.myIncludes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.myIncludes('cat'));
// expected output: true

console.log(pets.myIncludes('at'));
// expected output: false
console.log([1, 2, 3].myIncludes(2));  // true
console.log([1, 2, 3].myIncludes(4));      // false
console.log([1, 2, 3].myIncludes(3, 3));   // false
console.log([1, 2, 3].myIncludes(3, -1));  // true

console.log('-----------------------');
/**************for myIndexOf*******/
console.log("for myIndexOf: ");

//test
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.myIndexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.myIndexOf('bison', 2));
// expected output: 4

console.log(beasts.myIndexOf('giraffe'));
// expected output: -1

var a = [2, 9, 9];
console.log(a.myIndexOf(2));     // 0
console.log(a.myIndexOf(7));     // -1
console.log(a.myIndexOf(9, 2));  // 2
console.log(a.myIndexOf(2, -1)); // -1
console.log(a.myIndexOf(2, -3)); // 0

console.log('-----------------------');
/**************for myPush*******/
let ab = [1,2,3];
console.log("for myPush: ");
ab.myPush(4,5,6);
console.log(ab);

console.log('-----------------------');
/**************for myLastIndexOf*******/
console.log("for myLastIndexOf: ");
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.myLastIndexOf('Dodo'));
// expected output: 3

console.log(animals.myLastIndexOf('Tiger'));
//expected output: 1

console.log('-----------------------');

/**************for grabKeys*******/
console.log("for grabKeys: ");
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.grabKeys(object1));
  // expected output: Array ["a", "b", "c"]

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.grabKeys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.grabKeys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.grabKeys(myObj)); // console: ['foo']

console.log('-----------------------');

/*********for grabValues**********/
console.log("for grabValues: ");
    const object8 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.grabValues(object8));
  // expected output: Array ["somestring", 42, false]
  const obj8 = { foo: 'bar', baz: 42 };
console.log(Object.grabValues(obj8)); // ['bar', 42]

// Array-like object
const arrayLikeObj8 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.grabValues(arrayLikeObj8 )); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.grabValues(arrayLikeObj2 )); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.grabValues(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.grabValues('foo')); // ['f', 'o', 'o']


