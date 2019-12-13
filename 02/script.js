/**
 * Object Properties
 */
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'White'
};


/**
 * Backet Notation
 */

// cat['Eye Color'] = 'Green';

// display(cat['Eye Color']);

/**
 * JS Property Descriptors
 */

display(Object.getOwnPropertyDescriptor(cat, 'name'));

/**
 * Using the writtable attribute
 */

Object.defineProperty(cat, 'name', { writable: false });
display(Object.getOwnPropertyDescriptor(cat, 'name'));
Object.defineProperty(cat, 'name', { writable: true });

cat.name = { first: 'Fluffy', last: 'LaBeouf' };
display(cat.name);

//Object.defineProperty(cat, 'name', { writable: false });
display(Object.getOwnPropertyDescriptor(cat, 'name'));
cat.name.first = 'Scratchy';
display(cat.name);

cat.name.first = 'Fluffy';
//Object.freeze(cat.name);
// cat.name.first = 'Scratchy'; //error
// display(cat.name); 

/**
 * Using the enumerable attribute
 */

for (var propertyName in cat) {
    display(propertyName + ': ' + cat[propertyName]);
}

Object.defineProperty(cat, 'name', { enumerable: false });

for (var propertyName in cat) {
    display(propertyName + ': ' + cat[propertyName]);
}

display(Object.keys(cat));
Object.defineProperty(cat, 'name', { enumerable: true });
display(Object.keys(cat));

display(JSON.stringify(cat));
Object.defineProperty(cat, 'name', { enumerable: false });
display(JSON.stringify(cat));

/**
 * Using the configurable attribute
 */

// Object.defineProperty(cat, 'name', { configurable: false });
// Object.defineProperty(cat, 'name', { enumerable: true }); // error
// Object.defineProperty(cat, 'name', { writable: true }); // error
// Object.defineProperty(cat, 'name', { configurable: true }); // error
// delete cat.name; // error

/**
 * Using getters and setters
 */
Object.defineProperty(cat, 'fullName', {
    get: function() {
        return this.name.first + ' ' + this.name.last;
    },

    set: function(value) {
        var nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
    }
});

display(cat.fullName);

cat.fullName = "Kylo Ren";
display(cat.fullName);
display(cat.name.first);
display(cat.name.last);