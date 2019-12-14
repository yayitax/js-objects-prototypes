// /**
//  * Prototypes and Inheritance
//  */
// 'use strict';

// /**
//  * Getting started w js prototypes
//  */

// var arr = ['red', 'blue', 'green'];

// var last = arr[arr.length - 1];
// display(last);

// Object.defineProperty(arr, 'last', {
//     get: function() {
//         return this[this.length - 1];
//     }
// });

// last = arr.last;
// display(last);

// var arr2 = ['red', 'blue', 'pink'];
// display(arr2.last);

// Object.defineProperty(Array.prototype, 'last', {
//     get: function() {
//         return this[this.length - 1];
//     }
// });


// var arr3 = ['red', 'blue', 'orange'];
// display(arr3.last);

// /**
//  * What is a prototype?
//  */

// var myFunc = function() {};
// display(myFunc.prototype);

// var cat = { name: 'Fluffy' };
// display(cat.prototype);
// display(cat.__proto__);

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }

// var fluffy = new Cat('Fluffy', 'white');

// display(Cat.prototype);
// display(fluffy.__proto__);
// display(Cat.prototype === fluffy.__proto__);

// Cat.prototype.age = 3;
// display(Cat.prototype);
// display(fluffy.__proto__);

// var muffin = new Cat('Muffin', 'brown');
// display(muffin.__proto__);

// /**
//  * Instance vs Prototype Properties
//  */

// display(fluffy.age);
// display(muffin.age);

// //fluffy.age = 5;

// display(fluffy.age);
// display(muffin.age);

// display(fluffy.__proto__.age);

// display(Object.keys(fluffy));

// display(fluffy.hasOwnProperty('age'));

// //fluffy.age = 5;

// display(fluffy.hasOwnProperty('age'));

// /**
//  * Changing a Function's prototype
//  */
// Cat.prototype = { age: 5 };
// display(fluffy.age);
// display(muffin.age);
// display(Cat.prototype.age);

// var snowball = new Cat('Snowball', 'calico');
// display(snowball.age);

// /**
//  * Multiple levels of inheritance
//  */
// display(fluffy.__proto__);
// display(fluffy.__proto__.__proto__);
// //display(fluffy.__proto__.__proto__.__proto__);

// /**
//  * Creating own prototypal inheritance chains
//  */
// function Animal(voice) {
//     this.voice = voice || 'Grunt!!';
// };
// Animal.prototype.speak = function() {
//     display(this.voice);
// }

// function Dog(name, color) {
//     Animal.call(this, "Ruff!! >:P"); // Important!!
//     this.name = name;
//     this.color = color;
// }

// Dog.prototype = Object.create(Animal.prototype); // Important!!

// Dog.prototype.constructor = Dog; // Important!!
// var rex = new Dog('Rex', 'dotted');
// rex.speak();

// display(rex);
// display(rex instanceof Dog);
// display(rex.__proto__.__proto__);

/**
 * Creating prototype w classes
 */
class Animal {
    constructor(voice) {
        this.voice = voice || 'Grunt!!';
    }
    speak() {
        display(this.voice);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super('Mrow~ :3c');
        this.name = name;
        this.color = color;
    }
}

var fluffy = new Cat('Fluffy', 'White');
fluffy.speak();
display(fluffy);