# Object watcher

Object watcher is library used to add a watercher on object. Whenever object properties being read or write 
get callback & set callback will be notified with the object property.

## Commands

library code inside `/src`.
examples are provided inside `/src/examples`.

## Example 1 

```js
const ObjectWatcher = require('object-watcher').default;

const objectToWatch = {
    carName: 'Tesla',
    modelName: 'Model X'
};

function getterFunction(key, value) {
    console.log(`called getter function ${key}, ${value}`);
}

function setterFunction(key, oldValue, newValue) {
    console.log(`called setter function, key ${key}, oldValue ${oldValue}, newValue ${newValue}`);
}

const objectPropertyWatcher = new ObjectWatcher(objectToWatch, getterFunction, setterFunction);
objectPropertyWatcher.carName;
objectPropertyWatcher.modelName = 'Model Y';
```
