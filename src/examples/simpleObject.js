const ObjectWatcher = require('../../dist/index').default;

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
