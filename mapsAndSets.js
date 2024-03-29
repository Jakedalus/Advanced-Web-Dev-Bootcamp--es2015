class MessageBoard {
    
    /*
    In your constructor method, you should assign two properties for each object created from the MessageBoard class. The first should be a property called messages which is an empty Map, and the second is a property called id which has a value of 1. 
    
    var m = new MessageBoard
    
    m.hasOwnProperty('messages') // true
    m.messages.constructor // function Map() { [native code] }
    m.hasOwnProperty('id') // true
    m.id // 1
    */
    
    constructor(){
      this.messages = new Map();
      this.id = 1;
    }
    
    /*
    
    Add a method called addMessage which accepts a string. The function should add a key and value to the messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the function. The function should return the object created from the class so that the method can be chained. (HINT - to implement the last part, make sure to return this).
    
    var m = new MessageBoard
    m.addMessage('hello');
    m.messages.size // 1
    m.addMessage('awesome!') // m
    m.addMessage('awesome!').addMessage('nice!').addMessage('cool!') 
    */
    
    addMessage(str){
      this.messages.set(this.id++, str);
      return this;
    }
    
    /*
    Add a method called findMessageById which accepts a number and returns the message in the messages map with the same key as the number passed to the function. If the key is not found in the messages map, the function should return undefined.
    
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageById(1) // 'hello!'
    m.findMessageById(2) // 'hi!'
    m.findMessageById(3) // 'whats up?'
    m.findMessageById(4) // undefined
    m.findMessageById() // undefined
    */
    
    findMessageById(id){
      return this.messages.get(id);
    }
    
    /*
    Add a method called findMessageByValue which accepts a string and returns the message in the messages map with the same value as the string passed to the function. If the value is not found in the messages map, the function should return undefined.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageByValue('hello!') // 'hello!'
    m.findMessageByValue('hi!') // 'hi!'
    m.findMessageByValue('whats up?') // 'whats up?'
    m.findMessageByValue('nothing here') // undefined
    m.findMessageByValue() // undefined
    */

    
    findMessageByValue(message){
      return Array.from(this.messages.values()).filter(msg => msg === message)[0];
    }
    
    /*
    Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.removeMessage(1)
    m.removeMessage(2)
    m.messages.size // 1
    m.removeMessage() // m
    */
    
    removeMessage(id){
      this.messages.delete(id);
      return this;
    }
    
    /*
    Add a method called numberOfMessages which returns the number of keys in the messages map
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.numberOfMessages() // 3
    */
    
    numberOfMessages(){
      return this.messages.size;
    }
    
    /*
    Add a method called messagesToArray which returns an array of all of the values in the messages map
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
    */
    
    messagesToArray(){
      return Array.from(this.messages.values());
    }
}

console.log(" ** TESTING CONSTRUCTOR ** ");
var m1 = new MessageBoard();
console.log(m1.hasOwnProperty('messages')); // true
console.log(m1.messages.constructor); // function Map() { [native code] }
console.log(m1.hasOwnProperty('id')); // true
console.log(m1.id); // 1

console.log(" ** TESTING addMessage ** ");
var m2 = new MessageBoard();
console.log(m2.addMessage('hello'));
console.log(m2.messages.size); // 1
console.log(m2.addMessage('awesome!')); // m
console.log(m2.addMessage('awesome!').addMessage('nice!').addMessage('cool!')); 

console.log(" ** TESTING findMessageById ** ");
var m3 = new MessageBoard();
console.log(m3.addMessage('hello!'));
console.log(m3.addMessage('hi!'));
console.log(m3.addMessage('whats up?'));
console.log(m3.findMessageById(1)); // 'hello!'
console.log(m3.findMessageById(2)); // 'hi!'
console.log(m3.findMessageById(3)); // 'whats up?'
console.log(m3.findMessageById(4)); // undefined
console.log(m3.findMessageById()); // undefined

console.log(" ** TESTING findMessageByValue ** ");
var m4 = new MessageBoard();
console.log(m4.addMessage('hello!'));
console.log(m4.addMessage('hi!'));
console.log(m4.addMessage('whats up?'));
console.log(m4.findMessageByValue('hello!')); // 'hello!'
console.log(m4.findMessageByValue('hi!')); // 'hi!'
console.log(m4.findMessageByValue('whats up?')); // 'whats up?'
console.log(m4.findMessageByValue('nothing here')); // undefined
console.log(m4.findMessageByValue()); // undefined

