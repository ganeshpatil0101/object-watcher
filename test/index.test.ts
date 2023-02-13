import ObjectWatcher from '../src/index';

describe('GIVEN ObjectWatcher', () => {
    const getCallback = jest.fn();
    const setCallback = jest.fn();
    afterEach(() => {
        getCallback.mockReset();
        setCallback.mockReset();
    });

//   it('ObjectWatcher should watch object get method', () => {
//     const testObject = {
//         name: 'Hello Object'
//     };
//     const objWatcher = ObjectWatcher(testObject, getCallback, setCallback);
//     objWatcher.name;
//     expect(getCallback).toHaveBeenCalled();
//     expect(getCallback).toHaveBeenCalledWith('name', testObject.name);
//   });

//   it('ObjectWatcher should watch object set method', () => {
//     const testObject = {
//         name: 'Hello Object'
//     };
//     const expected = 'Hello Watchers';
//     const objWatcher = ObjectWatcher(testObject, getCallback, setCallback);
//     objWatcher.name = expected;
//     expect(setCallback).toHaveBeenCalled();
//     expect(setCallback).toHaveBeenCalledWith('name', testObject.name, expected);
//   });

  it('ObjectWatcher should call get function WHEN nested Object', () => {
    const nestedOb = {
        name: 'Tesla', 
        engine: {
            range: "303 Miles",
        }
    };
    const nestedObWatcher = ObjectWatcher(nestedOb, getCallback, setCallback);
    nestedObWatcher.engine.range;
    expect(getCallback).toHaveBeenCalled();
    expect(getCallback).toHaveBeenCalledWith('range', '303 Miles');
  });

  it('ObjectWatcher should call get function WHEN nested Object with single property', () => {
    const nestedOb = {
        name: 'Tesla', 
        engine: {
            range: "303 Miles",
        }
    };
    const nestedObWatcher = ObjectWatcher(nestedOb, getCallback, setCallback);
    nestedObWatcher.name;
    expect(getCallback).toHaveBeenCalled();
    expect(getCallback).toHaveBeenCalledWith('name', 'Tesla');
  });

});

