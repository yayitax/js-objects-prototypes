/**
 * Creating JS Objects
 */
'use strict';

/**
 * Using Object Literals to Create JS Objects
 */
var cat = { name: 'Fluffy', color: 'White' }

display(cat.name);
display(cat.color);
/**
 * Dynamic nature of JS
 */
cat.age = 3;

display(cat.age);

cat.speak = function() {
    display('Meow!! :3c');
}

cat.speak();

/**
 * Using Constructor Functions to Create JS Objects
 */

//new keyword

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

cat = new Cat("Fluff", "Black");

display(cat.name);

/**
 * Using Object.create()
 */
cat = Object.create(Object.prototype, {
    name: {
        value: 'Fluffy',
        enumerable: true,
        writable: true,
        configurable: true
    },
    color: {
        value: 'White',
        enumerable: true,
        writable: true,
        configurable: true
    }
});

display(cat);

/**
 * ECMAScript 6  Classes
 */
class CatClass {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    speak() {
        display("Meow~! >:3c");
    }
}

cat = new CatClass('Oreo', 'Siamese');

display(cat);
cat.speak();