console.log(" ** TESTING removeMessage ** ");
var m5 = new MessageBoard();
console.log(m5.addMessage('hello!'));
console.log(m5.addMessage('hi!'));
console.log(m5.addMessage('whats up?'));
console.log(m5.removeMessage(1));
console.log(m5.removeMessage(2));
console.log(m5.messages.size); // 1
console.log(m5.removeMessage()); // m

console.log(" ** TESTING numberOfMessages ** ");
var m6 = new MessageBoard();
console.log(m6.addMessage('hello!'));
console.log(m6.addMessage('hi!'));
console.log(m6.addMessage('whats up?'));
console.log(m6.numberOfMessages()); // 3

console.log(" ** TESTING messagesToArray ** ");
var m7 = new MessageBoard();
console.log(m7.addMessage('hello!'));
console.log(m7.addMessage('hi!'));
console.log(m7.addMessage('whats up?'));
console.log(m7.messagesToArray()); // ['hello!', 'hi!', 'whats up?'])

/*
Write a function called uniqueValues which accepts an array and returns the number of unique values in the array

uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6
*/

function uniqueValues(arr){
  return new Set(arr).size;
}

console.log();
console.log("============================");
console.log(" ** TESTING uniqueValues ** ");
console.log(uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6])); // 6

/*

Write a function called hasDuplicates which accepts an array and returns true if there are duplicate values in the array, otherwise it should return false.

hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // true
hasDuplicates([1,2,3,4,5,6]) // false
hasDuplicates([]) // false
*/

function hasDuplicates(arr){
  return arr.length !== uniqueValues(arr);
}

console.log();
console.log("============================");
console.log(" ** TESTING hasDuplicates ** ");
console.log(hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6])); // true
console.log(hasDuplicates([1,2,3,4,5,6])); // false
console.log(hasDuplicates([])); // false

/*

Write a function called countPairs which accepts an array of numbers and a number. The function should return the number of unique pairs (two numbers) that sum up to the number passed to the function.

countPairs([8,2,6,4,10,0],10) // 3
countPairs([8,2],10) // 1
countPairs([1,2],10) // 0
countPairs([1,2,3,4,5],10) // 0
countPairs([],10) // 0
countPairs([5,4,-10,6,-20,16],-4) // 2
countPairs([0,-4],-4) // 1
*/

function countPairs(arr, num){
  const st = Array.from(new Set(arr).values());
//  console.log(st);
  let count = 0;
  for (let i = 0; i < st.length; i++) {
    for (let j = i+1; j < st.length; j++) {
//      console.log(`${st[i]} + ${st[j]}`);
      if (st[i] + st[j] === num) count++;
    }
  }
  return count;
}

function countPairs2(arr, num){
  const st = new Set(arr);
  let count = 0;
  for (let val of arr) {
    st.delete(val);
    if (st.has(num - val)) count++;
  }
  
  return count;
}

console.log();
console.log("============================");
console.log(" ** TESTING countPairs ** ");
console.log(countPairs([8,2,6,4,10,0],10)); // 3
console.log(countPairs([8,2],10)); // 1
console.log(countPairs([1,2],10)); // 0
console.log(countPairs([1,2,3,4,5],10)); // 0
console.log(countPairs([],10)); // 0
console.log(countPairs([5,4,-10,6,-20,16],-4)); // 2
console.log(countPairs([0,-4],-4)); // 1

console.log();
console.log("============================");
console.log(" ** TESTING countPairs2 ** ");
console.log(countPairs2([8,2,6,4,10,0],10)); // 3
console.log(countPairs2([8,2],10)); // 1
console.log(countPairs2([1,2],10)); // 0
console.log(countPairs2([1,2,3,4,5],10)); // 0
console.log(countPairs2([],10)); // 0
console.log(countPairs2([5,4,-10,6,-20,16],-4)); // 2
console.log(countPairs2([0,-4],-4)); // 1
