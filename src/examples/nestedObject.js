const ObjectWatcher = require('../../dist/index').default;

const objectToWatch = {
    carName: 'Tesla',
    modelName: 'Model X',
    engine: {
        range: "303 Miles",
        battery: "Long Range",
        speed: "100 mph"
    }
};

function getterFunction(key, value) {
    console.log(`called getter function ${key}`, value);
}

function setterFunction(key, oldValue, newValue) {
    console.log(`called setter function, key ${key}, oldValue ${oldValue}, newValue ${newValue}`);
}

const objectPropertyWatcher = new ObjectWatcher(objectToWatch, getterFunction, setterFunction);
objectPropertyWatcher.carName;
objectPropertyWatcher.modelName = 'Model Y';
objectPropertyWatcher.engine.speed = "155 mph";
console.log(objectPropertyWatcher.engine.speed);

